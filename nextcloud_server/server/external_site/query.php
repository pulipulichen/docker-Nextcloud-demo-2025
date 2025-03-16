<?php

// PHP 查詢範例
/*
curl -X POST 'http://192.168.195.202/v1/chat-messages' \
--header 'Authorization: Bearer {api_key}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "inputs": {},
    "query": "What are the specs of the iPhone 13 Pro Max?",
    "response_mode": "streaming",
    "conversation_id": "",
    "user": "abc-123",
    "files": [
      {
        "type": "image",
        "transfer_method": "remote_url",
        "url": "https://cloud.dify.ai/logo/logo-site.png"
      }
    ]
}'
*/

$base = getenv('DIFY_API_BASE') ?: "http://127.0.0.1/v1/";
$api_key = getenv('DIFY_API_KEY');

$url = $base . 'chat-messages';

$data = array(
    "inputs" => array(),
    "query" => "What are the specs of the iPhone 13 Pro Max?",
    "response_mode" => "streaming",
    "conversation_id" => "",
    "user" => "abc-123",
    "files" => array(
        array(
            "type" => "image",
            "transfer_method" => "remote_url",
            "url" => "https://cloud.dify.ai/logo/logo-site.png"
        )
    )
);

$data_json = json_encode($data);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_json);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $api_key,
    'Content-Type: application/json'
));

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
} else {
    $answer = null;
    $lines = explode("data: ", $response);
    foreach ($lines as $line) {
        if (strpos($line, '"event": "message_end"') !== false) {
            break;
        }
        if (strpos($line, '"answer":') !== false) {
            $json = json_decode($line, true);
            if (isset($json['answer'])) {
                $answer = $json['answer'];
                break;
            }
        }
    }
    // echo 'Answer: ' . $answer;
    echo $answer;

    // echo "================================================";

    // echo $response;
}

curl_close($ch);
