#!/usr/bin/env sh

NGINX_PORT=${NGINX_PORT:-80}
PAGE404="404"

if [ ! -z "$MAINTENANCE_ONLY" ]; then
  PAGE404=index
fi

cat /etc/nginx/conf.d/default.conf.tpl \
  | sed "s/\$NGINX_PORT/$NGINX_PORT/" \
  | sed "s/\$PAGE404/$PAGE404/" \
  > /etc/nginx/conf.d/default.conf

nginx -g "daemon off;"
