# docker-Nextcloud-demo-2025
An example to self-host Nextcloud via docker-compose.yml


admin / password


http://elastic:changeme@elasticsearch:9200/

https://your-nextcloud.com/login?user=username&password=password

http://localhost:8080/login?user=admin&password=password


./occ config:import /docker-entrypoint-hooks.d/post-installation/fulltextsearch_settings.json