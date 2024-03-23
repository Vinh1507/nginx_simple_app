# Sử dụng image chứa Node.js làm cơ sở
FROM node:latest

# Tạo một thư mục ứng dụng trong container
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json (nếu có) vào thư mục ứng dụng
COPY package*.json ./

# Cài đặt các dependency của ứng dụng
RUN npm install

# Sao chép toàn bộ mã nguồn của ứng dụng vào thư mục ứng dụng
COPY . .

# Expose cổng mà ứng dụng của bạn sẽ chạy trên
EXPOSE 7777

# Lệnh để khởi động ứng dụng của bạn
CMD ["npm", "run", "start"]