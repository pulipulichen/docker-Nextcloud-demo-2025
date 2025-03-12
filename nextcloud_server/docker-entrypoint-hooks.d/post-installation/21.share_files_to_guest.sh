#!/bin/bash

# 定義來源與目標目錄
SRC="/files/"
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

rsync -a --delete "$SRC" "$DEST"
/var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER

# =================================================================

# 設定 Nextcloud 伺服器與 API 資訊
NEXTCLOUD_URL="http://localhost"
USERNAME="$NEXTCLOUD_ADMIN_USER"
PASSWORD="$NEXTCLOUD_ADMIN_PASSWORD"
SHARE_WITH="$NEXTCLOUD_GUEST_EMAIL"
PERMISSIONS="1"

# 取得 /files/ 目錄底下的第一層檔案與目錄
FILES=$(find /files/ -mindepth 1 -maxdepth 1 -printf "%f\n")

# 迴圈執行分享指令
for FILE in $FILES; do
    echo "Sharing: $FILE"
    curl -u "$USERNAME:$PASSWORD" -X POST \
         -H "OCS-APIRequest: true" \
         -d "path=$FILE&shareType=0&shareWith=$SHARE_WITH&permissions=$PERMISSIONS" \
         "$NEXTCLOUD_URL/ocs/v2.php/apps/files_sharing/api/v1/shares"
done
