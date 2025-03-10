#!/bin/bash

base_dir=$(dirname "$full_path")
cd "$base_dir"

# apt-get update
# apt-get install -y sudo

sudo -u www-data ./../occ fulltextsearch:test

# sudo -u www-data ./occ fulltextsearch:test