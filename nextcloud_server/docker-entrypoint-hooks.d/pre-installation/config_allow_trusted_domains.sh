#!/bin/bash

# 設定 config.php 的路徑
CONFIG_FILE="/var/www/html/config/config.php"

# 備份原始 config.php
# cp "$CONFIG_FILE" "$CONFIG_FILE.bak"

# 使用 sed 修改 trusted_domains 設定
sed -i "/'trusted_domains' =>/,/),/ s/0 => 'localhost'/0 => '*'/" "$CONFIG_FILE"

echo "Change completed! 'trusted_domains' has been set to '*'"
