#!/bin/bash

cd "$(dirname "$0")"

local file=$1
local timestamp=$2

echo "[ADD] $file at $timestamp"

./sync_to_nextcloud_files.sh
