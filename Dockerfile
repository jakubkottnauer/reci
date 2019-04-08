FROM node:11.9.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g gatsby-cli


COPY . .

EXPOSE 9000
CMD ["gatsby", "build"]
CMD ["gatsby", "serve"]
