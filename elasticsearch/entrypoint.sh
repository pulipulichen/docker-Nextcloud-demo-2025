#!/bin/bash

if [ "$NEXTCLOUD_ENABLE_FULLTEXT_SEARCH" = "true" ]; then
    elasticsearch -Elogger.level=WARN
fi
