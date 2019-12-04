FROM node:13.2-alpine

LABEL version="1.0.0" \
    maintainer="Fernando Lopes<fernandolopes@live.com>"

WORKDIR /app

RUN npm install typescript nodemon -g --quiet

RUN apk update && \
    apk add yarn python g++ make && \
    rm -rf /var/cache/apk/*

COPY package.json . 

RUN npm install --quiet

COPY dist/ .

CMD ["nodemon", "main.js"]