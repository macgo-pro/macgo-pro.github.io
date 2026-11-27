/**
 * MACGO PRO v2.5 — Central Data Configuration (Single Source of Truth)
 * Tập tin cấu hình trung tâm: Chỉnh sửa link Discord, link tải, bảng giá, vũ khí, phím tắt và FAQ tại đây.
 * Lưu ý: Gắn trực tiếp vào window.SITE_DATA (không dùng ES module export) để chạy mượt cả qua file:// và HTTP server.
 */
window.SITE_DATA = {
  brand: {
    name: "MACGO",
    version: "PRO v2.5",
    tagline: "Hệ thống ghìm tâm 4 pha & nhận diện AI tự động cho PUBG PC"
  },

  links: {
    discordInvite: "https://discord.gg/XK3RJMPD8j",
    downloadDrive: "https://www.mediafire.com/file/65kn4uegwp00slp/MacgoPro.rar/file",
    youtubeWatch: "https://www.youtube.com/watch?v=U-3y32RV4Eo",
    youtubeId: "U-3y32RV4Eo"
  },

  heroPresets: [
    {
      id: "beryl",
      name: "BERYL M762",
      category: "AR • 7.62mm",
      scope: "3x Scope",
      attachments: "Compensator • Vertical Grip",
      phases: [33.0, 41.5, 39.5, 39.5],
      mult: "1.00x"
    },
    {
      id: "m416",
      name: "M416",
      category: "AR • 5.56mm",
      scope: "4x Scope",
      attachments: "Compensator • Vertical • Tactical",
      phases: [24.5, 29.0, 28.5, 28.0],
      mult: "1.00x"
    },
    {
      id: "aug",
      name: "AUG",
      category: "AR • 5.56mm",
      scope: "3x Scope",
      attachments: "Compensator • Half Grip",
      phases: [26.0, 31.5, 30.5, 30.0],
      mult: "1.00x"
    },
    {
      id: "akm",
      name: "AKM",
      category: "AR • 7.62mm",
      scope: "Red Dot",
      attachments: "Compensator",
      phases: [31.0, 38.0, 37.0, 36.5],
      mult: "1.00x"
    }
  ],

  videoChapters: [
    {
      time: "00:01",
      seconds: 1,
      label: "Khởi chạy Admin & Nhập Key",
      desc: "Giải nén, chạy MacroPubgPro.exe với quyền Quản trị viên và kích hoạt License Key."
    },
    {
      time: "00:21",
      seconds: 21,
      label: "Phím tắt Macro, Tâm ảo, Overlay & Slot",
      desc: "Làm quen giao diện 4 pha, bật/tắt Tâm ảo (F1), thanh HUD nổi (F2) và kéo thả vị trí (F3)."
    },
    {
      time: "01:09",
      seconds: 69,
      label: "Cài đặt PUBG (Không viền, Sensitivity, ADS)",
      desc: "4 thiết lập bắt buộc trong PUBG để hiển thị Overlay và đồng bộ độ nhạy chuẩn 100%."
    },
    {
      time: "01:52",
      seconds: 112,
      label: "Test thực chiến Scope Red Dot → 6x",
      desc: "Trình diễn AI bấm Tab tự nhận diện súng/phụ kiện và sấy thực tế từ Red Dot đến Scope 6x."
    },
    {
      time: "02:55",
      seconds: 175,
      label: "Demo Loot nhanh 8 món trong 0.5s",
      desc: "Nhấn phím ~ (dấu ngã) gom thần tốc 8 món trang bị ngay khi mở balo/hòm xác."
    }
  ],

  pricingTagline: "LỰA CHỌN GÓI PHÙ HỢP VỚI NHU CẦU CỦA BẠN!",

  // Bảng giá 3 cột chính thức: GÓI MACGO, GÓI AIM-AI, GÓI COMBO (MACGO + AIM-AI)
  pricingPlans: [
    {
      id: "macgo",
      colClass: "plan-col-macgo",
      iconKey: "macgo",
      title: "GÓI MACGO",
      subtitle: "MACRO PUBG PC",
      ctaText: "Mua Gói MACGO",
      tiers: [
        { duration: "1 NGÀY", hours: "24 GIỜ", priceFormatted: "11,000 VNĐ" },
        { duration: "7 NGÀY", hours: "168 GIỜ", priceFormatted: "69,000 VNĐ" },
        { duration: "30 NGÀY", hours: "720 GIỜ", priceFormatted: "269,000 VNĐ" },
        { duration: "90 NGÀY", hours: "2,160 GIỜ", priceFormatted: "579,000 VNĐ" },
        { duration: "180 NGÀY", hours: "4,320 GIỜ", priceFormatted: "799,000 VNĐ" },
        { duration: "360 NGÀY", hours: "8,640 GIỜ", priceFormatted: "1,099,000 VNĐ" },
        { duration: "LIFETIME", hours: "~100 NĂM", priceFormatted: "1,799,000 VNĐ", isLifetime: true }
      ]
    },
    {
      id: "aim-ai",
      colClass: "plan-col-aim",
      iconKey: "aim",
      title: "GÓI AIM-AI",
      subtitle: "AIM ASSIST AI",
      ctaText: "Mua Gói AIM-AI",
      tiers: [
        { duration: "1 NGÀY", hours: "24 GIỜ", priceFormatted: "11,000 VNĐ" },
        { duration: "7 NGÀY", hours: "168 GIỜ", priceFormatted: "69,000 VNĐ" },
        { duration: "30 NGÀY", hours: "720 GIỜ", priceFormatted: "269,000 VNĐ" },
        { duration: "90 NGÀY", hours: "2,160 GIỜ", priceFormatted: "579,000 VNĐ" },
        { duration: "180 NGÀY", hours: "4,320 GIỜ", priceFormatted: "799,000 VNĐ" },
        { duration: "360 NGÀY", hours: "8,640 GIỜ", priceFormatted: "1,099,000 VNĐ" },
        { duration: "LIFETIME", hours: "~100 NĂM", priceFormatted: "1,799,000 VNĐ", isLifetime: true }
      ]
    },
    {
      id: "combo",
      colClass: "plan-col-combo",
      iconKey: "combo",
      title: "GÓI COMBO",
      subtitle: "MACGO + AIM-AI",
      ctaText: "Mua Gói COMBO",
      tiers: [
        { duration: "1 NGÀY", hours: "24 GIỜ", priceFormatted: "21,000 VNĐ" },
        { duration: "7 NGÀY", hours: "168 GIỜ", priceFormatted: "119,000 VNĐ" },
        { duration: "30 NGÀY", hours: "720 GIỜ", priceFormatted: "419,000 VNĐ" },
        { duration: "90 NGÀY", hours: "2,160 GIỜ", priceFormatted: "839,000 VNĐ" },
        { duration: "180 NGÀY", hours: "4,320 GIỜ", priceFormatted: "1,069,000 VNĐ" },
        { duration: "360 NGÀY", hours: "8,640 GIỜ", priceFormatted: "1,649,000 VNĐ" },
        { duration: "LIFETIME", hours: "~100 NĂM", priceFormatted: "2,649,000 VNĐ", isLifetime: true, badge: "BEST VALUE" }
      ]
    }
  ],

  // Bảng giá tương thích ngược (MACGO 7 gói chuẩn theo Bot Discord)
  pricing: [
    {
      id: "1day",
      name: "1 Ngày",
      price: 11000,
      priceFormatted: "11.000₫",
      perDay: "11.000₫ / ngày",
      badge: "Dùng thử",
      featured: true,
      tier: "trial",
      perks: [
        "Mở khóa 100% tính năng MACGO PRO v2.5",
        "AI nhận diện 40+ súng, Scope & phụ kiện",
        "Ghìm tâm 4 pha + Tâm ảo + Loot nhanh 0.5s",
        "Nhận Key tự động 24/7 sau 1–3 phút"
      ]
    },
    {
      id: "7days",
      name: "7 Ngày",
      price: 69000,
      priceFormatted: "69.000₫",
      perDay: "~9.800₫ / ngày",
      badge: "Ngắn hạn",
      featured: false,
      tier: "compact",
      perks: [
        "Đầy đủ 100% tính năng MACGO PRO v2.5",
        "Cập nhật miễn phí trong suốt thời hạn",
        "Giao Key tự động 24/7 qua Discord Bot"
      ]
    },
    {
      id: "30days",
      name: "30 Ngày",
      price: 269000,
      priceFormatted: "269.000₫",
      perDay: "~8.900₫ / ngày",
      badge: "Phổ biến nhất ⭐",
      featured: true,
      tier: "popular",
      perks: [
        "Lựa chọn được nhiều game thủ mua nhất",
        "Mở khóa 100% tính năng & 40+ vũ khí PUBG",
        "Tự động cập nhật phiên bản mới miễn phí",
        "Hỗ trợ cài đặt & tinh chỉnh 1-1 trên Discord"
      ]
    },
    {
      id: "90days",
      name: "90 Ngày",
      price: 579000,
      priceFormatted: "579.000₫",
      perDay: "~6.400₫ / ngày • Tiết kiệm 28%",
      badge: "Tiết kiệm 28%",
      featured: true,
      tier: "value",
      perks: [
        "Tối ưu chi phí cho cả mùa Rank dài",
        "Mở khóa 100% tính năng & 40+ vũ khí PUBG",
        "Tự động cập nhật phiên bản mới miễn phí",
        "Ưu tiên hỗ trợ kỹ thuật & đổi máy (HWID)"
      ]
    },
    {
      id: "180days",
      name: "180 Ngày",
      price: 799000,
      priceFormatted: "799.000₫",
      perDay: "~4.400₫ / ngày • Tiết kiệm 50%",
      badge: "Tiết kiệm 50%",
      featured: false,
      tier: "compact",
      perks: [
        "Đầy đủ 100% tính năng MACGO PRO v2.5",
        "Tiết kiệm 50% chi phí so với mua lẻ",
        "Hỗ trợ kỹ thuật & cập nhật miễn phí"
      ]
    },
    {
      id: "360days",
      name: "360 Ngày",
      price: 1099000,
      priceFormatted: "1.099.000₫",
      perDay: "~3.050₫ / ngày • Tiết kiệm 66%",
      badge: "Tiết kiệm 66%",
      featured: false,
      tier: "compact",
      perks: [
        "Đầy đủ 100% tính năng suốt 1 năm",
        "Chỉ ~3.050₫/ngày • Tiết kiệm tới 66%",
        "Hỗ trợ kỹ thuật VIP & cập nhật miễn phí"
      ]
    },
    {
      id: "lifetime",
      name: "Lifetime (Vĩnh viễn)",
      price: 1799000,
      priceFormatted: "1.799.000₫",
      perDay: "Thanh toán 1 lần • Dùng mãi mãi",
      badge: "Best Value 👑",
      featured: true,
      tier: "lifetime",
      perks: [
        "Thanh toán 1 lần duy nhất — Sử dụng vĩnh viễn",
        "Bao gồm mọi bản cập nhật lớn trong tương lai",
        "Mở khóa toàn bộ tính năng VIP & AI nhận diện",
        "Hỗ trợ Reset HWID khi nâng cấp máy / cài Win"
      ]
    }
  ],

  weapons: {
    AR: [
      "M416", "BERYL", "AUG", "AKM", "ACE32",
      "SCAR-L", "QBZ", "G36C", "K2", "FAMAS",
      "M16A4", "PDR", "MK47 MUTANT", "MK14", "GROZA"
    ],
    SMG: [
      "UZI", "VECTOR", "MP9", "JS9", "P90",
      "MP5K", "BIZON", "UMP", "TOMMY GUN"
    ],
    LMG: [
      "M249", "DP-28", "MG3"
    ],
    DMR: [
      "MINI14", "MK12", "QBU", "SKS", "SLR",
      "DRAGUNOV", "VSS"
    ],
    SR: [
      "KAR98K", "M24", "AWM", "WIN94", "LYNX AMR", "MOSIN"
    ]
  },

  scopes: [
    "Red Dot",
    "Holographic",
    "Canted Sight",
    "2x Scope",
    "3x Scope",
    "4x Scope",
    "6x Scope"
  ],

  attachments: [
    "Compensator",
    "Flash Hider",
    "Suppressor",
    "Muzzle Brake",
    "Vertical Grip",
    "Angled Grip",
    "Half Grip",
    "Thumb Grip",
    "Light Grip",
    "Tactical Stock",
    "Heavy Stock"
  ],

  hotkeys: [
    {
      group: "Thực chiến",
      groupLabel: "Thực chiến",
      key: "Tab",
      action: "Tự động nhận diện AI",
      tip: "Mở balo để tự nhận diện súng Slot 1 & 2, Scope và toàn bộ phụ kiện"
    },
    {
      group: "Thực chiến",
      groupLabel: "Thực chiến",
      key: "Caps Lock",
      action: "Bật / Tắt Macro",
      tip: "Có âm báo & đèn trạng thái ON/OFF trên thanh HUD"
    },
    {
      group: "Thực chiến",
      groupLabel: "Thực chiến",
      key: "F4",
      action: "Đổi Slot 1 ↔ Slot 2",
      tip: "Chuyển nhanh nhận diện giữa súng Khay 1 và Khay 2 (hoặc bấm 1 / 2)"
    },
    {
      group: "Thực chiến",
      groupLabel: "Thực chiến",
      key: "~ (Dấu ngã)",
      action: "Loot nhanh 8 món",
      tip: "Gom nhanh 8 vật phẩm chỉ trong 0.5 giây khi mở balo/xác địch"
    },
    {
      group: "Hiển thị",
      groupLabel: "Hiển thị",
      key: "F1",
      action: "Bật / Tắt Tâm ảo",
      tip: "Ẩn hoặc hiện tâm ngắm Crosshair sắc nét giữa màn hình"
    },
    {
      group: "Hiển thị",
      groupLabel: "Hiển thị",
      key: "F2",
      action: "Ẩn / Hiện Thanh HUD",
      tip: "Bật/tắt bảng Overlay thông số nổi ngay trong game"
    },
    {
      group: "Hiển thị",
      groupLabel: "Hiển thị",
      key: "F3",
      action: "Di chuyển vị trí HUD",
      tip: "Mở khóa kéo thả thanh Overlay sang vị trí thuận mắt nhất"
    },
    {
      group: "Hiển thị",
      groupLabel: "Hiển thị",
      key: "F5",
      action: "Ẩn / Hiện Menu MACGO",
      tip: "Mở nhanh bảng cấu hình chi tiết mà không cần tìm trên Taskbar"
    },
    {
      group: "Tinh chỉnh",
      groupLabel: "Tinh chỉnh",
      key: "↑ / ↓",
      action: "Tăng / Giảm độ ghìm dọc",
      tip: "Tinh chỉnh lực kéo tâm trực tiếp ngay khi đang test sấy"
    },
    {
      group: "Tinh chỉnh",
      groupLabel: "Tinh chỉnh",
      key: "Ctrl + ↑ / ↓",
      action: "Chỉnh riêng từng Scope",
      tip: "Tinh chỉnh độ ghìm độc lập cho từng ống ngắm (2x, 3x, 4x, 6x)"
    },
    {
      group: "Tinh chỉnh",
      groupLabel: "Tinh chỉnh",
      key: "← / →",
      action: "Tinh chỉnh lệch ngang",
      tip: "Cân bằng độ lệch ngang nếu cần"
    },
    {
      group: "Tinh chỉnh",
      groupLabel: "Tinh chỉnh",
      key: "[ / ]",
      action: "Đổi Scope thủ công",
      tip: "Chuyển nhanh cấu hình Scope tiến/lùi khi không mở balo"
    },
    {
      group: "Tinh chỉnh",
      groupLabel: "Tinh chỉnh",
      key: "+ / -",
      action: "Tăng / Giảm hệ số tổng",
      tip: "Điều chỉnh nhanh hệ số nhân ghìm tổng thể (Base Multiplier)"
    },
    {
      group: "Hệ thống",
      groupLabel: "Hệ thống",
      key: "Insert",
      action: "Lưu cấu hình (SAVE)",
      tip: "Lưu lại toàn bộ thông số vừa chỉnh vào bộ nhớ"
    },
    {
      group: "Hệ thống",
      groupLabel: "Hệ thống",
      key: "End",
      action: "Dừng khẩn cấp",
      tip: "Ngắt toàn bộ tiến trình macro ngay lập tức"
    }
  ],

  faqs: [
    {
      q: "Thanh toán xong bao lâu thì nhận được Key?",
      a: "Hệ thống Auto Buy hoạt động 24/7, tự động đối soát VietQR và gửi Key sau 1–3 phút vào cả Ticket lẫn tin nhắn riêng (DM) trên Discord. Nếu quá 10 phút chưa thấy, hãy liên hệ Admin tại kênh #support."
    },
    {
      q: "1 Key có thể dùng trên bao nhiêu máy tính?",
      a: "Mỗi Key sẽ tự động gắn (bind HWID) với máy tính đầu tiên kích hoạt và không dùng chung trên nhiều máy cùng lúc. Nếu bạn nâng cấp linh kiện hoặc cài lại Windows, hãy liên hệ Admin trên Discord để được hỗ trợ reset HWID."
    },
    {
      q: "MACGO có kén chuột hay màn hình không?",
      a: "Không. MACGO hoạt động tốt với mọi loại chuột (không phụ thuộc chuột Logitech/Razer) và hỗ trợ tự động scale cho mọi màn hình: 720p, 1080p, 2K, 4K, Ultrawide 21:9, 16:10 và Stretched."
    },
    {
      q: "Tôi muốn dùng thử trước khi mua gói tháng được không?",
      a: "Hoàn toàn được! Bạn có thể chọn gói 1 Ngày chỉ 11.000₫ trên Discord để trải nghiệm trọn vẹn 100% tính năng trước khi nâng cấp lên gói 30 ngày, 90 ngày hoặc Lifetime."
    },
    {
      q: "Tôi lỡ chuyển khoản sai nội dung mã đơn hàng thì sao?",
      a: "Đừng lo lắng, hãy chụp ảnh biên lai giao dịch chuyển khoản và gửi ngay cho Admin trong Ticket hoặc kênh #support trên Discord để được xác minh và cấp Key thủ công."
    },
    {
      q: "Tại sao bắt buộc phải chạy bằng \"Run as administrator\"?",
      a: "Quyền Quản trị viên (Administrator) giúp MACGO lắng nghe phím tắt ổn định khi bạn đang trong cửa sổ PUBG và hiển thị chính xác thanh HUD Overlay + Tâm ảo mà không bị Windows chặn quyền."
    },
    {
      q: "Tôi muốn hủy đơn hàng đang mở trên Discord thì làm thế nào?",
      a: "Trước khi chuyển khoản, bạn chỉ cần bấm nút \"Hủy thanh toán\" ngay trong Ticket trên Discord, hoặc đơn hàng sẽ tự động hủy sau 30 phút nếu hệ thống không ghi nhận giao dịch."
    }
  ]
};
