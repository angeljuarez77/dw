FROM node:12.14.1
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn install
COPY . .
CMD ["node", "app.js"]
