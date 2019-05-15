FROM node:10.15.3-alpine
EXPOSE 5000
COPY . /home/app
WORKDIR /home/app
RUN apk add --no-cache mongodb-tools
RUN yarn global add nodemon
RUN yarn
