# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /api

# add `/api/node_modules/.bin` to $PATH
ENV PATH /api/node_modules/.bin:$PATH

# install api dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add api
COPY . ./

# start api
CMD ["npm", "start"]
