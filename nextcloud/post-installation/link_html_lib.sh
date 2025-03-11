#!/bin/bash

# cp -rf /html/* /var/www/html/

#!/bin/bash

# 定義目標目錄
# TARGET_DIRS=("core" "config", "lib")
TARGET_DIRS=("l10n" "private" "public")

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/html/lib/$DIR" ]; then
        # 如果 /var/www/html/$DIR 存在，則刪除
        if [ -e "/var/www/html/lib/$DIR" ]; then
            rm -rf "/var/www/html/lib/$DIR"
        fi
        # 建立符號連結
        ln -s "/html/lib/$DIR" "/var/www/html/lib/$DIR"
        chown www-data:www-data -R /html/lib/$DIR
        echo "Linking is successful: /html/lib/$DIR -> /var/www/html/lib/$DIR"
    else
        echo "/html/lib/$DIR is not existed. Skip."
    fi
done
