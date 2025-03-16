#!/bin/bash

# 延遲三秒執行，如果被重複呼叫，則取消之前的延遲，只執行最後一次呼叫
(
  flock -n 99 || exit
  sleep 3
  (
SRC="/files/"
# 如果 NEXTCLOUD_ADMIN_USER 是空值，給他預設值 admin，20250316-154000
if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

if [ ! -f "$DEST/.file_sync_init" ]; then
  rsync -a --delete "$SRC" "$DEST" > /dev/null # 20250316-155500 隱藏 rsync 訊息
  /var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER > /dev/null # 20250316-155500 隱藏 files:scan 訊息
else
  /var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER > /dev/null # 20250316-155500 隱藏 files:scan 訊息
  rsync -au "$SRC" "$DEST" > /dev/null # 20250316-155500 隱藏 rsync 訊息
  rsync -au "$DEST" "$SRC" > /dev/null # 20250316-155500 隱藏 rsync 訊息
  /var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER > /dev/null # 20250316-155500 隱藏 files:scan 訊息
fi

  )
) 99>/html/.sync_to_nextcloud_files.lock # 20250316-154200 修改鎖定檔案路徑，避免權限問題
