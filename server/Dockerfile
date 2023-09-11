FROM node:18-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm install
EXPOSE 5000
COPY . .
CMD ["npm", "run", "dev"]

# //https://www.youtube.com/watch?v=StXoFPs7Cok