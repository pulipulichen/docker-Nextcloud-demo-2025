<?php
# 20250316-204000 接收檔案名稱和路徑，並用 echo 顯示
$file_path = $argv[1];
$title = $argv[2];
$encode_title = rawurlencode($title); # 20250316-205500 更正變數賦值
$knowledge_id = getenv("SEMANTIC_DATABASE_KNOWLEDGE_ID");

echo "送出索引：" . $title;

# 20250316-205000 將 curl 命令改寫為 PHP 版本
$url = getenv("SEMANTIC_DATABASE_BASE") . '/index';
$post_fields = array(
    'knowledge_id' => $knowledge_id,
    'title' => $encode_title,
    'file' => new CURLFile($file_path) # 20250316-205000 使用 CURLFile 上傳檔案
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);

$headers = array();
$headers[] = 'Accept: application/json';
# 20250316-205000 PHP 會自動設定 Content-Type 為 multipart/form-data，所以不需要手動設定
# $headers[] = 'Content-Type: multipart/form-data';
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$result = curl_exec($ch);
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}
curl_close ($ch);

echo $result;
