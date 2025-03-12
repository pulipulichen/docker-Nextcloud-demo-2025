#!/bin/bash

/var/www/html/occ app:enable fulltextsearch
/var/www/html/occ app:enable fulltextsearch_elasticsearch
/var/www/html/occ app:enable files_fulltextsearch

# /var/www/html/occ app:enable files_fulltextsearch_tesseract
# apt update
# apt install tesseract-ocr tesseract-ocr-chi-tra tesseract-ocr-chi-sim \
#   tesseract-ocr-eng tesseract-ocr-chi-tra-vert \
#   tesseract-ocr-script-viet tesseract-ocr-script-hant tesseract-ocr-script-hant-vert -y

# 暫時不啟用

wait_for_elasticsearch() {

  HOST="elasticsearch"
  PORT=9200

  echo "Waiting for $HOST:$PORT..."
  while ! (echo > /dev/tcp/$HOST/$PORT) 2>/dev/null; do
    sleep 10
    echo "[enable_fulltextsearch.sh] Waiting for Elasticsearch..."
  done

  sleep 60

  echo "[enable_fulltextsearch.sh] Elasticsearch is ready!"

  # /var/www/html/occ fulltextsearch:configure "{\
  #   \"search_platform\": \"elastic_search\",\
  #   \"elastic_host\": \"http://elastic:elastic@elasticsearch:9200/\"
  # }"

  /var/www/html/occ config:import /docker-entrypoint-hooks.d/post-installation/fulltextsearch_settings.json
  /var/www/html/occ config:app:set fulltextsearch search_platform --value="OCA\FullTextSearch_Elasticsearch\Platform\ElasticSearchPlatform"
}


if [ "$NEXTCLOUD_ENABLE_FULLTEXT_SEARCH" = "true" ]; then
    wait_for_elasticsearch
fi