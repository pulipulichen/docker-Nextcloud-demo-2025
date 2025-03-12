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

  # echo "開始監控 $SRC$DIR"
  # echo "目標是   $DEST$DIR"

  if [ ! -d "$DEST$DIR.bak" ]; then
    cp -rf "$DEST$DIR" "$DEST$DIR.bak"
  fi

  rsync -a "$SRC$DIR/" "$DEST$DIR/"
  # cp -rf $SRC$DIR/* "$DEST$DIRNAME"
}

watch_lib() {
  local DIR=$1

  # 監控目錄變更
  # inotifywait -m -r -e modify,create,delete,move "$SRC$DIR" --format '%w%f' | while read FILE
  inotifywait -m -r -e modify "$SRC$DIR" --format '%w%f' | while read FILE
  do
      echo "[watch-lib] 檔案變更偵測到：$FILE，執行同步... ( rsync -a "$SRC$DIR" "$DEST$DIR" )"
      # rsync -a "$SRC$DIR" "$DEST$DIR"
      cp -f "$FILE" "/var/www$FILE"
    #   echo "同步完成！"
  done
}

TARGET_DIRS=("l10n" "private" "public")
for DIR in "${TARGET_DIRS[@]}"; do
  watch_lib_prepare $DIR
  watch_lib $DIR &
done

sleep 3
