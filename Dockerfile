FROM node:10.14.1-alpine
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
COPY ./package.json ./package-lock.json ./gatsby-config.js ./
RUN npm ci
COPY ./gatsby-config.js ./
COPY ./src ./src/
RUN npm run build

FROM nginx:1.15.7-alpine
ENV NGINX_PORT=8080
COPY ./nginx-server.conf /etc/nginx/conf.d/default.conf.tpl
COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY --from=0 /app/public /public
RUN mkdir /public/__default_backend_files && \
    mv /public/static /public/__default_backend_files/static && \
    find /public -type f ! -path "*/index.html" ! -path "*/static/*" -exec mv {} /public/__default_backend_files/ \;

CMD ["/docker-entrypoint.sh"]
