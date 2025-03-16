#!/bin/bash

local file=$1
local timestamp=$2

# 2025年3月16日 台北時間 下午3:21: 修正 curl 指令，先用 echo 顯示指令，並將原來的 curl 指令用註解表示
echo "curl -X 'GET' 'http://${SEMANTIC_DATABASE_BASE}:8000/knowledge_base/${SEMANTIC_DATABASE_KNOWLEDGE_ID}/item/$(basename "$file")/' -H 'accept: application/json'"
#curl -X 'GET' \
#  'http://${SEMANTIC_DATABASE_BASE}:8000/knowledge_base/${SEMANTIC_DATABASE_KNOWLEDGE_ID}/item/$(basename "$file")/' \
#  -H 'accept: application/json'

echo "[DELETE] $file at $timestamp"
