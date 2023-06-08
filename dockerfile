FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY index.js ./
COPY queries.js ./
EXPOSE 8080
CMD [ "node", "index.js"  ]