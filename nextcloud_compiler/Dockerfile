FROM node:22.14.0-bookworm

RUN mkdir -p /src

COPY ./nextcloud_compiler/src/.* /src/
COPY ./nextcloud_compiler/src/*.js /src/
COPY ./nextcloud_compiler/src/*.json /src/
COPY ./nextcloud_compiler/src/*.ts /src/

WORKDIR /src

RUN npm install

COPY ./nextcloud_compiler/src/version.php /src/
COPY ./nextcloud_compiler/entrypoint.sh /entrypoint.sh

# CMD ["npm", "run", "watch"]
CMD ["/entrypoint.sh"]