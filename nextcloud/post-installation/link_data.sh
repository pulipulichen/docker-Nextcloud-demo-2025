#!/bin/bash

# cp -rf /html/* /var/www/html/

#!/bin/bash

# 定義目標目錄
TARGET_DIRS=("files")

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/html/$DIR" ]; then
        # 如果 /var/www/html/$DIR 存在，則刪除
        if [ -e "/var/www/html/data/admin/$DIR" ]; then
            rm -rf "/var/www/html/data/admin/$DIR"
        fi
        # 建立符號連結
        ln -s "/html/$DIR" "/var/www/html/data/admin/$DIR"
        echo "Linking is successful: /html/$DIR -> /var/www/html/data/admin/$DIR"
    else
        echo "/html/$DIR is not existed. Skip."
    fi
done
