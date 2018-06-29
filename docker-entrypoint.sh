#!/usr/bin/env sh

cat /etc/nginx/conf.d/default.conf.tpl | sed "s/\$NGINX_PORT/$NGINX_PORT/" > /etc/nginx/conf.d/default.conf
nginx -g "daemon off;"
