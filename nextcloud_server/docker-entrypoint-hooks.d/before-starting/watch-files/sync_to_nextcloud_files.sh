#!/bin/bash

SRC="/files/"
DEST="/var/www/html/data/${NEXTCLOUD_ADMIN_USER}/files/"

rsync -a --delete "$SRC" "$DEST"
/var/www/html/occ files:scan -- $NEXTCLOUD_ADMIN_USER
