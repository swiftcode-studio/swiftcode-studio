import type { Dict } from './types'

const vi: Dict = {
  lang: 'vi',
  htmlLang: 'vi',
  ogLocale: 'vi_VN',
  meta: {
    title: 'Phát triển phần mềm AI-native & dựng video manga | Swiftcode Studio',
    description: 'Swiftcode Studio là studio tự do làm phần mềm theo quy trình AI-native: AI viết đặc tả, code, kiểm thử và triển khai; bạn duyệt ở từng cổng, tôi review và chịu trách nhiệm từng dòng code lên môi trường thật. Nhận dựng video manga bằng AI.',
  },
  skip: 'Bỏ qua, tới nội dung chính',
  nav: {
    process: 'Quy trình',
    manga: 'Video manga',
    work: 'Dự án',
    about: 'Về tôi',
    engage: 'Báo giá',
    faq: 'Hỏi đáp',
    cta: 'Liên hệ',
    menu: 'Mở menu',
    close: 'Đóng menu',
    primaryAria: 'Menu chính',
    mobileAria: 'Menu di động',
    home: 'Về đầu trang',
    theme: { toDark: 'Chuyển sang nền tối', toLight: 'Chuyển sang nền sáng' },
    language: 'Ngôn ngữ',
  },
  ds: {
    owner: { agent: 'AI làm', human: 'Người làm', both: 'AI + người' },
    codes: { PLAN: 'KẾ HOẠCH', DESIGN: 'THIẾT KẾ', BUILD: 'XÂY DỰNG', TEST: 'KIỂM THỬ', DEPLOY: 'TRIỂN KHAI', MAINTAIN: 'VẬN HÀNH' },
    output: 'Đầu ra',
    open: 'Xem file',
    legend: { agent: 'AI làm', human: 'Người duyệt' },
    gate: 'Cổng duyệt của người',
    pipelineAria: 'Quy trình sáu giai đoạn',
    loop: 'Vận hành sinh intent.md mới → quay lại Lên kế hoạch',
  },
  hero: {
    eyebrow: 'PHÁT TRIỂN AI-NATIVE · LÀM TỰ DO · HÀ NỘI',
    title: 'Dự án chạy bằng AI, duyệt bởi con người.',
    lead: 'Bạn mô tả ý tưởng. AI viết đặc tả, code, kiểm thử và triển khai — bạn duyệt ở từng cổng, tôi review và chịu trách nhiệm từng dòng code lên môi trường thật.',
    primary: 'Trao đổi dự án',
    secondary: 'Xem quy trình',
    proof: [
      { tone: 'agent', text: 'Mỗi giai đoạn để lại một file bạn đọc được' },
      { tone: 'human', text: 'Người duyệt trước mỗi bước quan trọng' },
      { tone: 'neutral', text: 'Một người chịu trách nhiệm, từ đầu đến cuối' },
    ],
    terminalTitle: 'claude — đặt lịch spa',
    terminal: [
      { kind: 'prompt', text: 'claude "đọc intent.md, viết spec.md cho hệ thống đặt lịch"' },
      { kind: 'out', text: 'Đọc intent.md · 3 mục tiêu · 2 ràng buộc' },
      { kind: 'out', text: 'Áp quy tắc: bảo mật, trải nghiệm, thương hiệu' },
      { kind: 'ok', text: 'spec.md — 14 yêu cầu, 2 điểm cần bạn quyết định' },
      { kind: 'gate', text: 'Chờ bạn duyệt spec.md' },
    ],
    caption: 'Ví dụ minh hoạ một phiên làm việc.',
    pathsLabel: 'HAI DỊCH VỤ',
    paths: [
      { title: 'Phát triển phần mềm', body: 'Dịch vụ web, SaaS, API và hệ thống đang chạy. Sáu giai đoạn với cổng duyệt rõ ràng.', href: '#process' },
      { title: 'Dựng video manga bằng AI', body: 'Video tiếng Anh trọn tập từ tài liệu manga. Bắt đầu bằng khoảng 10 phút làm thử.', href: '#manga' },
    ],
  },
  process: {
    eyebrow: 'QUY TRÌNH',
    title: 'Sáu giai đoạn, một vòng lặp',
    lead: 'Từ yêu cầu đến phát hành và vận hành, AI làm phần lớn công việc. Mỗi giai đoạn kết thúc bằng một file được lưu lại — giai đoạn sau bắt đầu bằng việc đọc file đó.',
    viewerEyebrow: 'FILE ĐẦU RA',
    viewerNote: 'Nội dung ví dụ, rút gọn để dễ đọc.',
  },
  stages: [
    {
      index: '01', code: 'PLAN', name: 'Lên kế hoạch', file: 'intent.md', artifact: 'intent.md', owner: 'both',
      gate: 'Bạn xác nhận mục tiêu',
      body: 'AI cùng bạn biến ý tưởng thành một trang mục tiêu: vấn đề, người dùng, tiêu chí thành công. Không cần tài liệu yêu cầu dài.',
      sample: `# mục tiêu: Đặt lịch online cho chuỗi spa
người phụ trách: quản lý vận hành · 2026-11-02

## Vấn đề
Khách gọi điện đặt lịch, lễ tân ghi sổ tay.
Kỹ thuật viên bị trùng lịch mỗi tuần.

## Người dùng
- Khách đặt lịch trên điện thoại
- Lễ tân xem và đổi lịch tại quầy

## Thành công khi
- Khách tự đặt, không cần gọi điện
- Không còn trùng lịch kỹ thuật viên

## Ràng buộc
- Chạy trên web, chưa cần app
◆ Bạn xác nhận → lưu lại`,
    },
    {
      index: '02', code: 'DESIGN', name: 'Thiết kế', file: 'spec.md', artifact: 'spec.md', owner: 'agent',
      gate: 'Bạn duyệt đặc tả',
      body: 'AI gộp yêu cầu và thiết kế thành một bản đặc tả, áp sẵn quy tắc bảo mật, trải nghiệm, thương hiệu và tự đánh dấu chỗ cần bạn quyết định.',
      sample: `# đặc tả: Đặt lịch online — bản 1
dựa trên: intent.md (a41c9e)

## Yêu cầu
R1  Khách chọn dịch vụ, chi nhánh, giờ trống
R2  Giữ chỗ 10 phút trong lúc xác nhận
R3  Lễ tân kéo-thả để đổi lịch
R4  Nhắc lịch qua email trước 24 giờ

## Quy tắc đã áp
bảo mật      không lưu dữ liệu thẻ
trải nghiệm  đặt xong trong tối đa 3 bước

## Cần bạn quyết định
◆ Q1  Cho phép huỷ trước bao nhiêu giờ?
◆ Q2  Có thu tiền cọc khi đặt không?`,
    },
    {
      index: '03', code: 'BUILD', name: 'Xây dựng', file: 'plan.md → code', artifact: 'plan.md', owner: 'agent',
      gate: 'Tôi duyệt kế hoạch',
      body: 'AI đọc mã nguồn ở chế độ chỉ đọc và viết plan.md: sửa file nào, theo thứ tự nào, kiểm thử gì. Tôi duyệt kế hoạch rồi AI mới viết code, nhiều phiên song song.',
      sample: `# kế hoạch: R1–R4
trạng thái: chỉ lập kế hoạch · chưa sửa file nào

1. db/migrate    bảng lịch đặt, khung giờ
2. booking.rb    chống trùng lịch
3. bookings_controller.rb
4. web/src/pages/Book.tsx
5. jobs/reminder_job.rb

## Kiểm thử viết trước
- không trùng lịch         R3
- giữ chỗ hết hạn          R2
- đặt lịch trong 3 bước    trải nghiệm

◆ Tôi duyệt → bắt đầu viết code`,
    },
    {
      index: '04', code: 'TEST', name: 'Kiểm thử', file: 'kiểm thử + ảnh chụp', artifact: 'kết quả kiểm thử', owner: 'agent',
      body: 'AI chạy kiểm thử, chụp màn hình so với thiết kế và tự sửa đến khi mọi kiểm tra đều qua. Với lỗi, kiểm thử được viết trước, rồi mới sửa code.',
      sample: `$ make test
✓ đơn vị · ✓ tích hợp · ✓ đầu-cuối
✓ màn hình Book.tsx khớp thiết kế
  (điện thoại 375px, máy tính 1280px)
✗ kiểm thử giữ chỗ: lỗi
  giữ chỗ không hết hạn sau 10 phút
  → AI sửa booking.rb, không sửa kiểm thử
✓ kiểm thử giữ chỗ

mọi kiểm tra đã qua
đính kèm bằng chứng vào PR #42`,
    },
    {
      index: '05', code: 'DEPLOY', name: 'Triển khai', file: 'PR + REVIEW.md', artifact: 'PR #42', owner: 'agent',
      gate: 'Bạn nghiệm thu, tôi phát hành',
      body: 'AI review mọi thay đổi theo cùng một chính sách: lỗi, bảo mật, tuân thủ. Bạn nghiệm thu trên môi trường thử. AI không tự duyệt code của mình — chỉ người mới phát hành.',
      sample: `# PR #42  Đặt lịch online (R1–R4)
review theo REVIEW.md bản 3

lỗi quan trọng   0
góp ý nhỏ        2   (tối đa 5)
bảo mật          ✓ không lộ khoá bí mật, đã kiểm tra đầu vào
tuân thủ         ✓ không lưu dữ liệu thẻ
bằng chứng       ✓ kiểm thử, nhật ký build, ảnh chụp

◆ Bạn nghiệm thu trên môi trường thử
◆ Tôi duyệt · phát hành`,
    },
    {
      index: '06', code: 'MAINTAIN', name: 'Vận hành', file: 'intent.md mới', artifact: 'intents/next.md', owner: 'agent',
      gate: 'Cùng bạn chọn việc tiếp theo',
      body: 'AI theo dõi chỉ số trên môi trường thật. Khi vượt ngưỡng, AI chẩn đoán và viết intent.md mới — vòng lặp quay về giai đoạn 01.',
      sample: `# giám sát: tỉ lệ lỗi sau phát hành
1σ ghi lại · 2σ chẩn đoán · 3σ đề xuất

2026-11-20 09:14
vượt 2σ trên /bookings
AI chẩn đoán (chỉ đọc):
  sai múi giờ ở một chi nhánh
→ viết intents/fix-timezone.md
→ thêm kiểm thử hồi quy cho lỗi này

◆ Chờ bạn và tôi chọn ưu tiên`,
    },
  ],
  manifesto: {
    line1: 'Tốc độ của AI.',
    line2: 'Trách nhiệm của con người.',
    body: 'AI viết code, chạy kiểm thử, review thay đổi. Con người quyết định làm gì, duyệt từng cổng và chịu trách nhiệm với mỗi lần phát hành.',
  },
  gates: {
    eyebrow: 'BẠN DUYỆT Ở ĐÂU',
    title: 'Không có gì lên môi trường thật mà không qua tay người',
    lead: 'AI làm nhanh, nhưng không tự quyết. Mỗi cổng duyệt là một file cụ thể, một người cụ thể và một mốc thời gian được lưu lại.',
    who: { client: 'Bạn', engineer: 'Tôi', both: 'Cùng nhau' },
    items: [
      { index: '01', code: 'PLAN', who: 'client', title: 'Xác nhận mục tiêu', body: 'Bạn đọc intent.md một trang: đúng vấn đề, đúng người dùng, đúng tiêu chí thành công.' },
      { index: '02', code: 'DESIGN', who: 'client', title: 'Duyệt đặc tả', body: 'Đặc tả ghi rõ chỗ cần bạn quyết định. Chưa có gì được xây trước khi bạn đồng ý.' },
      { index: '03', code: 'BUILD', who: 'engineer', title: 'Duyệt kế hoạch', body: 'Tôi đọc plan.md trước khi AI viết dòng code đầu tiên — sửa hướng khi còn rẻ.' },
      { index: '05', code: 'DEPLOY', who: 'client', title: 'Nghiệm thu', body: 'Bạn dùng thử trên môi trường thử. Kết quả kiểm thử và ảnh chụp đã đính kèm sẵn ở mỗi thay đổi.' },
      { index: '05', code: 'DEPLOY', who: 'engineer', title: 'Duyệt thay đổi và phát hành', body: 'Cơ chế bảo vệ nhánh chặn AI tự gộp code. Chỉ tôi mới bấm phát hành.' },
      { index: '06', code: 'MAINTAIN', who: 'both', title: 'Chọn việc tiếp theo', body: 'AI đề xuất cải tiến từ dữ liệu vận hành. Bạn và tôi quyết định làm gì.' },
    ],
    demo: {
      eyebrow: 'THỬ MỘT CỔNG DUYỆT',
      title: 'Bạn là người bấm nút',
      body: 'Đây là cổng duyệt đặc tả. Duyệt để AI chuyển sang lập kế hoạch, hoặc yêu cầu sửa để AI cập nhật đặc tả.',
      terminalTitle: 'claude — cổng duyệt: spec.md',
      start: [
        { kind: 'prompt', text: 'claude "hoàn tất spec.md, gửi khách duyệt"' },
        { kind: 'ok', text: 'spec.md — 14 yêu cầu · 2 câu hỏi đã trả lời' },
        { kind: 'ok', text: 'quy tắc bảo mật, trải nghiệm, thương hiệu: đạt' },
        { kind: 'gate', text: 'Chờ bạn duyệt spec.md' },
      ],
      approve: 'Duyệt đặc tả',
      revise: 'Yêu cầu sửa',
      reset: 'Chạy lại',
      approved: [
        { kind: 'gate', text: 'Bạn đã duyệt spec.md · lưu lại 7f3e21a' },
        { kind: 'prompt', text: 'claude --plan "đọc spec.md, viết plan.md"' },
        { kind: 'ok', text: 'plan.md — 5 bước, 3 kiểm thử viết trước' },
        { kind: 'gate', text: 'Chờ tôi duyệt plan.md' },
      ],
      revised: [
        { kind: 'out', text: 'Góp ý: "thêm nhắc lịch qua Zalo"' },
        { kind: 'prompt', text: 'claude "cập nhật spec.md theo góp ý"' },
        { kind: 'ok', text: 'spec.md bản 2 — thêm R15: nhắc lịch qua Zalo' },
        { kind: 'gate', text: 'Chờ bạn duyệt spec.md bản 2' },
      ],
      doneNote: 'Mỗi lần duyệt hay yêu cầu sửa đều được lưu lại, kèm người và thời gian.',
    },
  },
  manga: {
    eyebrow: 'VIDEO MANGA BẰNG AI',
    title: 'Từ tranh manga đến video hoàn chỉnh',
    lead: 'Cùng vòng lặp AI-native, áp dụng cho dựng video. Bạn gửi tranh, kịch bản và giọng đọc; AI dựng video đủ tập, tôi soát từng cảnh trước khi giao.',
    inLabel: 'BẠN GỬI',
    inputs: ['Tranh tô màu (PNG / PSD)', 'Kịch bản Excel kèm bản dịch', 'File giọng đọc', 'Bản tiếng Nhật để khớp nhạc nền'],
    outLabel: 'BẠN NHẬN',
    outputs: ['Video đủ tập, độ phân giải Full HD (MP4)', 'Bong bóng thoại và khung dẫn chuyện tiếng Anh', 'Phóng to, lia và nhiều góc máy trong mỗi cảnh', 'Nhạc nền, đoạn mở đầu, cảnh kết'],
    inAlt: 'Tranh tô màu gốc, chưa có chữ',
    outAlt: 'Cùng khung tranh trong video: có bong bóng thoại tiếng Anh, đã phóng vào người nói',
    clipCaption: '15 giây trích từ một tập đã giao (không tiếng).',
    cutsTitle: 'Một khung tranh, nhiều góc máy',
    cutsBody: 'Cảnh dài được chia ở chỗ ngắt câu: cận người đang nói, rồi trung cảnh, rồi toàn cảnh. Luật cứng: không cắt ngang khuôn mặt, người nói luôn trong khung, hai góc liền nhau phải khác rõ.',
    cutLabel: 'GÓC',
    cutAlts: ['Góc 1: cận nhân vật đang nói', 'Góc 2: trung cảnh nhóm nhân vật', 'Góc 3: toàn cảnh với người phản ứng'],
    stepsTitle: 'Sáu giai đoạn, áp dụng cho video',
    steps: [
      { index: '01', code: 'PLAN', title: 'Nhận việc', owner: 'both', artifact: 'README.md', gate: 'Bạn chốt ngày giao', body: 'Mỗi đợt thành một thẻ công việc: hạn giao, link tài liệu, ghi chú. Tôi báo ngày giao được ngay trong ngày.' },
      { index: '02', code: 'DESIGN', title: 'Đọc tài liệu', owner: 'agent', artifact: 'project.json', gate: 'Tôi kiểm tra cấu hình', body: 'Công cụ tự nhận diện các cột kịch bản (trang, khung, người nói, bản dịch), tranh, ảnh lời thoại và file giọng.' },
      { index: '03', code: 'BUILD', title: 'Dựng tự động', owner: 'agent', artifact: 'speakers.json', gate: 'Tôi xác nhận người nói từng cảnh', body: 'AI khớp từng câu với giọng đọc, nhận diện khuôn mặt, đặt bong bóng không che mặt, chia góc máy và ghép nhạc theo bản tiếng Nhật.' },
      { index: '04', code: 'TEST', title: 'Kiểm tra', owner: 'agent', artifact: 'review.py', body: 'Kiểm tra tự động trên bản xuất: bong bóng, khung hình, đủ câu, âm lượng, khoảng lặng, ảnh đứng yên. Sau đó tôi xem hết video.' },
      { index: '05', code: 'DEPLOY', title: 'Giao bản Full HD', owner: 'agent', artifact: '20261104.mp4', gate: 'Bạn duyệt bản giao', body: 'Gửi video qua link tải. Bạn ghi góp ý theo mốc thời gian; bản sửa giao lại đúng hẹn.' },
      { index: '06', code: 'MAINTAIN', title: 'Học từ góp ý', owner: 'both', artifact: 'CLAUDE.md', gate: 'Cùng bạn chốt quy tắc mới', body: 'Mỗi góp ý thành một dòng trong danh sách kiểm tra hoặc một luật trong công cụ, áp dụng cho mọi tập sau.' },
    ],
    reviewTitle: 'Kiểm tra trước khi giao',
    reviewBody: 'Kết quả thật của bước kiểm tra tự động trên một tập 22 phút (đã dịch sang tiếng Việt). Máy bắt lỗi đo được; người xem lại phần cảm nhận.',
    reviewTerminalTitle: 'review.py — 20261104.mp4',
    review: [
      { kind: 'prompt', text: 'python review.py --project 20261104' },
      { kind: 'ok', text: 'file: 1920×1080, có âm thanh, 22:53' },
      { kind: 'ok', text: 'bong bóng tràn ra mép màn hình: không có' },
      { kind: 'ok', text: 'người nói nằm ngoài khung: không có' },
      { kind: 'ok', text: 'góc máy cắt ngang khuôn mặt: không có' },
      { kind: 'ok', text: 'câu thoại: đủ 279 câu, không thiếu' },
      { kind: 'ok', text: 'đỉnh -3.3 dBFS · độ to -16.0 LUFS' },
      { kind: 'gate', text: 'Tôi xem hết video trước khi giao' },
    ],
    cardTitle: 'Một tập đã giao',
    cardFile: 'ban-giao.md',
    card: `# bàn giao: tập 4, tháng 11/2026
thời lượng   22:53 · 1920×1080
cảnh         56 cảnh · 279 câu thoại
bong bóng    125 vị trí chỉnh tay, giữ nguyên khi xuất
khoảng lặng  cắt ~104 giây lặng thừa trong file giọng
nhạc nền     12 đoạn khớp theo bản tiếng Nhật
âm lượng     -16.0 LUFS · đỉnh -3.3 dBFS
kiểm tra     13/13 mục tự động: đạt
◆ Tôi xem hết video → giao`,
    specsTitle: 'Quy cách sản xuất',
    specs: [
      ['Định dạng', 'MP4 (H.264 / AAC), 1920×1080, 30 khung hình/giây'],
      ['Thời lượng', 'Trọn một tập (thường 17–35 phút)'],
      ['Tài liệu', 'Tranh tô màu (PNG / PSD), kịch bản (Excel / Google Sheets), giọng đọc (MP3 / WAV)'],
      ['Gửi nhận', 'Google Drive, GigaFile hoặc tương tự'],
      ['Sửa', 'Góp ý kèm mốc thời gian; giao lại đúng hẹn'],
      ['Làm thử', 'Bắt đầu với khoảng 10 phút đầu'],
      ['Giá', 'Báo giá theo thời lượng và phạm vi công việc (xem chất lượng qua bản làm thử trước)'],
      ['Ngôn ngữ', 'Bản tiếng Anh từ manga tiếng Nhật (ngôn ngữ khác: hãy trao đổi)'],
    ],
    toolTitle: 'Công cụ tôi tự xây',
    toolBody: 'AI làm phần lặp lại; màn hình được thiết kế cho chỗ cần mắt người: xác nhận ai đang nói, so bản gốc với bản dịch, kéo bong bóng khi cần.',
    shots: [
      { src: 'compare', alt: 'Màn hình tổng quan: bản gốc tiếng Nhật bên trái, cùng khung tranh bản tiếng Anh bên phải', caption: 'Bản gốc tiếng Nhật và bản tiếng Anh cạnh nhau, soát từng câu.' },
      { src: 'speakers', alt: 'Màn hình xác nhận nhân vật: khuôn mặt được đánh số, gán tên người nói', caption: 'Cổng duyệt: máy đoán ai đang nói, tôi xác nhận từng cảnh trước khi xuất video.' },
    ],
    source: 'Số liệu và hình ảnh từ một tập đã giao cho kênh video manga Nhật Bản, dùng với sự đồng ý của khách hàng.',
    cta: 'Trao đổi làm thử một tập',
    more: 'Xem trang chi tiết về video manga',
  },
  mangaPage: {
    metaTitle: 'Dựng video manga bản tiếng Anh | Swiftcode Studio',
    metaDescription: 'Chuyển video manga tiếng Nhật thành bản tiếng Anh. Dùng lại tranh, kịch bản và giọng đọc có sẵn, tôi dựng trọn tập: bong bóng thoại, góc máy, nhạc nền. AI dựng, người soát từng cảnh. Bắt đầu bằng khoảng 10 phút làm thử.',
    eyebrow: 'VIDEO MANGA · BẢN TIẾNG ANH · RA THẾ GIỚI',
    title: 'Đưa video manga tiếng Nhật tới khán giả nói tiếng Anh.',
    lead: 'Tôi dựng trọn tập bản tiếng Anh từ tranh, kịch bản và giọng đọc bạn đã có. AI lắp ráp từng tập, tôi soát từng cảnh trước khi giao.',
    primary: 'Trao đổi làm thử một tập',
    secondary: 'Xem cách làm',
    whyTitle: 'Bản tiếng Anh, làm đều đặn được',
    why: [
      { title: 'Không phải vẽ lại', body: 'Tranh tô màu của bản tiếng Nhật được dùng nguyên; chỉ bong bóng thoại và khung dẫn chuyện được làm lại bằng tiếng Anh.' },
      { title: 'Nhạc nền như bản gốc', body: 'Nhạc được khớp theo từng cảnh của bản tiếng Nhật đã đăng, giữ đúng không khí của truyện.' },
      { title: 'Cùng một chuẩn mỗi tập', body: 'Mỗi tập đều qua kiểm tra tự động và được xem hết. Góp ý của bạn thành luật, áp dụng từ tập sau.' },
    ],
    faqTitle: 'Câu hỏi về video manga',
    faq: [
      { q: 'Cần gửi những tài liệu gì?', a: 'Tranh tô màu (PNG / PSD), kịch bản kèm bản dịch và giọng đọc tiếng Anh. Gửi kèm bản tiếng Nhật đã đăng để nhạc nền khớp từng cảnh.' },
      { q: 'Có nhận dịch và thu giọng không?', a: 'Hiện tôi làm từ kịch bản đã dịch và giọng đọc tiếng Anh do bạn cung cấp. Nếu cần hỗ trợ dịch hoặc giọng đọc, hãy ghi rõ khi liên hệ.' },
      { q: 'Một tập mất bao lâu?', a: 'Tuỳ thời lượng và tình trạng tài liệu. Tôi báo ngày giao được ngay trong ngày bạn gửi yêu cầu.' },
      { q: 'Yêu cầu sửa thế nào?', a: 'Gửi mốc thời gian (ví dụ 4:43–5:21) kèm nội dung cần sửa. Bản sửa được giao lại đúng hẹn, và góp ý đó thành luật cho các tập sau.' },
      { q: 'Có nhận làm đều đặn hằng tháng không?', a: 'Có. Ghi chú và danh sách kiểm tra của mỗi tập được chuyển sang tập sau, nên càng làm nhiều tập chất lượng càng ổn định.' },
      { q: 'Giá bao nhiêu?', a: 'Báo giá theo thời lượng và phạm vi công việc. Hãy bắt đầu bằng khoảng 10 phút làm thử để xem chất lượng.' },
      { q: 'Tài liệu tôi gửi được xử lý thế nào?', a: 'Chỉ dùng cho việc sản xuất và không công khai. Tôi chỉ đưa vào phần giới thiệu khi khách hàng đồng ý.' },
    ],
    breadcrumb: 'Video manga',
    home: 'Trang chủ',
  },
  stickyCta: 'Liên hệ',
  shift: {
    eyebrow: 'KHÁC GÌ CÁCH LÀM CŨ',
    title: 'Code không còn là nút thắt',
    lead: 'Khi AI viết code nhanh, chỗ chậm chuyển sang yêu cầu, review và kiểm thử. Tôi thiết kế lại từng khâu quanh điều đó.',
    colStage: 'Khâu',
    colOld: 'Cách làm truyền thống',
    colNew: 'AI-native tại Swiftcode',
    rows: [
      ['Yêu cầu', 'Quản lý dự án viết tài liệu nhiều tuần', 'AI cùng bạn viết intent.md trong một buổi'],
      ['Thiết kế', 'Kiến trúc sư chuyển yêu cầu thành đặc tả', 'AI viết đặc tả, áp sẵn quy tắc; bạn duyệt'],
      ['Code', 'Kỹ sư tự viết mọi dòng code', 'AI viết theo kế hoạch đã duyệt; tôi review'],
      ['Kiểm thử', 'Kiểm thử thủ công cuối dự án', 'AI tự kiểm, tự sửa; kiểm thử hồi quy chạy liên tục'],
      ['Review', 'Người review đọc toàn bộ thay đổi', 'AI review theo REVIEW.md; người tập trung vào rủi ro'],
      ['Vận hành', 'Chờ người dùng báo lỗi', 'AI theo dõi chỉ số và viết đề xuất sửa'],
    ],
    source: 'Quy trình dựa trên',
    sourceLink: 'The AI-native SDLC playbook (tiếng Anh)',
  },
  principles: {
    eyebrow: 'CAM KẾT',
    title: 'Sáu điều không đổi ở mọi dự án',
    items: [
      { title: 'Mọi thứ đều có lịch sử', body: 'Mục tiêu, đặc tả, kế hoạch, code, review đều là file có lịch sử: ai yêu cầu gì, AI làm gì, ai duyệt.' },
      { title: 'Quy tắc của bạn, cài sẵn', body: 'Quy tắc bảo mật, trải nghiệm, thương hiệu của bạn thành thiết lập mà AI buộc phải theo — áp dụng ngay khi làm, không đợi review mới phát hiện.' },
      { title: 'AI không tự duyệt mình', body: 'Cơ chế chặn tự động và bảo vệ nhánh không cho AI gộp code hay phát hành. Mỗi lần chặn đều có nhật ký và mốc thời gian.' },
      { title: 'Bằng chứng kèm từng thay đổi', body: 'Kết quả kiểm thử, nhật ký build, ảnh chụp màn hình đính kèm sẵn. Bạn duyệt dựa trên bằng chứng, không dựa trên lời hứa.' },
      { title: 'Code là của bạn', body: 'Mã nguồn, tài liệu, cấu hình nằm trong tài khoản của bạn từ ngày đầu. Không phụ thuộc nhà cung cấp.' },
      { title: 'Sự cố thành kiểm thử', body: 'Mỗi lỗi trên môi trường thật trở thành một kiểm thử hồi quy cố định, để cùng một lỗi không quay lại.' },
    ],
  },
  services: {
    eyebrow: 'TÔI XÂY GÌ',
    title: 'Cùng một quy trình, nhiều loại sản phẩm',
    lead: 'Quy trình AI-native áp dụng cho dự án mới, hệ thống đang chạy, và cả dựng video.',
    items: [
      { title: 'SaaS và ứng dụng web', body: 'Từ bản mẫu đến sản phẩm có người dùng trả tiền, kèm trang quản trị và thanh toán.' },
      { title: 'API và tích hợp', body: 'Kết nối CRM, thanh toán, mạng xã hội, hệ thống nội bộ. Tài liệu API viết cùng code.' },
      { title: 'Ứng dụng di động', body: 'iOS, Android, Flutter, React Native — dùng chung một đặc tả với bản web.' },
      { title: 'Tính năng AI trong sản phẩm', body: 'Trợ lý, tự động hoá, phân tích nội dung — có bộ đo chất lượng trước khi ra mắt.' },
      { title: 'Hệ thống cũ và bảo trì', body: 'AI đọc mã nguồn, bổ sung tài liệu và kiểm thử trước khi sửa. Giám sát, vá lỗi theo vòng lặp giai đoạn 06.' },
      { title: 'Video manga bằng AI', body: 'Dựng video đủ tập từ tranh, kịch bản và giọng đọc: bong bóng thoại, góc máy, nhạc nền.', href: '#manga' },
    ],
    stackLabel: 'Công nghệ thường dùng',
    more: 'Xem chi tiết',
  },
  work: {
    eyebrow: 'DỰ ÁN',
    title: 'Sản phẩm tôi đã xây',
    lead: 'Các công cụ SaaS cho thị trường Nhật Bản, đang có người dùng thật.',
    items: [
      { key: 'feediy', kind: 'Tự động hoá Instagram', body: 'Trả lời bình luận và tin nhắn, gửi link theo kịch bản, quản lý luồng tự động cho tài khoản doanh nghiệp.', ai: 'AI (OpenAI, Gemini) soạn nội dung bài đăng, tạo và chỉnh ảnh; trợ lý AI dạng chat làm các việc vận hành theo yêu cầu.', tags: ['SaaS', 'Instagram API', 'Nhật Bản'] },
      { key: 'ireport', kind: 'Phân tích Instagram', body: 'Báo cáo hiệu quả tài khoản và bài đăng cho doanh nghiệp, xử lý dữ liệu từ Instagram API.', ai: 'AI (GPT-4o-mini) tự phân loại tài khoản đối thủ theo thể loại và khu vực, Google Vision đọc chữ trong ảnh. Không còn phân loại thủ công.', tags: ['SaaS', 'Phân tích', 'Nhật Bản'] },
      { key: 'restory', kind: 'Quản lý Stories', body: 'Lưu trữ và quản lý Stories Instagram, giao diện tối ưu cho đội vận hành mạng xã hội.', ai: 'Google Vision đọc chữ trong ảnh và video Stories, AI (OpenAI) chuẩn hoá thành văn bản để tra cứu, nên tìm lại Stories cũ bằng từ khoá được.', tags: ['SaaS', 'Instagram API', 'Nhật Bản'] },
    ],
    visit: 'Xem website',
    logoAlt: 'logo',
    note: 'Muốn xem demo hoặc trao đổi kỹ hơn về một dự án? Hỏi tôi trong form liên hệ.',
    aiLabel: 'AI giúp gì',
    casesTitle: 'Dự án khác',
    cases: [
      {
        kind: 'Xử lý video · AI chạy tại máy',
        title: 'Công cụ tự động làm mờ video',
        body: 'Tự phát hiện và làm mờ khuôn mặt không nằm trong danh sách cho phép cùng các vùng nhạy cảm. Kết quả được duyệt và chỉnh lại ngay trên trình duyệt, xuất ra video đã làm mờ hoặc lớp phủ trong suốt cho Premiere Pro. Mọi xử lý chạy trên máy Mac của khách, video không rời khỏi máy.',
        ai: 'AI đảm nhận việc phát hiện (vùng cơ thể và nhận diện khuôn mặt). Mỗi lần người sửa lại đều thành dữ liệu huấn luyện, càng dùng càng chính xác.',
        fact: 'Video Full HD 90 phút: phân tích khoảng 1 giờ 40 phút, xuất khoảng 40 phút (đo trên Mac M1)',
        tags: ['Python', 'ONNX', 'FFmpeg'],
        flow: ['Nạp video', 'AI phát hiện', 'Duyệt trên trình duyệt', 'Xuất bản đã làm mờ'],
      },
      {
        kind: 'Tự động hoá nghiệp vụ · Google Apps Script',
        title: 'Thống kê quà tặng TikTok Live và bảng xếp hạng qua LINE',
        body: 'Bấm một nút là dữ liệu quà tặng TikTok Live được nhập vào bảng tính doanh thu. Sheet theo tháng, danh sách người tặng và bảng xếp hạng tự cập nhật; idol và quản lý chỉ cần nhắn bot LINE để xem thứ hạng, mỗi người thấy đúng phần được phân quyền.',
        ai: 'AI viết code và kiểm thử, tự động kiểm tra nhập trùng và lệch ngày. Không còn sao chép, cộng tay thủ công.',
        image: { name: 'tiktok-gift', alt: 'Bảng tổng hợp theo tháng và bảng xếp hạng người tặng trả về qua LINE', note: 'Ảnh minh hoạ (toàn bộ dữ liệu là dữ liệu mẫu)' },
        fact: 'Nhập liệu, tổng hợp và trả lời LINE đều chạy hoàn toàn trên dịch vụ của Google',
        tags: ['Google Apps Script', 'LINE Messaging API', 'Google Sheets'],
      },
      {
        kind: 'Livestream · tự động hoá dựng video',
        title: 'Ghi hình TikTok Live và cắt cảnh nổi bật',
        body: 'Từ buổi TikTok Live được ghi bằng OBS, Python và FFmpeg tự cắt những cảnh nổi bật và xuất thành video ngắn. Không còn phải xem lại cả mấy tiếng livestream từ đầu.',
        ai: 'Dùng AI để viết nhanh script cắt cảnh và tự động hoá từ khâu tìm cảnh đến xuất file. Người chỉ cần chọn trong các đoạn đã cắt sẵn.',
        fact: 'Ghi hình bằng OBS; cắt và xuất tự động bằng Python + FFmpeg',
        tags: ['OBS', 'Python', 'FFmpeg'],
        image: { name: 'tiktok-clips', alt: 'Tìm cảnh nổi bật trong bản ghi OBS và xuất thành các clip ngắn', note: 'Ảnh minh hoạ (dữ liệu mẫu)' },
      },
      {
        kind: 'Công cụ cho lập trình viên · Ruby gem',
        title: 'Error Radar — theo dõi lỗi và bảng công việc cho Rails',
        body: 'Tự thu thập ngoại lệ từ controller, Rack, Sidekiq và ActiveJob trong ứng dụng Rails. Cùng một lỗi lặp lại được gộp thành một việc kèm số lần xảy ra, quản lý trên bảng kanban: chưa xử lý, đang xử lý, đã xử lý.',
        ai: 'AI đảm nhận thiết kế, lập trình và kiểm thử, nên các bản phát hành tới 1.0 ra đều đặn theo chu kỳ ngắn. Khi có lỗi trên môi trường thật, AI tìm nguyên nhân và chuẩn bị bản sửa cùng kiểm thử.',
        fact: 'Phát hành và quản lý phiên bản dưới dạng gem; đang chạy trong hai sản phẩm SaaS',
        tags: ['Ruby on Rails', 'Sidekiq', 'Rails Engine'],
        image: { name: 'error-radar', alt: 'Bảng kanban theo dõi lỗi', note: 'Ảnh minh hoạ (dữ liệu mẫu)' },
      },
      {
        kind: 'Giám sát hạ tầng · ứng dụng di động',
        title: 'Ops Guardian — ứng dụng giám sát và khôi phục server',
        body: 'Kiểm tra nhiều server AWS mỗi 30 giây, xem CPU, RAM, ổ đĩa và trạng thái Sidekiq trên ứng dụng Android. Có sự cố thì nhận thông báo đẩy, và khởi động lại server ngay từ ứng dụng.',
        ai: 'AI phát triển song song API quản trị (Rails) và ứng dụng Flutter. Quy tắc giám sát và quy trình khởi động lại cũng được thiết kế, kiểm tra cùng AI.',
        fact: 'Rails API + Sidekiq để kiểm tra, Firebase để gửi thông báo, khoá AWS chỉ nằm ở server',
        tags: ['Flutter', 'Ruby on Rails', 'AWS EC2', 'Firebase'],
        image: { name: 'ops-guardian', alt: 'Màn hình ứng dụng liệt kê trạng thái server kèm cảnh báo', note: 'Ảnh minh hoạ (dữ liệu mẫu)' },
      },
      {
        kind: 'Đánh giá kỹ thuật · hệ thống đang chạy',
        title: 'Đánh giá hệ thống để hợp nhất hai sản phẩm SaaS',
        body: 'Đọc mã nguồn và cơ sở dữ liệu của một SaaS đang chạy (Rails API + React), báo cáo kiến trúc, tích hợp bên ngoài, nợ kỹ thuật và rủi ro, giúp quyết định có hợp nhất được không và cần làm gì trước.',
        ai: 'AI đọc hàng chục nghìn dòng code và cấu trúc cơ sở dữ liệu, soạn sẵn sơ đồ kiến trúc và danh sách rủi ro. Tôi kiểm tra và bổ sung thành báo cáo, nên bao quát được toàn hệ thống trong thời gian ngắn.',
        fact: 'Gồm báo cáo kiến trúc và bản đánh giá cơ sở dữ liệu',
        tags: ['Ruby on Rails', 'React', 'MySQL', 'Đánh giá'],
        image: { name: 'system-audit', alt: 'Báo cáo đánh giá: tóm tắt, kiến trúc, rủi ro, mức sẵn sàng hợp nhất', note: 'Ảnh minh hoạ (nội dung mẫu)' },
      },
      {
        kind: 'Tự phát triển · làm video bằng AI',
        title: 'Cue Studio — công cụ làm phim ngắn bằng AI',
        body: 'Từ một ý tưởng, AI viết kịch bản và storyboard, rồi công cụ lo keyframe, chuyển động, chọn take và dựng hoàn chỉnh trên một màn hình. Khuôn mặt và trang phục nhân vật giữ nhất quán qua các cảnh.',
        ai: 'Claude viết kịch bản và đạo diễn, AI tạo ảnh vẽ keyframe, AI tạo video thêm chuyển động. Công cụ tự nhận video tải về, chấm điểm take và dựng hoàn chỉnh.',
        fact: 'Bốn khung hình này là keyframe AI vẽ, giữ đúng một nhân vật',
        tags: ['React', 'Ruby on Rails', 'Remotion', 'FFmpeg'],
        image: { name: 'cue-keyframes', alt: 'Bốn keyframe do AI vẽ: cùng một cô gái đi trên vỉa hè Sài Gòn và uống cà phê sữa đá', note: 'Keyframe do AI tạo (phim demo tự làm)', shared: true },
      },
    ],
    self: {
      eyebrow: 'VỀ TRANG NÀY',
      title: 'Trang web này cũng làm theo cùng quy trình',
      body: 'Sáu trang, ba ngôn ngữ, dựng sẵn HTML. Lighthouse trên điện thoại: tốc độ 93–98; khả năng truy cập, thực hành tốt và SEO đều 100 (tháng 11/2026, đo trước khi ra mắt). Từ bộ quy tắc thiết kế đến lập trình và đo kiểm, mọi bước đều đi qua các giai đoạn giới thiệu trên trang này.',
      verify: 'Kiểm tra trên PageSpeed Insights',
    },
  },
  about: {
    eyebrow: 'VỀ TÔI',
    title: 'Bạn làm việc với một người duy nhất',
    lead: 'Cùng một người trao đổi, thiết kế, review và phát hành. Không có chuyện tam sao thất bản.',
    terminalTitle: 'whoami',
    whoami: [
      { kind: 'prompt', text: 'whoami' },
      { kind: 'out', text: 'Chien — người sáng lập Swiftcode Studio' },
      { kind: 'out', text: 'Kỹ sư làm tự do · Hà Nội, Việt Nam' },
      { kind: 'ok', text: 'Phát triển dịch vụ web và SaaS' },
      { kind: 'ok', text: 'Xây và vận hành công cụ dựng video manga bằng AI' },
      { kind: 'gate', text: 'Tôi review mọi thứ trước khi giao' },
    ],
    body: [
      'Từ 2024, tôi làm Swiftcode Studio, chủ yếu xây công cụ SaaS cho thị trường Nhật Bản. Mảng chính là React, TypeScript, Ruby on Rails, và xử lý video bằng Python.',
      'Tôi dùng Claude Code mỗi ngày và tách rõ việc giao cho AI với việc con người phải quyết định. Quy trình trên trang này là quy trình tôi dùng cho dự án thật.',
    ],
    facts: [
      ['Nơi làm việc', 'Hà Nội, Việt Nam (GMT+7)'],
      ['Bắt đầu', '2024, với tên Swiftcode Studio'],
      ['Dịch vụ', 'Phát triển phần mềm theo yêu cầu, dựng video manga bằng AI'],
      ['Công nghệ chính', 'React, TypeScript, Ruby on Rails, Python, FFmpeg'],
      ['Ngôn ngữ', 'Tiếng Việt, tiếng Nhật và tiếng Anh (chủ yếu qua văn bản)'],
      ['Giờ làm', 'Thứ 2 – Thứ 6, 8:00 – 17:00'],
    ],
    styleTitle: 'Cách tôi làm việc',
    style: [
      { title: 'Trả lời trong ngày', body: 'Trong giờ làm việc các ngày thường; câu hỏi như ngày giao hàng được trả lời ngay trong ngày.' },
      { title: 'Tiến độ đọc được', body: 'Mục tiêu, đặc tả, kế hoạch, kết quả kiểm thử được lưu thành file theo từng bước, bạn luôn biết dự án đang ở đâu.' },
      { title: 'Chỉ họp khi cần', body: 'Phần lớn trao đổi bằng văn bản, mọi quyết định đều được ghi lại. Gọi video khi thật sự có ích.' },
      { title: 'Dùng công cụ của bạn', body: 'Slack, Chatwork, Discord, Zalo hay email — bạn quen cái nào dùng cái đó. Mã nguồn và file nằm trong môi trường của bạn.' },
    ],
  },
  fit: {
    eyebrow: 'PHÙ HỢP',
    title: 'Việc tôi nhận, và việc tôi không nhận',
    lead: 'Nói thẳng từ đầu để không ai mất thời gian.',
    good: {
      title: 'Phù hợp',
      items: [
        'Muốn bắt đầu một dịch vụ web hay SaaS mới, nhỏ và nhanh',
        'Yêu cầu chưa rõ, nhưng vấn đề cần giải quyết thì rõ',
        'Muốn thêm kiểm thử và quy trình cho hệ thống cũ rồi cải tiến đều đặn',
        'Cần chuyển tài liệu manga thành video tiếng Anh định kỳ',
      ],
    },
    bad: {
      title: 'Chưa phù hợp',
      items: [
        'Cần một đội đông người ngồi tại chỗ (tôi làm một mình)',
        'Không có thời gian duyệt và xác nhận trong quá trình làm',
        'Hợp đồng không cho phép dùng công cụ AI',
      ],
    },
  },
  engage: {
    eyebrow: 'BÁO GIÁ',
    title: 'Ba cách bắt đầu',
    lead: 'Báo giá dựa trên đặc tả đã duyệt, không dựa trên phỏng đoán. Bạn biết mình trả tiền cho cái gì trước khi dự án bắt đầu.',
    fitLabel: 'Phù hợp khi',
    items: [
      {
        code: 'GIAI ĐOẠN 0', name: 'Khởi động', fit: 'Bạn có ý tưởng, chưa có tài liệu.',
        includes: ['Buổi làm việc tạo intent.md', 'spec.md kèm các câu hỏi mở', 'Bản mẫu bấm thử được', 'Báo giá trọn gói theo đặc tả'],
        price: 'Phí cố định', contract: 'Hợp đồng trọn gói',
      },
      {
        code: 'XÂY DỰNG', name: 'Dự án trọn gói', fit: 'Phạm vi đã rõ, cần ra mắt.',
        includes: ['Đủ sáu giai đoạn, cổng duyệt rõ ràng', 'Demo hằng tuần trên môi trường thử', 'Nghiệm thu và phát hành', 'Bàn giao mã nguồn và tài liệu'],
        price: 'Báo giá theo đặc tả đã duyệt', contract: 'Hợp đồng trọn gói',
      },
      {
        code: 'VẬN HÀNH', name: 'Đồng hành liên tục', fit: 'Sản phẩm đang chạy, cần phát triển tiếp.',
        includes: ['Giám sát và vòng lặp giai đoạn 06', 'Tôi + AI, tính theo tháng', 'Chọn ưu tiên hằng tuần', 'Báo cáo chỉ số định kỳ'],
        price: 'Theo tháng', contract: 'Hợp đồng theo tháng',
      },
    ],
    flowTitle: 'Bắt đầu một dự án',
    flow: [
      { title: 'Liên hệ', body: 'Qua form hoặc email. Tôi trả lời trong một ngày làm việc.' },
      { title: 'Tìm hiểu', body: 'Bằng văn bản hoặc gọi trực tuyến, tôi tìm hiểu vấn đề và mục tiêu.' },
      { title: 'Mục tiêu và báo giá', body: 'Bạn nhận intent.md một trang kèm phạm vi, thời gian, chi phí.' },
      { title: 'Ký hợp đồng', body: 'Điều khoản bằng văn bản trước khi bắt đầu. Ký thoả thuận bảo mật nếu cần.' },
      { title: 'Bắt đầu', body: 'Làm theo sáu giai đoạn và các cổng duyệt.' },
    ],
    note: 'Đã có đội kỹ sư? Tôi cũng giúp đội của bạn chuyển sang quy trình AI-native.',
  },
  faq: {
    eyebrow: 'HỎI ĐÁP',
    title: 'Câu hỏi thường gặp',
    items: [
      { q: 'AI viết code thì chất lượng có ổn không?', a: 'AI viết, nhưng không tự duyệt. Mỗi thay đổi phải qua kiểm thử tự động, review theo REVIEW.md và tôi duyệt. Tôi chịu trách nhiệm với code đó như với code do người viết.' },
      { q: 'Tôi không rành kỹ thuật, có làm được không?', a: 'Được. Bạn chỉ cần mô tả vấn đề. Các file bạn duyệt — intent.md, spec.md — viết bằng ngôn ngữ thường, không phải code.' },
      { q: 'Mã nguồn và dữ liệu của tôi có an toàn không?', a: 'Mã nguồn nằm trong tài khoản của bạn. AI chạy trong môi trường cách ly với quyền tối thiểu, không truy cập môi trường thật. Tôi ký thoả thuận bảo mật khi bạn cần.' },
      { q: 'Bạn dùng công cụ AI nào?', a: 'Chủ yếu là Claude Code cho lên kế hoạch, viết code, kiểm thử và review, kết nối với môi trường của bạn trên GitHub hoặc GitLab. Công cụ được chọn theo chính sách bảo mật của bạn.' },
      { q: 'Khác gì với "AI hỗ trợ" hay "AI dẫn dắt"?', a: 'Dùng AI có nhiều mức: AI hỗ trợ viết code; AI dẫn dắt, soạn sẵn bản nháp ở từng khâu; và AI-native, khi AI có mặt ở mọi khâu từ yêu cầu đến vận hành còn con người quyết định và duyệt. Tôi làm theo cách AI-native, và mọi lần duyệt đều được ghi lại: ở khâu nào, ai duyệt, khi nào.' },
      { q: 'Dùng AI thì rẻ hơn, nhanh hơn bao nhiêu?', a: 'Mỗi dự án mỗi khác, nên tôi không hứa những con số như "giảm còn 1/3 công sức". Thay vào đó, báo giá dựa trên đặc tả đã duyệt, và bạn thấy kết quả cùng lịch sử duyệt của từng giai đoạn ngay trong lúc làm.' },
      { q: 'Thay đổi yêu cầu giữa chừng thì sao?', a: 'Bạn sửa intent.md hoặc spec.md, AI cập nhật kế hoạch và code theo. Mọi thay đổi có lịch sử nên phạm vi và chi phí luôn nhìn thấy được.' },
      { q: 'Chỉ một người thì có kịp tiến độ không?', a: 'AI chạy nhiều phiên song song cho phần viết code, kiểm thử và dựng; tôi dành thời gian cho việc duyệt và quyết định. Tôi chỉ nhận số việc mà tôi duyệt kỹ được, và chốt ngày giao trước khi bắt đầu.' },
      { q: 'Hợp đồng theo hình thức nào?', a: 'Gói Khởi động và Dự án trọn gói là hợp đồng trọn gói; Đồng hành liên tục tính theo tháng. Điều khoản được thống nhất bằng văn bản trước khi bắt đầu.' },
      { q: 'Làm video manga thì cần gửi gì?', a: 'Tranh tô màu, kịch bản có bản dịch và file giọng đọc. Nếu có bản tiếng Nhật đã đăng, gửi kèm để nhạc nền khớp từng cảnh. Bạn có thể làm thử khoảng 10 phút đầu trước.' },
      { q: 'Tài liệu tôi gửi được xử lý thế nào?', a: 'Chỉ dùng cho việc sản xuất và không công khai. Tôi chỉ đưa vào phần giới thiệu khi khách hàng đồng ý.' },
      { q: 'Đã có hệ thống cũ, tham gia giữa chừng được không?', a: 'Được. Bước đầu tiên AI đọc mã nguồn, viết tài liệu và bổ sung kiểm thử — trước khi thay đổi bất cứ thứ gì.' },
    ],
  },
  contact: {
    eyebrow: '01 / KẾ HOẠCH — BẮT ĐẦU TỪ ĐÂY',
    title: 'Kể cho tôi ý tưởng của bạn',
    lead: 'Điền vài dòng, bản nháp intent.md hình thành ngay bên cạnh. Đó là file đầu tiên của dự án.',
    f: {
      name: 'Tên của bạn',
      email: 'Email',
      company: 'Công ty',
      kind: 'Loại dự án',
      kinds: ['SaaS / ứng dụng web', 'API và tích hợp', 'Ứng dụng di động', 'Tính năng AI', 'Hệ thống cũ', 'Video manga', 'Khác'],
      problem: 'Vấn đề cần giải quyết',
      problemHint: 'Ví dụ: khách phải gọi điện để đặt lịch, lễ tân ghi tay nên hay trùng lịch.',
      users: 'Ai sẽ dùng?',
      usersHint: 'Ví dụ: khách hàng, lễ tân',
      success: 'Thành công khi…',
      successHint: 'Ví dụ: khách tự đặt lịch, không còn trùng lịch',
      timeline: 'Thời gian mong muốn',
      timelines: ['Dưới 1 tháng', '1–3 tháng', '3–6 tháng', 'Chưa rõ'],
      optional: 'tuỳ chọn',
      none: 'Chọn một mục',
      honeypot: 'Để trống ô này',
    },
    submit: 'Gửi',
    sending: 'Đang gửi…',
    sentMail: 'Ứng dụng email của bạn đã mở sẵn nội dung. Nhấn gửi là xong.',
    sentApi: 'Đã nhận. Tôi sẽ phản hồi qua email.',
    required: 'Lỗi: cần tên, email hợp lệ và mô tả vấn đề.',
    previewTitle: 'intent.md — bản nháp',
    previewNote: 'Sau khi nhận, tôi cùng bạn hoàn thiện file này trong lần trao đổi đầu tiên.',
    mailSubject: 'Liên hệ mới',
    privacy: 'Thông tin bạn nhập chỉ dùng để trả lời liên hệ này. Form được gửi qua dịch vụ chuyển tiếp FormSubmit. Muốn xoá dữ liệu, hãy email cho tôi.',
    intent: {
      heading: 'mục tiêu',
      untitled: 'Dự án mới',
      from: 'từ',
      problem: 'Vấn đề',
      users: 'Người dùng',
      success: 'Thành công khi',
      kind: 'loại',
      timeline: 'thời gian',
      next: 'Chờ bạn và tôi xác nhận mục tiêu',
      empty: '…',
    },
    direct: 'Hoặc liên hệ trực tiếp',
    hours: 'Thứ 2 – Thứ 6, 8:00 – 17:00 (GMT+7)',
  },
  footer: {
    tagline: 'Tốc độ của AI, trách nhiệm của con người.',
    company: 'Địa chỉ',
    address: 'Số 12, ngõ 239 Định Công, phường Định Công, Hà Nội, Việt Nam',
    contact: 'Liên hệ',
    rights: 'Bảo lưu mọi quyền.',
    process: 'Quy trình',
    chain: 'mục tiêu → đặc tả → kế hoạch → thay đổi → phát hành ↺',
  },
}

export default vi
