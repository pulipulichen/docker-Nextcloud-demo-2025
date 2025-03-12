#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/files/"
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

# echo "==watch-files.sh=============================================================="
# echo $DEST
# echo "================================================================"

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

sync_to_nextcloud_files() {
  rsync -a --delete "$SRC" "$DEST"
  /var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER
}

add_files_event() {
  local file=$1
  local timestamp=$2
  
  echo "[ADD] $file at $timestamp"

  sync_to_nextcloud_files
}

delete_files_event() {
  local file=$1
  local timestamp=$2
  
  echo "[DELETE] $file at $timestamp"

  sync_to_nextcloud_files
}

move_files_event() {
  local old_path=$1
  local new_path=$2
  local timestamp=$3
  
  echo "[MOVE] from $old_path to $new_path at $timestamp"

  sync_to_nextcloud_files
}


watch_files() {

  # sleep 10

  rm -rf $DEST/*
  
  sync_to_nextcloud_files

  # 使用 inotifywait 持續監控目錄
  inotifywait -m -r -e modify -e create -e delete -e move --format '%e %w%f %T' --timefmt '%Y-%m-%d %H:%M:%S' "$SRC" |
  while read event file timestamp; do
      case "$event" in
          MODIFY|ATTRIB)
              # echo "[MODIFY] $file at $timestamp"
              add_files_event "$file" "$timestamp"
              ;;
          CREATE|CREATE*)
              add_files_event "$file" "$timestamp"
              ;;
          DELETE|DELETE*)
              delete_files_event "$file" "$timestamp"
              ;;
          MOVED_FROM)
              old_path="$file"
              ;;
          MOVED_TO)
              new_path="$file"
              # echo "[MOVE] from $old_path to $new_path at $timestamp"
              move_files_event "$old_path" "$new_path" "$timestamp"
              ;;
      esac
  done
}

watch_files &
sleep 10