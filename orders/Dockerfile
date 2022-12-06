FROM node:alpine
WORKDIR /usr/src/orderservice
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3005
CMD npm start