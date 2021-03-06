FROM node:12.18.2-alpine@sha256:b48d5259d91e549e4941d5170870619d2e9c27de648e6230625752481232a005

WORKDIR /app
COPY . /app

RUN npm install

ENTRYPOINT ["node", "."]