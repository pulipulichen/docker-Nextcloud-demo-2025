#!/bin/bash

HOST="$MYSQL_HOST"
PORT=3306

echo "Waiting for $HOST:$PORT..."
while ! (echo > /dev/tcp/$HOST/$PORT) 2>/dev/null; do
  sleep 10
  echo "[wait_for_database] Waiting for database..."
done