#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/html/custom_apps/"
DEST="/var/www/html/custom_apps/"

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

watch_apps_prepare() {
  local DIR=$1
  local DIRNAME=$(basename $DIR)

  # echo "開始監控 $DIR"
  # echo "目標是   $DEST$DIRNAME"

#   sleep 10

  if [ ! -d "$DEST$DIRNAME.bak" ]; then
    cp -rf "$DEST$DIRNAME" "$DEST$DIRNAME.bak"
  fi

  rsync -a "$DIR/" "$DEST$DIRNAME/"
}

watch_apps() {
  local DIR=$1
  local DIRNAME=$(basename $DIR)

  # 監控目錄變更
  inotifywait -m -r -e modify,create,delete,move "$DIR" --format '%w%f' | while read FILE
  do
      echo "檔案變更偵測到：$FILE，執行同步..."
      cp -f "$FILE" "/var/www$FILE"
      # rsync -a "$DIR" "$DEST$DIRNAME"
    #   echo "同步完成！"
  done
}

# watch_apps &

# 取得 $SRC 目錄下的第一層子目錄並迴圈處理
for dir in "$SRC"*/; do
    # 確保變數 dir 是目錄
    if [ -d "$dir" ]; then

        # echo "發現子目錄：$dir"
        # 這裡可以執行你的同步指令，例如 rsync
        watch_apps_prepare "$dir"
        watch_apps "$dir" &
    fi
done

sleep 3