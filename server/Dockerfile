FROM node:20
WORKDIR /client
COPY package.json ./
RUN npm install
#copy my code
COPY . .
#run the app
RUN npm run build
#Nginx image to server our app
FROM nginx:apline

/COPY --from=0 /clinet/build/usr/share/nginx/
EXPOSE 3001
#cmd to run our engine
CMD ["npm","start"]