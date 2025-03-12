#!/bin/bash

base_dir=$(dirname "$full_path")
cd "$base_dir"

# docker ps | grep nextcloud-1
docker rm -f $(docker ps --filter "name=docker-nextcloud-nextcloud_server-1" --format "{{.ID}}")
# docker exec -it $(docker ps --filter "name=docker-nextcloud-demo-2025-nextcloud-1" --format "{{.ID}}") bash

docker-compose down -v
docker-compose rm

# docker-compose up --build

