FROM node:20-alpine
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "npm-shrinkwrap.json*", "./"]
RUN yarn --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["yarn", "start"]
