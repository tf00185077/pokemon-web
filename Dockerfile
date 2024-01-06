# 使用 Node.js 18 版本的官方映像
FROM node:latest

# 設置工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安裝依賴
RUN npm install
# CMD ["node", "./server/index.js"]
# 複製專案文件到工作目錄
COPY . .
COPY .env ./
# 構建 Nuxt 應用
RUN npm run build

# 設定環境變數 PORT
# ENV PORT=8080

# 開放 8080 端口
EXPOSE 3000
# ENV HOST 0.0.0.0
# 啟動 Nuxt 服務
# CMD ["node", ".output/server/index.mjs"]
COPY start.sh /start.sh
RUN chmod +x /start.sh
CMD ["/start.sh"]