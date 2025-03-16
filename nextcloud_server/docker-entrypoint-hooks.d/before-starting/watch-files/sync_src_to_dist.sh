#!/bin/bash

SRC="/files/"
# 如果 NEXTCLOUD_ADMIN_USER 是空值，給他預設值 admin，20250316-154000
if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

rsync -a --delete --exclude='/files' "$SRC" "$DEST" --no-perms > /dev/null # 20250316-155500 隱藏 rsync 訊息
/var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER > /dev/null # 20250316-155500 隱藏 files:scan 訊息

cd $(dirname "$0")

# 列出 /files 底下的所有檔案，但排除隱藏檔案，最後以相對路徑來 echo。20250316-203054
find "$SRC" -not -path "*/.*" -type f -print0 | while IFS= read -r -d $'\0' file; do
  # echo "${file#$SRC}"
  php database_index.php "$file" "${file#$SRC}" # 20250316-205500 傳遞完整路徑和相對路徑
done
