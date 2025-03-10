#!/bin/bash

base_dir=$(dirname "$full_path")
cd "$base_dir"

docker-compose down -v
docker-compose build
docker-compose up
# docker-compose run nextcloud bash
# docker-compose run nextcloud bash