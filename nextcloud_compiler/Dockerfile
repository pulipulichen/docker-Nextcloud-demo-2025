FROM pudding/docker-app:docker-nextcloud-compiler-20250313-0054

RUN mkdir -p /src
WORKDIR /src

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