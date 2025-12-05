#!/bin/bash

# Biến cấu hình
SERVER="swiftcode-studio-server"
REMOTE_DIR="/var/www/swiftcode-studio"
LOCAL_DIR="dist"

echo "🚀 Bắt đầu deploy lên server: $SERVER"

# 1️⃣ Cài đặt dependencies (nếu cần)
echo "📦 Kiểm tra và cài đặt dependencies..."
if [ ! -d "node_modules" ]; then
  echo "📥 Đang cài đặt dependencies..."
  npm install
  if [ $? -ne 0 ]; then
    echo "❌ Lỗi khi cài đặt dependencies!"
    exit 1
  fi
else
  echo "✅ Dependencies đã được cài đặt"
fi

# 2️⃣ Build dự án
echo "🔨 Đang build dự án..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Lỗi khi build dự án! Dừng deploy."
  exit 1
fi
echo "✅ Build thành công!"

# 3️⃣ Kiểm tra thư mục dist có tồn tại không
if [ ! -d "$LOCAL_DIR" ]; then
  echo "❌ Thư mục $LOCAL_DIR không tồn tại! Build có thể đã thất bại."
  exit 1
fi

# 4️⃣ Xóa toàn bộ file cũ trên server
echo "🧹 Đang xóa các file cũ trên server..."
ssh $SERVER "rm -rf ${REMOTE_DIR}/*"
if [ $? -ne 0 ]; then
  echo "❌ Lỗi khi xóa file cũ! Dừng deploy."
  exit 1
fi

# 5️⃣ Upload file mới từ thư mục dist
echo "📤 Đang upload file mới lên server..."
scp -r ${LOCAL_DIR}/* ${SERVER}:${REMOTE_DIR}/
if [ $? -ne 0 ]; then
  echo "❌ Lỗi khi upload file mới!"
  exit 1
fi

echo "✅ Deploy hoàn tất thành công!"
echo "🌐 Website đã được deploy tại: $REMOTE_DIR"
