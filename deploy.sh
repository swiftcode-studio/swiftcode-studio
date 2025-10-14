#!/bin/bash

# Biến cấu hình
SERVER="swiftcode-studio-server"
REMOTE_DIR="/var/www/swiftcode-studio"
LOCAL_DIR="dist"

echo "🚀 Bắt đầu deploy lên server: $SERVER"

# 1️⃣ Xóa toàn bộ file cũ trên server
echo "🧹 Đang xóa các file cũ trên server..."
ssh $SERVER "rm -rf ${REMOTE_DIR}/*"
if [ $? -ne 0 ]; then
  echo "❌ Lỗi khi xóa file cũ! Dừng deploy."
  exit 1
fi

# 2️⃣ Upload file mới từ thư mục dist
echo "📦 Đang upload file mới..."
scp -r ${LOCAL_DIR}/* ${SERVER}:${REMOTE_DIR}/
if [ $? -ne 0 ]; then
  echo "❌ Lỗi khi upload file mới!"
  exit 1
fi

echo "✅ Deploy hoàn tất thành công!"
