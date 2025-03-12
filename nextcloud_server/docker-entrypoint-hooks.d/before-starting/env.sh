#!/bin/bash

echo "==env.sh=============================================================="
echo $NEXTCLOUD_ENV
echo "================================================================"

# 判斷 NEXTCLOUD_ENV 是否為 development
if [ "$NEXTCLOUD_ENV" = "development" ]; then
  export OPCACHE_ENABLE=0
else
  export OPCACHE_ENABLE=1
fi

