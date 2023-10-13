# 파일이 충돌이 나는 것 같음. port도 80이 충돌 나는것 같음.
FROM nginx
FROM node:18.18.1-slim
RUN ["rm", "-rf", "usr/share/nginx/app/*"]
RUN ["npm", "run", "build"]
COPY ./build/* /usr/share/nginx/app/
COPY ./default.conf /etc/nginx/conf.d/p.conf
EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]


#FROM node:18.18.1-slim
#RUN ["mkdir", "app"]
#COPY ./src ./app/src
#COPY ./public ./app/public
#COPY package.json ./app/package.json
#COPY package-lock.json ./app/package-lock.json
#WORKDIR ./app
#RUN ["npm", "install"]
#ENTRYPOINT ["npm", "start"]
