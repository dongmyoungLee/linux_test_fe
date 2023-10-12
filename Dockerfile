#FROM nginx
#COPY ./build/* /usr/share/nginx/html/
#COPY ./default.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80

FROM node:18.18.1-slim
RUN ["mkdir", "app"]
COPY ./src ./app/src
COPY ./public ./app/public
COPY package.json ./app/package.json
COPY package-lock.json ./app/package-lock.json
WORKDIR ./app
RUN ["npm", "install"]
ENTRYPOINT ["npm", "start"]
