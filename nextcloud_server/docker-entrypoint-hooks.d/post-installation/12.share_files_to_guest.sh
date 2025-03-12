#!/bin/bash

exit 0

sudo -u www-data php occ files:scan --path="admin/files"

FILES=$(sudo -u www-data php occ files:list admin --output json | jq -r '.[] | select(.type=="file") | .path')

for FILE in $FILES; do
    sudo -u www-data php occ files:shares:create --share-with guest --share-type 0 --path "admin/files/$FILE"
done

FOLDERS=$(sudo -u www-data php occ files:list admin --output json | jq -r '.[] | select(.type=="dir") | .path')

for FOLDER in $FOLDERS; do
    sudo -u www-data php occ files:shares:create --share-with guest --share-type 0 --path "admin/files/$FOLDER"
done



find /var/www/html/data/admin/files -type f | while read FILE; do
    REL_PATH=$(echo "$FILE" | sed 's|/var/www/html/data/admin/files/||')
    sudo -u www-data php occ files:shares:create --share-with guest --share-type 0 --permissions 1 --path "admin/files/$REL_PATH"
done

curl -u "admin:你的應用程式密碼" -X POST \
         -H "OCS-APIRequest: true" \
         -d "path=/admin/files/$FILE&shareType=0&shareWith=guest&permissions=1" \
         https://你的Nextcloud網址/ocs/v2.php/apps/files_sharing/api/v1/shares