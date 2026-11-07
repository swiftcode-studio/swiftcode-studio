Hệ thống thiết kế cho homepage của một freelancer làm dự án theo quy trình **AI-native**: AI làm phần lớn công việc ở mọi giai đoạn — lên kế hoạch, thiết kế, viết code, kiểm thử, triển khai, vận hành — còn con người giữ quyền quyết định ở các **cổng duyệt**. Cả hệ thống xoay quanh hai màu mang nghĩa: `agent` (vàng hổ phách) là việc AI làm, `human` (xanh thép) là chỗ con người ký duyệt. Bảng màu dựa trên vàng – đen – trắng ngà: ấm, chắc chắn, vẫn mang chất terminal. Đừng dùng hai màu này để trang trí.

## Nội dung và giọng văn

- Xưng **"tôi"** (freelancer) và gọi khách là **"bạn"**. Câu ngắn, chủ động, cụ thể. Ví dụ: "Bạn mô tả ý tưởng. AI viết spec, code, test và triển khai — bạn duyệt ở từng cổng."
- Nói thật về vai trò của AI. Viết "AI viết code, tôi review và chịu trách nhiệm", **không** viết "AI tự làm hết, không cần người". Thông điệp cốt lõi: *tốc độ của AI, trách nhiệm của con người*.
- Mỗi giai đoạn gắn với **một file đầu ra** khách nhìn thấy được. Viết tên file bằng font `mono`, giữ nguyên chữ thường: `intent.md`, `spec.md`, `plan.md`, `REVIEW.md`.
- Viết hoa kiểu câu (sentence case) cho tiêu đề và nút: "Bắt đầu dự án", không viết "Bắt Đầu Dự Án". Eyebrow dùng style `eyebrow` (chữ in hoa, mono): `01 / PLAN`.
- Thuật ngữ kỹ thuật giữ tiếng Anh khi đó là từ dân trong nghề dùng (spec, PR, deploy, test, eval), giải thích một lần bằng tiếng Việt ở chỗ xuất hiện đầu tiên.
- Không emoji. Không số liệu bịa ("tiết kiệm 90%"): chỉ đưa con số đo được từ dự án thật, kèm nguồn.
- Không dùng logo, tên sản phẩm hay câu chữ của Anthropic/Claude như thể đó là thương hiệu của bạn. Có thể nói "dùng Claude Code" như một công cụ.

### Sáu giai đoạn (dùng đúng tên và thứ tự này)

| # | Tên hiển thị | Eyebrow | File đầu ra | Ai làm | Cổng duyệt |
|---|---|---|---|---|---|
| 01 | Lên kế hoạch | `PLAN` | `intent.md` | AI cùng khách viết | Khách xác nhận mục tiêu |
| 02 | Thiết kế | `DESIGN` | `spec.md` | AI | Khách duyệt spec |
| 03 | Xây dựng | `BUILD` | `plan.md` → code | AI (nhiều phiên song song) | Tôi duyệt plan |
| 04 | Kiểm thử | `TEST` | test + ảnh chụp | AI tự kiểm, tự sửa | — |
| 05 | Triển khai | `DEPLOY` | PR + `REVIEW.md` | AI review theo chính sách | Tôi duyệt PR, bấm release |
| 06 | Vận hành | `MAINTAIN` | `intent.md` mới | AI theo dõi, đề xuất | Tôi quyết định sửa gì |

Giai đoạn 06 sinh ra `intent.md` mới và quay lại 01: luôn vẽ quy trình là **một vòng lặp**, không phải đường thẳng.

## Nền tảng hình ảnh

### Màu

- **Dark là mặc định** cho homepage (`surface`); theme light dùng cho tài liệu, báo giá, bản in.
- Nền trang `surface`; thẻ và Terminal `surface-raised`; giếng code `surface-sunken`. Phân tách bằng `line` (đường kẻ mảnh), không bằng bóng đổ.
- Chữ chính `ink`, chữ phụ `ink-muted`. Cả hai đạt ≥ 4.5:1 trên mọi surface ở cả hai theme.
- `agent` cho chữ/icon về việc AI làm; `agent-fill` + `on-agent` cho nút chính. Mỗi màn hình **chỉ một** nút `agent-fill`.
- `human` / `human-fill` + `on-human` chỉ cho cổng duyệt. Nếu một section không nói về việc con người quyết định, nó không có màu xanh thép. `human` gần `agent` về độ sáng, nên luôn đi kèm hình thoi hoặc chữ "duyệt".
- `danger` chỉ dùng cho chữ lỗi và luôn đi kèm từ ngữ ("lỗi", "failed"), vì nó gần `agent` về độ sáng. Không dùng xanh lá ở bất kỳ đâu trong hệ thống.
- Không gradient, không tím-xanh "AI", không glow neon. Năng lượng đến từ một mảng vàng hổ phách phẳng trên nền đen ấm; trung tính là trắng ngà và ghi bạc, không phải xám lạnh.

### Chữ

- `sans` = **Be Vietnam Pro** (thiết kế cho tiếng Việt, dấu đẹp ở mọi cỡ); `mono` = **JetBrains Mono** (có bộ ký tự tiếng Việt). Cả hai lấy từ Google Fonts, nhớ bật subset `vietnamese`.
- Hero dùng `display-xl` một lần; tiêu đề section `display-lg`; tiêu đề thẻ `title`; mô tả dưới hero `lead`; còn lại `body`.
- Mono chỉ cho: eyebrow, số thứ tự giai đoạn, tên file, dòng lệnh. Không đặt cả đoạn văn bằng mono.

### Khoảng cách, bo góc, bố cục

- Lưới 4px. Lề trang `space-4` (mobile) / `space-8` (desktop); khoảng cách giữa các section `space-24`; tiêu đề section cách nội dung `space-12`; padding thẻ `space-6`.
- Bo góc nhỏ, chính xác: `radius-sm` cho badge và code, `radius-md` cho nút và thẻ, `radius-lg` chỉ cho khung media lớn. Không dùng nút hình viên thuốc.
- Nội dung rộng tối đa 1200px; đoạn văn tối đa 65 ký tự mỗi dòng.
- Bóng đổ: mặc định `shadow-none`; `shadow-lift` chỉ cho Terminal ở hero và menu mở.

### Trạng thái và chuyển động

- Focus: viền `focus` 2px liền, offset 2px, trên mọi phần tử bấm được.
- Hover nút: tối/sáng nền 8%, không đổi kích thước. Chuyển động 150–200ms ease-out; dòng Terminal có thể hiện lần lượt như đang gõ, nhưng tôn trọng `prefers-reduced-motion`.

## Biểu tượng

- Hệ thống chưa có bộ icon riêng. Dùng **Lucide** (nét 1.5px, cỡ 16/20/24), tô màu `ink-muted` hoặc `agent`.
- Ba ký hiệu riêng của hệ thống, vẽ bằng CSS trong component: **chấm tròn** = việc của AI (`agent`), **hình thoi** = cổng duyệt của người (`human-fill`), **dấu `$`** mono = câu lệnh gửi cho AI.
- **Logo** (`design-system/logo/`): chữ "S" vẽ bằng nét cung màu `agent` (vòng lặp AI), bị ngắt ở giữa bởi hình thoi `human` (cổng duyệt của người). Đi cùng tên "Swiftcode Studio" chữ `sans` 700.
  - `logo-mark.svg` cho nền tối, `logo-mark-light.svg` cho nền sáng; trên web dùng component `Logo` (màu theo token, tự đổi theo theme).
  - `favicon.svg` / `logo-512.png`: biểu tượng trên nền `surface` tối, bo `radius` 14/64.
  - Khoảng trống quanh hình thoi luôn cùng màu nền đang đặt logo. Không đổi màu, không xoay, không thêm hiệu ứng; cỡ tối thiểu 16px.

## Thành phần

- `Button` — nút hành động (primary / human / ghost).
- `Badge` — nhãn ai làm việc gì: AI, người duyệt, trung tính.
- `StageCard` — thẻ một giai đoạn: số thứ tự, tên, file đầu ra, cổng duyệt.
- `Pipeline` — sáu giai đoạn trên một đường, có hình thoi ở các cổng duyệt, kết thúc bằng mũi tên quay về.
- `Terminal` — khung dòng lệnh minh hoạ AI đang làm việc thật.

Gợi ý bố cục homepage: Hero (`display-xl` + `lead` + `Button` primary + `Terminal`) → `Pipeline` → lưới 2×3 `StageCard` → "Bạn duyệt ở đâu" (các cổng `human`) → Dự án mẫu → Báo giá → Liên hệ.
