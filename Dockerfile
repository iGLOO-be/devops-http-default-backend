FROM node:8.7.0-alpine
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app
COPY ./package.json ./package-lock.json ./gatsby-config.js ./
COPY ./src ./src/
RUN npm install && npm run build

FROM nginx:1.13.3-alpine
COPY ./nginx-server.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/public /public
RUN mkdir /public/__default_backend_files && \
    ls -la /public && \
    mv /public/static /public/__default_backend_files/static && \
    ls -la /public && \
    find /public -type f ! -path "*/index.html" ! -path "*/static/*" && \
    find /public -type f ! -path "*/index.html" ! -path "*/static/*" -exec mv {} /public/__default_backend_files/ \;
