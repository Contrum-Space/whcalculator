# Stage 1: Build environment
FROM node:alpine as build

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN npm run build

# Stage 2: Runtime environment
FROM nginx:alpine as runtime

WORKDIR /usr/share/nginx/html

# Remove default Nginx static content
RUN rm -rf ./*

COPY --from=build /usr/src/app/build .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
