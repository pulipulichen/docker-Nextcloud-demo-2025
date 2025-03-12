#!/bin/bash

# cp -rf /html/* /var/www/html/

#!/bin/bash

# echo =================================================================
# echo "99.link_html_lib.sh"
# echo =================================================================

if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
    exit 0
fi

# 定義目標目錄
# TARGET_DIRS=("core" "config", "lib")
TARGET_DIRS=("l10n" "private" "public")
# TARGET_DIRS=()

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/html/lib/$DIR" ]; then
        # 如果 /var/www/html/$DIR 存在，則刪除
        if [ "$NEXTCLOUD_ORIGINAL_MODE" = "true" ]; then
            if [ -L "/var/www/html/lib/$DIR" ]; then
                rm -rf "/var/www/html/lib/$DIR"
                mv "/var/www/html/lib/$DIR.bak" "/var/www/html/lib/$DIR"
            fi
        else
            if [ -e "/var/www/html/lib/$DIR" ]; then
                # rm -rf "/var/www/html/lib/$DIR"
                mv "/var/www/html/lib/$DIR" "/var/www/html/lib/$DIR.bak"
            fi
            # 建立符號連結
            ln -s "/html/lib/$DIR" "/var/www/html/lib/$DIR"
            # chown www-data:www-data -R /html/lib/$DIR
            echo "Linking is successful: /html/lib/$DIR -> /var/www/html/lib/$DIR"
        fi
    else
        echo "/html/lib/$DIR is not existed. Skip."
    fi
done

