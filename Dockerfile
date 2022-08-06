FROM node:17 as uilayer

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install

COPY ./ .

RUN make build-static

FROM docker.io/library/nginx:1.23.1-alpine
MAINTAINER Lenin Alevski "lenin@alevsk.com"
EXPOSE 8080

COPY --from=uilayer /app/build /usr/share/nginx/html
COPY --from=uilayer /app/nginx/nginx.conf /etc/nginx/nginx.conf

USER nginx

CMD nginx -g "daemon off;"
