############################################################
# Dockerfile to build Nginx Installed Containers

# Authors: Gian Diethelm, Dima Leibundgut, Cyrill Ettlin
############################################################

#FROM nginx:alpine

#RUN rm -rf /usr/share/nginx/html/*

#COPY index.html /usr/share/nginx/html/

#COPY nginx.conf /etc/nginx/nginx.conf

#EXPOSE 80

FROM ubuntu:latest

RUN apt update

RUN apt-get -y install openssh-server

RUN apt-get install -y nginx

RUN systemctl enable nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

EXPOSE 22

ENTRYPOINT ["nginx", "-g", "daemon off;"]

