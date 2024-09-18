FROM node:21.7.1

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libdrm2 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libgbm-dev \
    libpango-1.0-0 \
    libasound2 \
    libpangocairo-1.0-0 \
    libxshmfence1 \
    gconf-service \
    libcairo2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgcc1 \
    libgdk-pixbuf2.0-0 \
    libglib2.0-0 \
    libnspr4 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcursor1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator1 \
    lsb-release \
    xdg-utils \
    wget \
    libxkbcommon0 \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g ts-node typescript

RUN npm install -g nodemon

RUN npm install -g ts-node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DEBUG="puppeteer:*"

EXPOSE 4002

CMD ["npm", "run", "dev"]