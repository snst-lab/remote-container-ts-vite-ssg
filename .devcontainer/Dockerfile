# Node.js のバージョンを変更する場合は以下のURLからタグを確認してください
# https://hub.docker.com/r/library/node/tags/
FROM node:14.17.4-alpine3.14

WORKDIR /app

COPY package*.json ./
RUN npm install
