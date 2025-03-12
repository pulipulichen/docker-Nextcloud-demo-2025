FROM nextcloud:30.0.5-apache

RUN sed -i 's/^opcache\.enable=1$/opcache.enable=${OPCACHE_ENABLE}/' /usr/local/etc/php/conf.d/opcache-recommended.ini
ENV OPCACHE_ENABLE=0

RUN apt-get update
RUN apt-get install -y sudo
RUN apt-get install -y nano
RUN apt-get install -y inotify-tools
RUN apt-get install -y vim

ENV NEXTCLOUD_ENV=development

ENV NEXTCLOUD_ENABLE_FULLTEXT_SEARCH=false

ENV NEXTCLOUD_ADMIN_USER=admin
ENV NEXTCLOUD_ADMIN_PASSWORD=password

ENV NEXTCLOUD_GUEST_EMAIL=guest@email.com
ENV NEXTCLOUD_GUEST_USER=guest
ENV NEXTCLOUD_GUEST_PASSWORD=guest