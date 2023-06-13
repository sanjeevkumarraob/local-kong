FROM node:18-slim

WORKDIR /usr/local/app

COPY ["package.json", "package-lock.json*", "/usr/local/app/"]

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run", "app"]
