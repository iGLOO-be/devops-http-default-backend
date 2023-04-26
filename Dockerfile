FROM node:10.16.0-alpine as builder
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
COPY ./package.json ./package-lock.json ./gatsby-config.js ./
RUN npm ci
COPY ./gatsby-*.js ./
COPY ./src ./src/
RUN npm run build:prefix

FROM nginx:1.23.4-alpine
ENV NGINX_PORT=8080
ENV PAGE404="404"
ENV INDEX=""
COPY ./nginx-server.conf /etc/nginx/templates/default.conf.template
# ADD ./docker-entrypoint.sh /docker-entrypoint.d/
COPY --from=builder /app/public /public
