#!/bin/bash

/var/www/html/occ app:enable fulltextsearch
/var/www/html/occ app:enable fulltextsearch_elasticsearch
/var/www/html/occ app:enable files_fulltextsearch
/var/www/html/occ app:enable files_fulltextsearch_tesseract

apt install tesseract-ocr tesseract-ocr-chi-tra tesseract-ocr-chi-sim tesseract-ocr-eng -y




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

  /var/www/html/occ fulltextsearch:configure "{\
    \"search_platform\": \"elastic_search\",\
    \"elastic_host\": \"http://elastic:elastic@elasticsearch:9200/\"
  }"
}

wait_for_elasticsearch &