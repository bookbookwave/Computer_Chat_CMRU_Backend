FROM node:18-alpine

ENV TZ="Asia/Bangkok"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN yarn install

# run prisma generate
COPY prisma ./prisma/

# RUN npx prisma migrate dev

RUN npx prisma generate

# chown node_modules to node user
RUN chown -R node:node /usr/src/app/node_modules

# Bundle app source
COPY . .


RUN yarn build

# RUN npx prisma migrate dev
# CMD [ "yarn", "start:dev" ]
CMD [ "yarn", "start"]