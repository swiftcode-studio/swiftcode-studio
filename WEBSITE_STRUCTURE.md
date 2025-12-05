# Swiftcode Studio Website Structure

## Overview
Website được thiết kế với màu cam (#FF6B35) và màu teal (#19857B) làm màu chủ đạo.

## Company Information
- **Company Name**: Swiftcode Studio
- **Phone**: (+84) 35-543-0828
- **Email**: info@swiftcode-studio.com
- **Address (Vietnamese)**: Số 12, ngõ 239 Định Công, phường Định Công, Hà Nội
- **Address (English)**: No. 12, Alley 239 Dinh Cong, Dinh Cong Ward, Hanoi, Vietnam
- **Address (Japanese)**: ハノイ市、ディンコン区、ディンコン通り239番地の路地12番、ベトナム

## Cấu trúc dự án

```
src/
├── components/          # Các components tái sử dụng
│   ├── Header.tsx      # Header với navigation
│   └── Footer.tsx      # Footer với links và thông tin liên hệ
├── pages/              # Các trang chính
│   ├── HomePage.tsx    # Trang chủ
│   ├── AboutPage.tsx   # Trang giới thiệu
│   ├── ServicesPage.tsx # Trang dịch vụ tổng quan
│   ├── TechnologiesPage.tsx # Trang công nghệ
│   ├── ContactPage.tsx # Trang liên hệ
│   └── services/       # Các trang dịch vụ chi tiết
│       └── OffshoreDevPage.tsx
├── App.tsx             # Main app với routing
├── index.css           # Global styles
└── main.tsx            # Entry point
```

## Màu sắc chính

- **Primary Orange**: `#FF6B35` - Màu cam chủ đạo
- **Primary Orange Dark**: `#E55A2B` - Màu cam đậm (hover)
- **Teal**: `#19857B` - Màu teal cho CTA buttons
- **Teal Dark**: `#156B62` - Màu teal đậm (hover)
- **Background**: `#F5F8FA` - Màu nền nhạt
- **Text Dark**: `#1A1A1A` - Màu text tối
- **Text Gray**: `#5F6368` - Màu text xám

## Các trang chính

### 1. HomePage (/)
- Hero section với team photo placeholder
- About section
- Services grid (4 services)
- Clients logos
- Testimonials
- CTA section

### 2. AboutPage (/about)
- WHO WE ARE hero
- Established section với team photos
- Mission & Vision cards
- Leadership team
- Company summary với stats
- FAQ accordion

### 3. ServicesPage (/services)
- Services overview
- 4 main services:
  - Offshore Software Development
  - Dedicated Development Team
  - Software QA Testing
  - Software Maintenance

### 4. TechnologiesPage (/technologies)
- Technologies we work on (PHP, Ruby on Rails, React/Vue, Flutter, .NET, Java)
- Tech stack grid với icons
- Technology descriptions

### 5. ContactPage (/contact)
- Contact form
- Team photo
- Contact methods (Phone, Email, Visit)
- Google Maps embed
- CTA section

## Routing

### English Routes
- `/` - Home
- `/about` - About
- `/services` - Services
- `/technologies` - Technologies
- `/contact` - Contact
- `/services/offshore-development` - Service detail
- `/services/dedicated-team` - Service detail
- `/services/qa-testing` - Service detail
- `/services/maintenance` - Service detail

### Japanese Routes
- `/ja` - ホーム
- `/ja/about` - 会社概要
- `/ja/services` - サービス
- `/ja/technologies` - 技術
- `/ja/contact` - お問い合わせ
- `/ja/services/*` - Service details (Japanese)

## Components

### Header
- Logo và branding
- Navigation menu (responsive)
- Language switcher (EN/日本語)
- Contact button
- Mobile menu với hamburger icon

### Footer
- Logo và company info
- Email subscription
- Address, phone, email
- Footer links (4 columns):
  - HOME
  - ABOUT US
  - SERVICES
  - TECHNOLOGIES
- Cookie policy notice

## Font và Typography

- **Font Family**: 'Inter' (Google Fonts)
- **Headings**: Font weight 700 (Bold)
- **Body**: Font weight 400 (Regular)
- **Links**: Font weight 500 (Medium)

## Icons

Font Awesome Light (fa-light) được sử dụng cho tất cả icons:
- `fa-phone` - Phone
- `fa-envelope` - Email
- `fa-location-dot` - Location
- `fa-check-circle` - Checkmarks
- `fa-arrow-right` - Arrows
- `fa-bars` / `fa-times` - Menu
- và nhiều icons khác...

## Animations

CSS animations được định nghĩa trong `index.css`:
- `fadeInUp` - Fade in từ dưới lên
- `fadeIn` - Fade in đơn giản
- Hover effects với `transform` và `transition`

## Responsive Design

- Mobile-first approach
- Breakpoints:
  - `md:` - 768px
  - `lg:` - 1024px
  - `xl:` - 1280px

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Notes

- Tất cả images cần được thêm vào thư mục `public/`
- Placeholder images sử dụng https://via.placeholder.com
- Font Awesome CDN được load từ index.html
- Tailwind CSS được sử dụng cho styling
- Tất cả content có cả English và Japanese versions

