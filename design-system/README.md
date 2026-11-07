# AI-Native Studio — design system

Bộ file để dựng homepage. Mở `preview.html` trong trình duyệt để xem toàn bộ component (cần mạng để tải React và Google Fonts).

| File | Dùng để |
|---|---|
| `BRAND-BOOK.md` | Quy tắc giọng văn, màu, chữ, bố cục — đọc trước tiên |
| `tokens.css` | Biến CSS (`--agent`, `--surface`, `--space-6`…) + class chữ (`.display-xl`, `.lead`, `.eyebrow`…). Theme qua `data-theme="dark"` / `"light"` trên `<html>` |
| `tokens.json` | Token gốc, cho công cụ hoặc AI đọc |
| `tailwind.config.js` | Nếu dùng Tailwind: `bg-surface`, `text-agent`, `p-6`, `rounded-md`… trỏ về biến trong `tokens.css` |
| `components/bundle.js` + `bundle.css` | 5 component React (`window.AINative`): Button, Badge, StageCard, Pipeline, Terminal |
| `components/index.d.ts` | Props của từng component |
| `components/*.md` | Hướng dẫn dùng từng component |

Cách dùng nhanh trong HTML:

```html
<html data-theme="dark">
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
```

Không dùng React? Chỉ cần `tokens.css` và các class `an-*` trong `bundle.css`.
