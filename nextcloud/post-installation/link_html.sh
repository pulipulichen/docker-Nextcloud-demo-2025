#!/bin/bash

# cp -rf /html/* /var/www/html/

#!/bin/bash

# 定義目標目錄
# TARGET_DIRS=("core" "config", "lib")
# TARGET_DIRS=("core" "config")
TARGET_DIRS=("core")

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/html/$DIR" ]; then
        # 如果 /var/www/html/$DIR 存在，則刪除
        if [ -e "/var/www/html/$DIR" ]; then
            rm -rf "/var/www/html/$DIR"
        fi
        # 建立符號連結
        ln -s "/html/$DIR" "/var/www/html/$DIR"
        chown www-data:www-data -R /html/$DIR
        echo "Linking is successful: /html/$DIR -> /var/www/html/$DIR"
    else
        echo "/html/$DIR is not existed. Skip."
    fi
done
