#!/bin/bash

# 判斷 NEXTCLOUD_ENV 是否為 development
if [ "$NEXTCLOUD_ENV" = "development" ]; then
  npm run watch
else
  npm run build
fi
