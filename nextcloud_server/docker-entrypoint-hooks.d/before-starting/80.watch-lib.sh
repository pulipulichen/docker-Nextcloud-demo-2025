#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/html/lib/"
DEST="/var/www/html/lib/"

# 檢查 inotify-tools 是否安裝
if ! command -v inotifywait &> /dev/null; then
    echo "請安裝 inotify-tools：sudo apt install inotify-tools 或 sudo yum install inotify-tools"
    exit 1
fi

# 檢查目標目錄是否存在
if [ ! -d "$DEST" ]; then
    echo "目標目錄 $DEST 不存在，取消執行！"
    exit 1
fi

watch_lib_prepare() {
  local DIR=$1

  # sleep 10

  echo "開始監控 $SRC$DIR"
  echo "目標是   $DEST$DIR"

  if [ ! -d "$DEST$DIR.bak" ]; then
    cp -rf "$DEST$DIR" "$DEST$DIR.bak"
  fi

  rsync -a "$SRC$DIR" "$DEST$DIR"
}

watch_lib() {
  local DIR=$1

  # sleep 10

  echo "開始監控 $SRC$DIR"
  echo "目標是   $DEST$DIR"

  if [ ! -d "$DEST$DIR.bak" ]; then
    cp -rf "$DEST$DIR" "$DEST$DIR.bak"
  fi

  rsync -a "$SRC$DIR" "$DEST$DIR"
}

TARGET_DIRS=("l10n" "private" "public")
for DIR in "${TARGET_DIRS[@]}"; do
  watch_lib_prepare $DIR &
  watch_lib $DIR &
done

sleep 10
