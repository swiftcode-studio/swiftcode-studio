# Terminal

Khung dòng lệnh minh hoạ AI đang làm việc thật: câu lệnh, kết quả, kiểm tra đã qua và điểm dừng chờ người duyệt.

**Người dùng cung cấp:** `lines` — mảng `{ kind, text }` với `kind` là `prompt`, `out`, `ok`, `gate`, `error`; tuỳ chọn `title`, `lift` (chỉ ở hero).

- Nội dung lấy từ phiên làm việc thật hoặc rút gọn trung thực từ đó; không bịa con số.
- 4–8 dòng. Nên có ít nhất một dòng `gate` để thể hiện con người vẫn duyệt.
- Dòng `error` luôn có chữ "failed"/"lỗi" — không dựa vào màu.
- Có thể hiện từng dòng như đang gõ, nhưng tắt hiệu ứng khi `prefers-reduced-motion`.
