#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/html/lib/"
DEST="/var/www/html/lib/"

# 檢查目標目錄是否存在
if [ ! -d "$DEST" ]; then
    echo "目標目錄 $DEST 不存在，取消執行！"
    exit 1
fi

watch_lib_prepare() {
  local DIR=$1

  if [ ! -d "$DEST$DIR.bak" ]; then
    cp -rf "$DEST$DIR" "$DEST$DIR.bak"
  fi

  rsync -a -I "$SRC$DIR/" "$DEST$DIR/"
  # cp -rf $SRC$DIR/* "$DEST$DIRNAME"
}

TARGET_DIRS=("l10n" "private" "public")
for DIR in "${TARGET_DIRS[@]}"; do
  watch_lib_prepare $DIR
done

sleep 3
