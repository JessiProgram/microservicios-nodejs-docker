FROM node:alpine
WORKDIR /usr/src/gatewayservice
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3007
CMD npm start