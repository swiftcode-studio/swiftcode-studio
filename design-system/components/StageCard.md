# StageCard

Thẻ mô tả một giai đoạn của quy trình: số thứ tự, tên, việc AI làm, file đầu ra và cổng duyệt của người.

**Người dùng cung cấp:** `index` ("01"–"06"), `code` (PLAN, DESIGN, BUILD, TEST, DEPLOY, MAINTAIN), `title` (tên tiếng Việt theo bảng trong README), `artifact`, `gate` (nếu giai đoạn có cổng duyệt), `children` (1–2 câu), tuỳ chọn `owner`, `active`.

- Dùng trong lưới 3 cột (desktop) / 1 cột (mobile), khoảng cách `space-6`, đủ sáu thẻ theo đúng thứ tự.
- Chỉ một thẻ `active` mỗi lúc (ví dụ thẻ khách đang xem trong dự án mẫu).
- Câu mô tả bắt đầu bằng "AI…" để nhấn rõ ai làm; cổng duyệt bắt đầu bằng "Bạn…" hoặc "Tôi…".
