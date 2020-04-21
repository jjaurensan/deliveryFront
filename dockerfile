FROM nginx:alpine

WORKDIR /usr/share/nginx/html 

COPY dist/delivery-front/ /usr/share/nginx/html/

