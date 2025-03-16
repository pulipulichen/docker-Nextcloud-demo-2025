#!/bin/bash

cd "$(dirname "$0")"

# @TODO 需要移動到 ./watch-files/move_files_event.sh
local old_path=$1
local new_path=$2
local timestamp=$3

echo "[MOVE] from $old_path to $new_path at $timestamp"

./sync_to_nextcloud_files.sh
