#!/bin/bash

# 取得參數
old_path=$1
new_path=$2
timestamp=$3

echo "[MOVE] from $old_path to $new_path at $timestamp"

# 初始化變數
if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

# 為執行相對路徑的php檔案的準備
cd $(dirname $0)

# 20250316-211000 計算排除 DEST 的相對檔案路徑
relative_old_path=$(echo "$old_path" | sed "s|^$DEST||")

php ./database_delete.php "$old_path" "$relative_old_path"

# 20250316-211000 計算排除 DEST 的相對檔案路徑
relative_new_path=$(echo "$new_path" | sed "s|^$DEST||")

php ./database_index.php "$new_path" "$relative_new_path"
