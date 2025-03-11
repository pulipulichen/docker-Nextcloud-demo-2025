#!/bin/bash

/var/www/html/occ app:enable external
/var/www/html/occ config:app:set external sites --value='{"1":{"id":1,"name":"My Blog","url":"https://blog.pulipuli.info","icon":"icon-external","lang":"","redirect":false}}'

