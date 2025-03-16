#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義來源與目標目錄
SRC="/files/"

# 如果 NEXTCLOUD_ADMIN_USER 是空值，給他預設值 admin，20250316-154000
if [ -z "${NEXTCLOUD_ADMIN_USER}" ]; then
  NEXTCLOUD_ADMIN_USER="admin"
fi
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

watch_files_src() {
  # sleep 10
    cd $(dirname $0)
#   rm -rf $DEST/*
  
#   ./watch-files/sync_to_nextcloud_files.sh

  # 使用 inotifywait 持續監控目錄
  inotifywait -m -r -e modify -e create -e delete -e move --format '%e %w%f %T' --timefmt '%Y-%m-%d %H:%M:%S' "$SRC" |
  while read event file timestamp; do
      echo "偵測到變動 ${event}"
      case "$event" in
          MODIFY|ATTRIB)
              echo "[MODIFY] $file at $timestamp"
              ./watch-files/add_files_event.sh "$file" "$timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ;;
          CREATE|CREATE*)
              ./watch-files/add_files_event.sh "$file" "$timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ;;
          DELETE|DELETE*)
              ./watch-files/delete_files_event.sh "$file" "$timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ;;
          MOVED_FROM)
              old_path="$file"
              ;;
          MOVED_TO)
              new_path="$file"
              # echo "[MOVE] from $old_path to $new_path at $timestamp"
              ./watch-files/move_files_event.sh "$old_path" "$new_path" "$timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ;;
      esac
  done
}

watch_files_dest() {
  # sleep 10
    cd $(dirname $0)
#   rm -rf $DEST/*
  
#   ./watch-files/sync_to_nextcloud_files.sh

  # 使用 inotifywait 持續監控目錄
  inotifywait -m -r -e modify -e create -e delete -e move --format '%e %w%f %T' --timefmt '%Y-%m-%d %H:%M:%S' "$DEST" |
  while read event file timestamp; do
      echo "偵測到變動 ${event}"
      case "$event" in
          MODIFY|ATTRIB)
              echo "[MODIFY] $file at $timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ./watch-files/add_files_event.sh "$file" "$timestamp"
              
              ;;
          CREATE|CREATE*)
              ./watch-files/sync_to_nextcloud_files.sh
              ./watch-files/add_files_event.sh "$file" "$timestamp"
              
              ;;
          DELETE|DELETE*)
              ./watch-files/sync_to_nextcloud_files.sh
              ./watch-files/delete_files_event.sh "$file" "$timestamp"
              
              ;;
          MOVED_FROM)
              old_path="$file"
              ;;
          MOVED_TO)
              new_path="$file"
              # echo "[MOVE] from $old_path to $new_path at $timestamp"
              ./watch-files/sync_to_nextcloud_files.sh
              ./watch-files/move_files_event.sh "$old_path" "$new_path" "$timestamp"
              
              ;;
      esac
  done
}

cd $(dirname $0)
./watch-files/sync_to_nextcloud_files.sh
watch_files_src &
watch_files_dest
sleep 10
