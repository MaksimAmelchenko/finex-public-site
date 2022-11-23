FROM node:18-alpine as build

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN apk add python3 make g++

WORKDIR /usr/src/app

COPY .npmrc ./
COPY package*.json ./

RUN NODE_ENV=development npm ci

COPY ./ ./

ARG GIT_TAG
ENV GIT_TAG=$GIT_TAG
ARG GIT_HASH
ENV GIT_HASH=$GIT_HASH

RUN NODE_ENV=$NODE_ENV GIT_TAG=$GIT_TAG GIT_HASH=$GIT_HASH npm run build

FROM nginx:1.21.5-alpine

WORKDIR /usr/share/nginx/html/

COPY --from=build /usr/src/app/public/ .

RUN for i in `find /usr/share/nginx/html/ -type f -name '*.js' -o -name '*.css' -o -name '*.html'`; do echo $i; gzip -c -9 $i > $i.gz;  done;

COPY nginx /etc/nginx

#
# Expose build version to image entrypoint script
#
RUN sed -i "4iexport VERSION=$(cat /usr/share/nginx/html/version)" /docker-entrypoint.d/20-envsubst-on-templates.sh

HEALTHCHECK CMD ["wget", "--spider", "localhost:80/health-check"]

EXPOSE 80
