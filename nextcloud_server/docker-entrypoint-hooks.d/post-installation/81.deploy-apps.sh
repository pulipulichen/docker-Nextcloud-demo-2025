#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# Define source and target directories
SRC="/html/apps/"
DEST="/var/www/html/apps/"

# 檢查目標目錄是否存在
if [ ! -d "$DEST" ]; then
    echo "Target directory $DEST does not exist, canceling execution!"
    exit 1
fi

watch_apps_prepare() {
  local DIR=$1
  local DIRNAME=$(basename $DIR)
#   sleep 10

  if [ ! -d "$DEST$DIRNAME.bak" ]; then
    cp -rf "$DEST$DIRNAME" "$DEST$DIRNAME.bak"
  fi

  rsync -a -I --progress "$DIR/" "$DEST$DIRNAME/"
  # cp -rf "$DIR/*" "$DEST$DIRNAME"
}

# watch_apps &

# Get the first-level subdirectories under the $SRC directory and loop through them.
for dir in "$SRC"*/; do
    # Ensure that the variable dir is a directory.
    if [ -d "$dir" ]; then

        echo "Processing subdirectory: $dir"
        # Here you can execute your synchronization commands, such as rsync.
        watch_apps_prepare "$dir"
    fi
done
