#!/bin/bash

# 延遲三秒執行，如果被重複呼叫，則取消之前的延遲，只執行最後一次呼叫
(
  flock -n 99 || exit
  sleep 3
  (
SRC="/files/"
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

if [ ! -f "$DEST/.file_sync_init" ]; then
  rsync -a --delete "$SRC" "$DEST"
  /var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER
else
  rsync -au "$SRC" "$DEST"
  rsync -au "$DEST" "$SRC"
fi
  )
) 99>/tmp/sync_to_nextcloud_files.lock
