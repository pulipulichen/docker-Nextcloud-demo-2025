#!/bin/bash

# http://elastic:elastic@elasticsearch:9200/

# https://fariszr.com/nextcloud-fulltextsearch-elasticsearch-docker-setup/

wait_for_database() {

  # sleep 10

  HOST="nextclouddb"
  PORT=3306

  echo "Waiting for $HOST:$PORT..."
  while ! (echo > /dev/tcp/$HOST/$PORT) 2>/dev/null; do
    sleep 10
    echo "[fulltextsearch.sh] Waiting for Database..."
  done
}

wait_for_elasticsearch() {

  php /var/www/html/occ app:enable fulltextsearch
  php /var/www/html/occ app:enable fulltextsearch_elasticsearch
  php /var/www/html/occ app:enable files_fulltextsearch

  # ================

  HOST="elasticsearch"
  PORT=9200

  echo "Waiting for $HOST:$PORT..."
  while ! (echo > /dev/tcp/$HOST/$PORT) 2>/dev/null; do
    sleep 10
    echo "[fulltextsearch.sh] Waiting for Elasticsearch..."
  done

  sleep 60

  echo "[fulltextsearch.sh] Elasticsearch is ready!"

  # Stop all running indexes
  # php /var/www/html/occ fulltextsearch:stop
  # Start live index
  php /var/www/html/occ fulltextsearch:check
  php /var/www/html/occ fulltextsearch:test
  php /var/www/html/occ fulltextsearch:index
  php /var/www/html/occ fulltextsearch:live &
}

wait_for_database 

# echo $(USER) $(whoami)
if [ "$NEXTCLOUD_ENABLE_FULLTEXT_SEARCH" = "true" ]; then
  wait_for_elasticsearch
# else
  # php /var/www/html/occ app:disable fulltextsearch
  # php /var/www/html/occ app:disable fulltextsearch_elasticsearch
  # php /var/www/html/occ app:disable files_fulltextsearch
fi