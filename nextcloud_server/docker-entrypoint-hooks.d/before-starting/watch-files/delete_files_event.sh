#!/bin/bash

file=$1
timestamp=$2

# 2025年3月16日 台北時間 下午3:21: 修正 curl 指令，先用 echo 顯示指令，並將原來的 curl 指令用註解表示
# echo "curl -X 'GET' 'http://${SEMANTIC_DATABASE_BASE}:8000/knowledge_base/${SEMANTIC_DATABASE_KNOWLEDGE_ID}/item/$(basename "$file")/' -H 'accept: application/json'"
#curl -X 'GET' \
#  'http://${SEMANTIC_DATABASE_BASE}:8000/knowledge_base/${SEMANTIC_DATABASE_KNOWLEDGE_ID}/item/$(basename "$file")/' \
#  -H 'accept: application/json'

# echo "[DELETE] $file at $timestamp"


if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

cd $(dirname $0)
# 20250316-211000 計算排除 DEST 的相對檔案路徑
relative_path=$(echo "$file" | sed "s|^$DEST||")

# 20250316-211000 將檔案路徑和相對檔案路徑作為參數傳遞給 database_index.php
php ./database_delete.php "$file" "$relative_path"

