#!/bin/bash

/var/www/html/occ app:enable external

if [ -n "$NEXTCLOUD_EXTERNAL_SITES" ]; then
  cp -f /html/custom_apps/external/lib/SitesManager.php /var/www/html/custom_apps/external/lib/SitesManager.php

  /var/www/html/occ config:app:set external sites --value=$NEXTCLOUD_EXTERNAL_SITES
fi

# sudo -u www-data /var/www/html/occ config:app:set external sites --value='{"1":{"id":1,"name":"Home","url":"/external_site/home.html","icon":"home.svg","lang":"","redirect":false},"2":{"id":2,"name":"Query","url":"/external_site/query.html","icon":"ask.svg","lang":"","redirect":false}}'