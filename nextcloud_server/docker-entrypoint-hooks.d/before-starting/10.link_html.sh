#!/bin/bash

# cp -rf /html/* /var/www/html/

#!/bin/bash

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# echo =================================================================
# echo "99.link_html.sh"
# echo =================================================================

# 定義目標目錄
# TARGET_DIRS=("core" "config", "lib")
# TARGET_DIRS=("core" "config")

# TARGET_DIRS=("core" "dist" "apps")
TARGET_DIRS=("core" "dist" "custom_theme" "external_site")

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/html/$DIR" ]; then
        if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
            if [ -L "/var/www/html/$DIR" ]; then
                rm -rf "/var/www/html/$DIR"
                mv "/var/www/html/$DIR.bak" "/var/www/html/$DIR"
            fi
        else
            # 如果 /var/www/html/$DIR 存在，則刪除
            if [ -e "/var/www/html/$DIR" ]; then
                # rm -rf "/var/www/html/$DIR"
                mv "/var/www/html/$DIR" "/var/www/html/$DIR.bak"
            fi
            # 建立符號連結
            ln -s "/html/$DIR" "/var/www/html/$DIR"
            # chown www-data:www-data -R /html/$DIR
            echo "Linking is successful: /html/$DIR -> /var/www/html/$DIR"
        fi
    else
        echo "/html/$DIR is not existed. Skip."
    fi
done
