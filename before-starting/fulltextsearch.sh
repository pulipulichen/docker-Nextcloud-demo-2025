#!/bin/bash

# http://elastic:elastic@elasticsearch:9200/

# https://fariszr.com/nextcloud-fulltextsearch-elasticsearch-docker-setup/

wait_for_elasticsearch() {

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

# wait_for_elasticsearch