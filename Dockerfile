# base image
FROM node:16.10.0

RUN npm install -g @vue/cli

# set working directory
WORKDIR /usr/src/app
 
# install and cache app dependencies
COPY package*.json ./

RUN chown -R node:node .
USER node

RUN npm install

COPY . .

# start app
CMD npm run dev --host