FROM node:contact-list

RUN npm install -g http-server

WORKDIR /app

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]