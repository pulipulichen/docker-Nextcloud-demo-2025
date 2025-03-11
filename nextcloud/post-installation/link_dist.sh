#!/bin/bash

# 定義目標目錄
TARGET_DIRS=("dist")

# 迭代處理每個目錄
for DIR in "${TARGET_DIRS[@]}"; do
    if [ -d "/$DIR" ]; then
        # 如果 /var/www/html/$DIR 存在，則刪除
        if [ -e "/var/www/html/$DIR" ]; then
            rm -rf "/var/www/html/$DIR"
        fi
        # 建立符號連結
        ln -s "/$DIR" "/var/www/html/$DIR"
        echo "Linking is successful: /$DIR -> /var/www/html/$DIR"
    else
        echo "/$DIR is not existed. Skip."
    fi
done
