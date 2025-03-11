#!/bin/bash

/var/www/html/occ app:enable guests

# export OC_PASS=password
OC_PASS=$NEXTCLOUD_GUEST_PASSWORD /var/www/html/occ guests:add --password-from-env --display-name "$NEXTCLOUD_GUEST_USER" $NEXTCLOUD_ADMIN_USER $NEXTCLOUD_GUEST_EMAIL