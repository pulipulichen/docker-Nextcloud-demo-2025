#!/bin/bash

base_dir=$(dirname "$full_path")
cd "$base_dir"

# docker ps | grep nextcloud-1
docker exec -it $(docker ps --filter "name=docker-nextcloud-nextcloud-1" --format "{{.ID}}") bash
# docker exec -it $(docker ps --filter "name=docker-nextcloud-demo-2025-nextcloud-1" --format "{{.ID}}") bash

