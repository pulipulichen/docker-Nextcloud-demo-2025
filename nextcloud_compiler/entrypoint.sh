#!/bin/bash

# 判斷 NEXTCLOUD_ENV 是否為 development
if [ "$NEXTCLOUD_ENV" = "development" ]; then
  npm run watch --silent >/dev/null 2>&1
else
  npm run build --silent >/dev/null 2>&1
fi
