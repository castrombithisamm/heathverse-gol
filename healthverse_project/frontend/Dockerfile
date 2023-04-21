# FROM node:16-alpine


# WORKDIR /app/frontend/


# COPY package*.json /app/frontend/
# RUN npm install


# COPY . /app/frontend/


# CMD ["npm", "start"]






FROM node:16-alpine


WORKDIR /app/frontend/


COPY package*.json /app/frontend/
RUN npm install --legacy-peer-deps


COPY . /app/frontend/


CMD ["npm", "start"]
