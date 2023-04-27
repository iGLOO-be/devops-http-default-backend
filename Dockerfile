FROM node:10.16.0-alpine AS builder
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
COPY ./package.json ./package-lock.json ./gatsby-config.js ./
RUN npm ci
COPY ./gatsby-*.js ./
COPY ./src ./src/
RUN npm run build:prefix

FROM nginx:1.23.4-alpine AS nginx
ENV NGINX_PORT=8080
ENV PAGE404="404"
ENV INDEX=""
COPY ./nginx-server.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/public /public

FROM nginxinc/nginx-unprivileged:1.23-perl AS nginx-unprivileged
ENV NGINX_PORT=8080
ENV PAGE404="404"
ENV INDEX=""
COPY ./nginx-server.conf /etc/nginx/templates/default.conf.template
COPY --from=builder /app/public /public
