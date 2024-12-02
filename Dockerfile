FROM node:22.9.0

WORKDIR /myapp

COPY . .

# for frontend install dependencies
RUN npm install

# Install dependencies from backend
RUN cd "Authentication_and_Authorization" && npm install
RUN npm install -g concurrently

EXPOSE 3000
EXPOSE 4000

# CMD ["npm", "start"]
CMD ["npx", "concurrently", "npm start", "npm --prefix Authentication_and_Authorization start"]

