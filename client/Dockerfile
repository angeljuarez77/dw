FROM node:12.14.1
WORKDIR /app
ENV PATH /app/node_modules/.bin/:$PATH
COPY package.json /app/package.json
RUN yarn install
COPY . .
# VOLUME ${PWD}:/app
# VOLUME /app/node_modules
CMD ["yarn", "start"]
