FROM node:18.14.0-alpine3.17 as builder

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.23.3-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]