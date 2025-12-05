# Swiftcode Studio Website - Features

## 🎨 Thiết kế và UI/UX

### Màu sắc
- **Primary Orange**: #FF6B35 - Màu cam chủ đạo
- **Teal**: #19857B - Màu xanh lá cho CTA
- Gradient backgrounds
- Modern, clean design

### Typography
- **Font**: Inter (Google Fonts)
- Headings: Bold (700)
- Body: Regular (400)
- Professional and readable

### Icons
- Font Awesome Light (fa-light)
- Consistent icon set throughout
- Vector-based for scalability

## 🎭 Hình ảnh Vector SVG

### Illustrations đã tạo:
1. **team-illustration.svg** - Team working together
2. **coding-illustration.svg** - Developer coding on laptop
3. **office-illustration.svg** - Office building

### Client Logos:
1. **feediy-logo.svg** - Feediy Instagram Automation Tool
2. **ireport-logo.svg** - i-report Instagram Analytics Tool
3. **restory-logo.svg** - RESTORY Stories Management Tool

## ✨ Scroll Animations

### Các loại animations:
- **fadeInUp**: Fade in từ dưới lên
- **slideInLeft**: Slide in từ trái
- **slideInRight**: Slide in từ phải
- **scaleIn**: Scale từ 90% lên 100%

### Scroll Trigger:
- Sử dụng Intersection Observer API
- Threshold: 10% của element visible
- Tự động trigger khi scroll
- Smooth transitions với CSS

### Classes sử dụng:
```html
<!-- Fade in up animation -->
<div class="scroll-animate">...</div>

<!-- Slide in from left -->
<div class="scroll-animate-left">...</div>

<!-- Slide in from right -->
<div class="scroll-animate-right">...</div>

<!-- Scale in animation -->
<div class="scroll-animate-scale">...</div>
```

### Staggered animations:
```html
<!-- Delay animations cho từng item -->
<div class="scroll-animate" style="transition-delay: 0.1s">...</div>
<div class="scroll-animate" style="transition-delay: 0.2s">...</div>
```

## 🌐 Clients Section

### Hiển thị thông tin:
- Logo của client (SVG vector)
- Tên công ty
- Mô tả ngắn về dịch vụ
- Link đến website

### Clients hiện tại:
1. **Feediy** ([feediy.com](https://feediy.com/))
   - Instagram Automation Tool
   - Logo: Orange theme

2. **i-report** ([i-report.jp](https://i-report.jp/))
   - Instagram Analytics Tool  
   - Logo: Teal theme
   - 月額5,980円の分析ツール

3. **RESTORY** ([re-story.jp](https://re-story.jp/))
   - Stories Management Tool
   - Logo: Orange/Teal theme

### Hover Effects:
- Transform: translateY(-8px)
- Shadow elevation
- Smooth transitions

## 📱 Responsive Design

### Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Features:
- Hamburger menu
- Touch-friendly buttons
- Optimized images
- Responsive grid layouts

## 🎯 Performance Optimizations

### Images:
- SVG vector graphics (scalable, lightweight)
- No raster images needed
- Instant loading
- Resolution independent

### Animations:
- CSS-based (GPU accelerated)
- Intersection Observer (efficient)
- requestAnimationFrame
- No jQuery or heavy libraries

### Code Splitting:
- React Router lazy loading
- Component-based architecture
- Tree shaking with Vite

## 🔧 Technical Stack

### Frontend:
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Vite** for build tool

### Animations:
- CSS Transitions
- CSS Animations
- Intersection Observer API
- Custom React hook (useScrollAnimation)

### Icons & Graphics:
- Font Awesome 6.5 (Light variant)
- Custom SVG illustrations
- Vector-based logos

## 🚀 Performance Metrics

### Expected scores:
- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Cumulative Layout Shift**: 0

### Optimization techniques:
- Lazy loading images
- Code splitting
- CSS minification
- SVG optimization
- No external image dependencies

## 📋 Browser Support

### Supported browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features used:
- CSS Grid & Flexbox
- CSS Custom Properties
- Intersection Observer
- ES6+ JavaScript

## 🎨 Animation Examples

### Homepage Sections:
1. **Hero**: Fade in on load
2. **About**: Scroll animate cards
3. **Services**: Staggered card animations
4. **Clients**: Scale in effect
5. **Testimonials**: Slide in from bottom
6. **CTA**: Scale in with delay

### Timing:
- Default: 0.6s ease-out
- Stagger delay: 0.1s per item
- Hover: 0.3s ease

## 📄 File Structure

```
public/
├── images/
│   ├── team-illustration.svg
│   ├── coding-illustration.svg
│   ├── office-illustration.svg
│   └── clients/
│       ├── feediy-logo.svg
│       ├── ireport-logo.svg
│       └── restory-logo.svg

src/
├── hooks/
│   └── useScrollAnimation.ts
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
└── pages/
    ├── HomePage.tsx
    ├── AboutPage.tsx
    ├── ContactPage.tsx
    └── ...
```

## 🎯 Future Enhancements

### Planned features:
- [ ] More complex SVG animations
- [ ] Parallax scrolling effects
- [ ] Dark mode toggle
- [ ] Loading animations
- [ ] Micro-interactions
- [ ] Blog section with scroll animations
- [ ] Case studies for each client
- [ ] Video backgrounds (optional)

