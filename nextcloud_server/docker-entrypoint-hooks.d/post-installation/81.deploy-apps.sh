#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/html/apps/"
DEST="/var/www/html/apps/"

# 檢查目標目錄是否存在
if [ ! -d "$DEST" ]; then
    echo "目標目錄 $DEST 不存在，取消執行！"
    exit 1
fi

watch_apps_prepare() {
  local DIR=$1
  local DIRNAME=$(basename $DIR)
#   sleep 10

  if [ ! -d "$DEST$DIRNAME.bak" ]; then
    cp -rf "$DEST$DIRNAME" "$DEST$DIRNAME.bak"
  fi

  rsync -a -I --progress "$DIR/" "$DEST$DIRNAME/"
  # cp -rf "$DIR/*" "$DEST$DIRNAME"
}

# watch_apps &

# 取得 $SRC 目錄下的第一層子目錄並迴圈處理
for dir in "$SRC"*/; do
    # 確保變數 dir 是目錄
    if [ -d "$dir" ]; then

        # echo "發現子目錄：$dir"
        # 這裡可以執行你的同步指令，例如 rsync
        watch_apps_prepare "$dir"
    fi
done
