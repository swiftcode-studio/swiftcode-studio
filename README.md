# swiftcode-studio.com

Homepage của Swiftcode Studio — freelancer làm phần mềm (và video manga) theo quy trình AI-native
(PLAN → DESIGN → BUILD → TEST → DEPLOY → MAINTAIN, người duyệt ở từng cổng). Giọng văn: xưng "tôi".

## Chạy

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # ra dist/: build client + SSR, rồi scripts/prerender.mjs ghi sẵn HTML cho / (ja), /en, /vi
./deploy.sh       # build + scp dist/ lên server
```

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `src/i18n/ja.ts`, `en.ts`, `vi.ts` | **Toàn bộ chữ trên trang** — kể cả nhãn, aria-label, dòng terminal, file mẫu. Mỗi trang ngôn ngữ phải thuần ngôn ngữ đó; chỉ giữ nguyên tên riêng, tên file, mã lệnh. Kiểu dữ liệu ở `types.ts`. |
| `src/i18n/shared.ts` | Email, điện thoại, link mạng xã hội, danh sách công nghệ, logo dự án |
| `src/sections/` | Từng section của homepage |
| `src/ds/` | Component của design system (Button, Badge, StageCard, Pipeline, Terminal) |
| `src/styles/tokens.css` | Token màu, khoảng cách, chữ — lấy từ `design-system/` |
| `design-system/` | Brand book và token gốc. Đọc `BRAND-BOOK.md` trước khi sửa giao diện. |

## URL

- `/` 日本語 (thị trường chính) · `/en` English · `/vi` tiếng Việt
- Trang riêng cho video manga: `/manga`, `/en/manga`, `/vi/manga` (nội dung ở `mangaPage` trong file ngôn ngữ).
  Thêm trang mới: khai báo trong `src/site.ts > PAGE_PATH`, thêm route ở `App.tsx`, head/JSON-LD ở `src/seo.ts`.
- URL của site cũ tự chuyển về section tương ứng: `/about`, `/services/*`, `/contact`… → `/en#…`; `/ja`, `/ja/...` → `/#…`.
  nginx trên server: `try_files $uri $uri/index.html /index.html;` (đã cập nhật 2026-11-07, bản sao lưu ở
  `/root/swiftcode-studio.conf.bak-*`) để `/en` trả `dist/en/index.html` đã prerender.

## Hiệu năng

- Mỗi ngôn ngữ được prerender thành HTML tĩnh (nội dung, title, description, ảnh chia sẻ `og*.png` riêng),
  client hydrate lên. Hook nào đọc `window`/`document` phải làm trong `useEffect` để HTML server và client khớp.
- Chữ Nhật dùng font hệ thống (Hiragino, Yu Gothic, Meiryo…), không tải Noto Sans JP (~1 MB).
  Be Vietnam Pro + JetBrains Mono tải không chặn hiển thị.
- Clip manga chỉ tải khi cuộn gần tới.
- Lighthouse (mobile, 2026-11-07): trang chủ 98, trang manga 93–95; khả năng truy cập, best practices, SEO đều 100.
- Mỗi trang có title chứa từ khoá, hreflang riêng và JSON-LD (ProfessionalService, FAQPage; trang manga thêm Service,
  BreadcrumbList). `sitemap.xml` được sinh lúc build.

## Form liên hệ

Form POST JSON (các trường + `intent_md`) tới FormSubmit, dịch vụ chuyển tiếp về `sales@swiftcode-studio.com`.
**Lần gửi đầu tiên** FormSubmit gửi một email kích hoạt tới hộp thư đó — bấm link trong email là xong.
Trước khi kích hoạt, hoặc khi lỗi mạng, form tự mở ứng dụng email của khách với nội dung soạn sẵn.
Muốn đổi nơi nhận: đặt `VITE_CONTACT_ENDPOINT` (xem `.env.example`).

## Mục video manga

Ảnh và clip trong `public/images/manga/` lấy từ tập 11月制作分No.4 đã giao (khách đồng ý cho dùng để giới thiệu).
Ảnh công cụ có 3 bản `tool-*-{ja,en,vi}.webp`: chụp từ editor thật (`love-koi/work/editor.py`), cắt bỏ thanh menu,
vài nhãn giao diện (Cảnh, đã xác nhận, Lưu, tay) được đổi sang ngôn ngữ của trang khi chụp — trang web có ghi chú điều này.
Số liệu ở `src/i18n/*.ts > manga.card` và kết quả kiểm tra ở `src/i18n/shared.ts > MANGA_REVIEW` là số đo thật
từ `review.py` của tool dựng video. Khi có tập mới tốt hơn, thay ảnh và số liệu cùng lúc.
