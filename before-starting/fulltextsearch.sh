#!/bin/bash

# https://fariszr.com/nextcloud-fulltextsearch-elasticsearch-docker-setup/

# exit 0
wait_for_elasticsearch() {

  HOST="elasticsearch"
  PORT=9200

  echo "Waiting for $HOST:$PORT..."
  while ! (echo > /dev/tcp/$HOST/$PORT) 2>/dev/null; do
    sleep 2
    echo "Waiting for Elasticsearch..."
  done

  sleep 60

  echo "Elasticsearch is ready!"

  # Stop all running indexes
  # php /var/www/html/occ fulltextsearch:stop
  # Start live index
  php /var/www/html/occ fulltextsearch:live 
}

wait_for_elasticsearch &