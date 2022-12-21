FROM node:alpine
WORKDIR /usr/src/products
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 3006
CMD npm start