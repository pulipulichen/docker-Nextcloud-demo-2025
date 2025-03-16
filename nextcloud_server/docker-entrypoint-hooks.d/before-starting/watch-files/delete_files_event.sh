#!/bin/bash

cd "$(dirname "$0")"

# @TODO 需要移動到 ./watch-files/delete_files_event.sh
local file=$1
local timestamp=$2

echo "[DELETE] $file at $timestamp"

./sync_to_nextcloud_files.sh
