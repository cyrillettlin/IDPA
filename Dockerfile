############################################################
# Dockerfile to build Nginx Installed Containers

# Authors: Gian Diethelm, Dima Leibundgut, Cyrill Ettlin
############################################################



FROM ubuntu:latest
#Use the standart ubuntu image

RUN apt update
#Update the whole system

RUN apt-get -y install openssh-server
#Install the SSH-service

RUN apt-get install -y nginx
#Install the nginx webserver

RUN systemctl enable nginx
#Put the nginx service into autostart

COPY nginx.conf /etc/nginx/nginx.conf
#Copy the local nginx configuration into the Docker

RUN apt-get install -y mysql-server

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

