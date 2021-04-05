############################################################
# Dockerfile to build the Loadbalancer image

# Authors: Gian Diethelm, Dima Leibundgut, Cyrill Ettlin
############################################################

#Use Node JS Version 13
FROM node:13

#Use /app as workdirectory
WORKDIR /app

#Use the local package.json to know which modules needs to be installed
COPY package*.json ./

#Install the needed modules
RUN npm install

#Copy the local executables
COPY . .

#Set the port
ENV PORT=80
EXPOSE 80

#start the container with an npm start
CMD ["npm", "start"]

