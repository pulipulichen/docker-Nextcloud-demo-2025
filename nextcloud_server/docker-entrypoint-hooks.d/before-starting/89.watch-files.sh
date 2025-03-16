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

# watch_files_src() {
#   # sleep 10
#     cd $(dirname $0)
# #   rm -rf $DEST/*
  
# #   ./watch-files/sync_to_nextcloud_files.sh

#   # 使用 inotifywait 持續監控目錄
#   inotifywait -m -r -e modify -e create -e delete -e move --format '%e %w%f %T' --timefmt '%Y-%m-%d %H:%M:%S' "$SRC" |
#   while read event file timestamp; do
#       echo "偵測到變動 ${event}"
#       case "$event" in
#           MODIFY|ATTRIB)
#               echo "[MODIFY] $file at $timestamp"
#               ./watch-files/add_files_event.sh "$file" "$timestamp"
#               ./watch-files/sync_to_nextcloud_files.sh
#               ;;
#           CREATE|CREATE*)
#               ./watch-files/add_files_event.sh "$file" "$timestamp"
#               ./watch-files/sync_to_nextcloud_files.sh
#               ;;
#           DELETE|DELETE*)
#               ./watch-files/delete_files_event.sh "$file" "$timestamp"
#               ./watch-files/sync_to_nextcloud_files.sh
#               ;;
#           MOVED_FROM)
#               old_path="$file"
#               ;;
#           MOVED_TO)
#               new_path="$file"
#               # echo "[MOVE] from $old_path to $new_path at $timestamp"
#               ./watch-files/move_files_event.sh "$old_path" "$new_path" "$timestamp"
#               ./watch-files/sync_to_nextcloud_files.sh
#               ;;
#       esac
#   done
# }

watch_files_dest() {
  # sleep 10
    cd $(dirname $0)
#   rm -rf $DEST/*
  
#   ./watch-files/sync_to_nextcloud_files.sh
  echo "================================================================"
  echo "開始監控 ${DEST}"
  echo "================================================================"

  # 使用 inotifywait 持續監控目錄，並等待 30 秒，如果期間有任何變動，則在 while 迴圈中處理，20250316-195000
  inotifywait -m -r -e modify -e create -e delete -e move "$DEST" --format '%e %w%f %T' --timefmt '%Y-%m-%d %H:%M:%S' |  while read event file timestamp; 
  do # 讀取 inotifywait 的輸出，每次讀取一個事件，20250316-195000
      # 如果file是以.part結尾，則continue
      if [[ $file == *.part ]]; then
          continue
      fi

      # echo "================================================================"
      # echo "偵測到變動 ${event}: ${file}" # 顯示偵測到的事件，20250316-195000
      # echo "================================================================"

      # sleep 5

      # 偵測file是否存在，如果不在，則continue迴圈
      # if [ ! -f "$DEST/$file" ]; then
      #     continue
      # fi
      # echo "存在，繼續執行"

      ./watch-files/sync_dist_to_src.sh # 同步檔案到 Nextcloud，20250316-195000

      # 依據事件類型處理檔案，20250316-195000
   
      
      case "$event" in # 判斷事件類型，20250316-195000
          MODIFY) # 如果是修改，20250316-195000
              ./watch-files/add_files_event.sh "$file" "$timestamp" # 記錄檔案事件，20250316-195000
              ;;
          ATTRIB) # 如果只修改 ATTRIB，則不做任何事情，20250316-195000
              ;;
          CREATE|CREATE*) # 如果是建立，20250316-195000
              ./watch-files/add_files_event.sh "$file" "$timestamp" # 記錄檔案事件，20250316-195000
              
              ;;
          DELETE|DELETE*) # 如果是刪除，20250316-195000
              ./watch-files/delete_files_event.sh "$file" "$timestamp" # 記錄檔案事件，20250316-195000
              ;;
          MOVED_FROM) # 如果是移動來源，20250316-195000
              old_path="$file" # 記錄舊路徑，20250316-195000
              ;;
          MOVED_TO) # 如果是移動目標，20250316-195000
              new_path="$file" # 記錄新路徑，20250316-195000
              # echo "[MOVE] from $old_path to $new_path at $timestamp"
              ./watch-files/move_files_event.sh "$old_path" "$new_path" "$timestamp" # 記錄檔案事件，20250316-195000
              
              ;;
      esac # 結束判斷，20250316-195000
  done # 結束迴圈，20250316-195000

  echo "結束了"
}

cd $(dirname $0)
./watch-files/sync_src_to_dist.sh
# watch_files_src &
watch_files_dest
sleep 10
