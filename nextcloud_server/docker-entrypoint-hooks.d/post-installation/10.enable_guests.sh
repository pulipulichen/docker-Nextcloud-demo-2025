#!/bin/bash

/var/www/html/occ app:enable guests

echo "Admin user: $NEXTCLOUD_ADMIN_USER"
echo "Guest email: $NEXTCLOUD_GUEST_EMAIL"
echo "Guest user: $NEXTCLOUD_GUEST_USER"
echo "Guest password: $NEXTCLOUD_GUEST_PASSWORD"

# export OC_PASS=password
OC_PASS=$NEXTCLOUD_GUEST_PASSWORD /var/www/html/occ guests:add --password-from-env --display-name "$NEXTCLOUD_GUEST_USER" $NEXTCLOUD_ADMIN_USER $NEXTCLOUD_GUEST_EMAIL