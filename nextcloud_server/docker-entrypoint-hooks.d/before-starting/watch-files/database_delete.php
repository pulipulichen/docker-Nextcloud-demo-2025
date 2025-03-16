<?php
# 20250316-204000 接收檔案名稱和路徑，並用 echo 顯示
$file_path = $argv[1];
$title = $argv[2];
$encode_title = rawurlencode($title); # 20250316-205500 更正變數賦值
$knowledge_id = getenv("SEMANTIC_DATABASE_KNOWLEDGE_ID");

echo "送出刪除：" . $title;

$semantic_database_base = getenv("SEMANTIC_DATABASE_BASE"); # 20250316-210000 取得 SEMANTIC_DATABASE_BASE 環境變數

# 使用 PHP 語法替換 curl
$url = "{$semantic_database_base}/knowledge_base/{$knowledge_id}/item/{$encode_title}/"; # 20250316-210000 構造 URL

$ch = curl_init($url); # 20250316-210000 初始化 curl
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); # 20250316-210000 設置返回結果
curl_setopt($ch, CURLOPT_HTTPHEADER, array('accept: application/json')); # 20250316-210000 設置 header
$response = curl_exec($ch); # 20250316-210000 執行請求

if (curl_errno($ch)) { # 20250316-210000 檢查錯誤
    echo 'Curl error: ' . curl_error($ch); # 20250316-210000 顯示錯誤訊息
}

curl_close($ch); # 20250316-210000 關閉 curl

# 處理響應
if ($response) { # 20250316-210000 檢查響應
    # 這裡可以根據需要處理響應，例如解碼 JSON
    # $data = json_decode($response, true);
    # var_dump($data);
} else {
    echo "No response received."; # 20250316-210000 顯示沒有收到響應
}
