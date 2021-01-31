FROM node:12 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN npm install -g yarn
RUN yarn
# RUN yarn prisma generate

COPY . .

# RUN npm run build

# FROM node:12

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/dist ./dist

EXPOSE 3000
# CMD [ "yarn", "run", "start:prod" ]