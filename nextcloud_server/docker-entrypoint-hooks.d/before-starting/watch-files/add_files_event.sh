#!/bin/bash

file=$1
timestamp=$2

# 2025年3月16日 台北時間 下午3:22: 修正 curl 指令，先用 echo 顯示指令，並將原來的 curl 指令用註解表示
# echo "curl -X 'POST' 'http://${SEMANTIC_DATABASE_BASE}:8000/index' -H 'accept: application/json' -H 'Content-Type: multipart/form-data' -F 'knowledge_id=${SEMANTIC_DATABASE_KNOWLEDGE_ID}' -F 'title=$(basename \"$file\")' -F 'file=@$file'" > /tmp/add_file.txt
#curl -X 'POST' \
#  'http://${SEMANTIC_DATABASE_BASE}:8000/index' \
#  -H 'accept: application/json' \
#  -H 'Content-Type: multipart/form-data' \
#  -F 'knowledge_id=${SEMANTIC_DATABASE_KNOWLEDGE_ID}' \
#  -F 'title=$(basename "$file")' \
#  -F "file=@$file"

# echo "[ADD] $file at $timestamp"

if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

cd $(dirname $0)
# 20250316-211000 計算排除 DEST 的相對檔案路徑
relative_path=$(echo "$file" | sed "s|^$DEST||")

# 20250316-211000 將檔案路徑和相對檔案路徑作為參數傳遞給 database_index.php
php ./database_index.php "$file" "$relative_path"
