#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/html/config.php"
DEST="/var/www/html/config/config.php"

# 檢查 inotify-tools 是否安裝
if ! command -v inotifywait &> /dev/null; then
    echo "請安裝 inotify-tools：sudo apt install inotify-tools 或 sudo yum install inotify-tools"
    exit 1
fi

watch_config() {

  sleep 10

 cp -f "$SRC" "$DEST"
  # 監控目錄變更
  inotifywait -m -r -e modify,create,delete,move "$SRC" --format '%w%f' | while read FILE
  do
      echo "檔案變更偵測到：$FILE，執行同步..."
      cp -f "$SRC" "$DEST"
    #   echo "同步完成！"
  done
}

watch_config &
