FROM node:alpine
WORKDIR /usr/src/productsservice
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3006
CMD npm start