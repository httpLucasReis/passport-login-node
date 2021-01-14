FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.* ./ 

RUN yarn 

EXPOSE 3333

CMD ["yarn", "start"]

COPY . .