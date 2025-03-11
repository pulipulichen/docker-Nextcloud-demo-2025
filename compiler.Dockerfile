# FROM nextcloud:24.0.12-apache

# RUN apt update
# RUN apt install tesseract-ocr tesseract-ocr-chi-tra tesseract-ocr-chi-sim \
#   tesseract-ocr-eng tesseract-ocr-chi-tra-vert \
#   tesseract-ocr-script-viet tesseract-ocr-script-hant tesseract-ocr-script-hant-vert -y

# RUN apt install openjdk-11-jdk wget curl nano -y
# RUN wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.17.6-amd64.deb
# RUN dpkg -i elasticsearch-7.17.6-amd64.deb 

# ENTRYPOINT []

# RUN echo "vm.max_map_count=262144" | tee -a /etc/sysctl.conf
# RUN sysctl -p

# RUN /etc/init.d/elasticsearch start

# RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install ingest-attachment
# RUN /usr/share/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.6/elasticsearch-analysis-ik-7.17.6.zip

# vi /etc/elasticsearch/elasticsearch.yml 還要修改，用複製的方式處理


FROM node:22.14.0-bookworm

RUN mkdir -p /src

COPY ./nextcloud/vue-src/.* /src/
COPY ./nextcloud/vue-src/*.js /src/
COPY ./nextcloud/vue-src/*.json /src/
COPY ./nextcloud/vue-src/*.ts /src/

WORKDIR /src

RUN npm install

COPY ./nextcloud/vue-src/version.php /src/

CMD ["npm", "run", "watch"]