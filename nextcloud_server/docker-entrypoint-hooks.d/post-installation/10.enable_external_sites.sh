#!/bin/bash

/var/www/html/occ app:enable external

if [ -n "$NEXTCLOUD_EXTERNAL_SITES" ]; then
  /var/www/html/occ config:app:set external sites --value=$NEXTCLOUD_EXTERNAL_SITES
fi

# sudo -u www-data /var/www/html/occ config:app:set external sites --value='{"1":{"id":1,"name":"Home","url":"https://blog.pulipuli.info","icon":"/apps/files/img/app.svg","lang":"","redirect":false}}'