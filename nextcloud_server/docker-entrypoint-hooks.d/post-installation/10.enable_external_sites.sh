#!/bin/bash

/var/www/html/occ app:enable external

if [ -n "$NEXTCLOUD_EXTERNAL_SITES" ]; then
  /var/www/html/occ config:app:set external sites --value="$NEXTCLOUD_EXTERNAL_SITES"
fi

