#!/bin/bash

# 定義來源與目標目錄
SRC="/html/apps/"
DEST="/var/www/html/apps/"

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

watch_apps() {

  sleep 10

  rsync -av --update --delete "$SRC" "$DEST"
  # 監控目錄變更
  inotifywait -m -r -e modify,create,delete,move "$SRC" --format '%w%f' | while read FILE
  do
      echo "檔案變更偵測到：$FILE，執行同步..."
      rsync -a --update --delete "$SRC" "$DEST"
      echo "同步完成！"
  done
}

watch_apps &
