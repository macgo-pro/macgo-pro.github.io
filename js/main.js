/**
 * MACGO PRO v2.5 — Main Interactive Controller
 * Pure Vanilla ES6 JavaScript (No external dependencies, works on both http:// and file://)
 */
(function () {
  "use strict";

  /* --------------------------------------------------------------------------
     1. Fallback Data & Normalizer (in case window.SITE_DATA is customized)
     -------------------------------------------------------------------------- */
  const DEFAULT_DATA = {
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
      AR: ["M416", "BERYL", "AUG", "AKM", "ACE32", "SCAR-L", "QBZ", "G36C", "K2", "FAMAS", "M16A4", "PDR", "MK47 MUTANT", "MK14", "GROZA"],
      SMG: ["UZI", "VECTOR", "MP9", "JS9", "P90", "MP5K", "BIZON", "UMP", "TOMMY GUN"],
      LMG: ["M249", "DP-28", "MG3"],
      DMR: ["MINI14", "MK12", "QBU", "SKS", "SLR", "DRAGUNOV", "VSS"],
      SR: ["KAR98K", "M24", "AWM", "WIN94", "LYNX AMR", "MOSIN"]
    },
    scopes: ["Red Dot", "Holographic", "Canted Sight", "2x Scope", "3x Scope", "4x Scope", "6x Scope"],
    attachments: [
      "Compensator", "Flash Hider", "Suppressor", "Muzzle Brake",
      "Vertical Grip", "Angled Grip", "Half Grip", "Thumb Grip", "Light Grip",
      "Tactical Stock", "Heavy Stock"
    ],
    hotkeys: [
      { group: "Thực chiến", key: "Tab", action: "Tự động nhận diện AI", tip: "Mở balo để tự nhận diện súng Slot 1 & 2, Scope và toàn bộ phụ kiện" },
      { group: "Thực chiến", key: "Caps Lock", action: "Bật / Tắt Macro", tip: "Có âm báo & đèn trạng thái ON/OFF trên thanh HUD" },
      { group: "Thực chiến", key: "F4", action: "Đổi Slot 1 ↔ Slot 2", tip: "Chuyển nhanh nhận diện giữa súng Khay 1 và Khay 2 (hoặc bấm 1 / 2)" },
      { group: "Thực chiến", key: "~ (Dấu ngã)", action: "Loot nhanh 8 món", tip: "Gom nhanh 8 vật phẩm chỉ trong 0.5 giây khi mở balo/xác địch" },
      { group: "Hiển thị", key: "F1", action: "Bật / Tắt Tâm ảo", tip: "Ẩn hoặc hiện tâm ngắm Crosshair sắc nét giữa màn hình" },
      { group: "Hiển thị", key: "F2", action: "Ẩn / Hiện Thanh HUD", tip: "Bật/tắt bảng Overlay thông số nổi ngay trong game" },
      { group: "Hiển thị", key: "F3", action: "Di chuyển vị trí HUD", tip: "Mở khóa kéo thả thanh Overlay sang vị trí thuận mắt nhất" },
      { group: "Hiển thị", key: "F5", action: "Ẩn / Hiện Menu MACGO", tip: "Mở nhanh bảng cấu hình chi tiết mà không cần tìm trên Taskbar" },
      { group: "Tinh chỉnh", key: "↑ / ↓", action: "Tăng / Giảm độ ghìm dọc", tip: "Tinh chỉnh lực kéo tâm trực tiếp ngay khi đang test sấy" },
      { group: "Tinh chỉnh", key: "Ctrl + ↑ / ↓", action: "Chỉnh riêng từng Scope", tip: "Tinh chỉnh độ ghìm độc lập cho từng ống ngắm (2x, 3x, 4x, 6x)" },
      { group: "Tinh chỉnh", key: "← / →", action: "Tinh chỉnh lệch ngang", tip: "Cân bằng độ lệch ngang nếu cần" },
      { group: "Tinh chỉnh", key: "[ / ]", action: "Đổi Scope thủ công", tip: "Chuyển nhanh cấu hình Scope tiến/lùi khi không mở balo" },
      { group: "Tinh chỉnh", key: "+ / -", action: "Tăng / Giảm hệ số tổng", tip: "Điều chỉnh nhanh hệ số nhân ghìm tổng thể (Base Multiplier)" },
      { group: "Hệ thống", key: "Insert", action: "Lưu cấu hình (SAVE)", tip: "Lưu lại toàn bộ thông số vừa chỉnh vào bộ nhớ" },
      { group: "Hệ thống", key: "End", action: "Dừng khẩn cấp", tip: "Ngắt toàn bộ tiến trình macro ngay lập tức" }
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

  const rawData = window.SITE_DATA || {};
  const SITE = {
    brand: Object.assign({}, DEFAULT_DATA.brand, rawData.brand || {}),
    links: Object.assign({}, DEFAULT_DATA.links, rawData.links || {}),
    heroPresets: Array.isArray(rawData.heroPresets) && rawData.heroPresets.length
      ? rawData.heroPresets
      : DEFAULT_DATA.heroPresets,
    videoChapters: Array.isArray(rawData.videoChapters) && rawData.videoChapters.length
      ? rawData.videoChapters
      : DEFAULT_DATA.videoChapters,
    pricing: Array.isArray(rawData.pricing)
      ? rawData.pricing
      : (rawData.pricing && Array.isArray(rawData.pricing.macgo) ? rawData.pricing.macgo : DEFAULT_DATA.pricing),
    weapons: rawData.weapons || DEFAULT_DATA.weapons,
    scopes: Array.isArray(rawData.scopes) ? rawData.scopes : DEFAULT_DATA.scopes,
    attachments: Array.isArray(rawData.attachments) ? rawData.attachments : DEFAULT_DATA.attachments,
    hotkeys: Array.isArray(rawData.hotkeys) && rawData.hotkeys.length ? rawData.hotkeys : DEFAULT_DATA.hotkeys,
    faqs: Array.isArray(rawData.faqs) && rawData.faqs.length ? rawData.faqs : DEFAULT_DATA.faqs
  };

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* --------------------------------------------------------------------------
     2. Official Links Synchronization ([data-link="discord" | "drive" | "youtube"])
     -------------------------------------------------------------------------- */
  function syncOfficialLinks() {
    const discordUrl = SITE.links.discordInvite || DEFAULT_DATA.links.discordInvite;
    const driveUrl = SITE.links.downloadDrive || DEFAULT_DATA.links.downloadDrive;
    const ytUrl = SITE.links.youtubeWatch || DEFAULT_DATA.links.youtubeWatch;

    document.querySelectorAll('[data-link="discord"]').forEach(function (el) {
      el.setAttribute("href", discordUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll('[data-link="drive"]').forEach(function (el) {
      el.setAttribute("href", driveUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });

    document.querySelectorAll('[data-link="youtube"]').forEach(function (el) {
      el.setAttribute("href", ytUrl);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    });
  }

  /* --------------------------------------------------------------------------
     3. Sticky Header, Mobile Drawer & Active Navigation Highlight
     -------------------------------------------------------------------------- */
  function initNavigation() {
    const header = document.getElementById("site-header");
    const navToggle = document.getElementById("nav-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const allNavLinks = document.querySelectorAll(".nav-link");

    function updateHeaderScroll() {
      if (!header) return;
      if (window.scrollY > 16) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    function closeMobileDrawer() {
      if (!mobileDrawer || !navToggle) return;
      mobileDrawer.classList.remove("is-open");
      mobileDrawer.setAttribute("aria-hidden", "true");
      navToggle.setAttribute("aria-expanded", "false");
    }

    function toggleMobileDrawer() {
      if (!mobileDrawer || !navToggle) return;
      const isOpen = mobileDrawer.classList.toggle("is-open");
      mobileDrawer.setAttribute("aria-hidden", isOpen ? "false" : "true");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }

    if (navToggle) {
      navToggle.addEventListener("click", toggleMobileDrawer);
    }

    if (mobileDrawer) {
      mobileDrawer.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMobileDrawer);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMobileDrawer();
      }
    });

    // Active section highlight on scroll
    const sectionIds = ["features", "video", "pricing", "guide", "faq"];
    const sections = sectionIds
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);

    function updateActiveNavLink() {
      const scrollPos = window.scrollY + 140;
      let currentId = "";

      sections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });

      allNavLinks.forEach(function (link) {
        const href = link.getAttribute("href") || "";
        if (href === "#" + currentId) {
          link.classList.add("is-active");
        } else {
          link.classList.remove("is-active");
        }
      });
    }

    window.addEventListener("scroll", function () {
      updateHeaderScroll();
      updateActiveNavLink();
    }, { passive: true });

    updateHeaderScroll();
    updateActiveNavLink();
  }

  /* --------------------------------------------------------------------------
     4. Hero Interactive MACGO PRO v2.5 Command Center Mockup
     -------------------------------------------------------------------------- */
  function initHeroMockup() {
    const selector = document.getElementById("hero-preset-selector");
    if (!selector) return;

    const presets = SITE.heroPresets;
    const weaponNameEl = document.getElementById("mockup-weapon-name");
    const weaponCatEl = document.getElementById("mockup-weapon-cat");
    const scopeEl = document.getElementById("mockup-scope");
    const attEl = document.getElementById("mockup-attachments");
    const multEl = document.getElementById("mockup-mult");
    const hudTextEl = document.getElementById("mockup-hud-text");

    function applyPreset(index) {
      const preset = presets[index] || presets[0];
      if (!preset) return;

      selector.querySelectorAll(".preset-btn").forEach(function (btn, idx) {
        const isActive = idx === index;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      if (weaponNameEl) weaponNameEl.textContent = preset.name;
      if (weaponCatEl) weaponCatEl.textContent = preset.category || "AR";
      if (scopeEl) scopeEl.textContent = preset.scope;
      if (attEl) attEl.textContent = preset.attachments;
      if (multEl) multEl.textContent = preset.mult || "1.00x";

      const phases = Array.isArray(preset.phases) ? preset.phases : [30, 35, 34, 34];
      const maxPhaseVal = 46;

      for (let i = 0; i < 4; i++) {
        const val = Number(phases[i] || 30);
        const valEl = document.getElementById("phase-val-" + (i + 1));
        const barEl = document.getElementById("phase-bar-" + (i + 1));
        if (valEl) valEl.textContent = val.toFixed(1);
        if (barEl) {
          const pct = Math.min(100, Math.max(25, Math.round((val / maxPhaseVal) * 100)));
          barEl.style.width = pct + "%";
        }
      }

      if (hudTextEl) {
        hudTextEl.textContent =
          "ON | " +
          preset.name +
          " | " +
          preset.scope +
          " | " +
          preset.attachments +
          " | Mult: " +
          (preset.mult || "1.00x");
      }
    }

    // Populate preset buttons from SITE.heroPresets
    selector.innerHTML = presets
      .map(function (p, idx) {
        const activeClass = idx === 0 ? " is-active" : "";
        const selected = idx === 0 ? "true" : "false";
        return (
          '<button type="button" class="preset-btn' +
          activeClass +
          '" data-preset-index="' +
          idx +
          '" role="tab" aria-selected="' +
          selected +
          '">' +
          escapeHtml(p.name) +
          "</button>"
        );
      })
      .join("");

    selector.addEventListener("click", function (e) {
      const btn = e.target.closest(".preset-btn");
      if (!btn) return;
      const idx = parseInt(btn.getAttribute("data-preset-index"), 10);
      if (!isNaN(idx)) {
        applyPreset(idx);
      }
    });

    applyPreset(0);
  }

  /* --------------------------------------------------------------------------
     5. 40+ Weapons Category Filter & Accessories Hydration
     -------------------------------------------------------------------------- */
  function initWeaponsSection() {
    const filterContainer = document.getElementById("weapon-filters");
    const gridContainer = document.getElementById("weapons-grid");
    const scopesContainer = document.getElementById("scopes-list");
    const attContainer = document.getElementById("attachments-list");

    if (!gridContainer) return;

    const weaponsMap = SITE.weapons || {};
    const categories = ["AR", "SMG", "LMG", "DMR", "SR"];
    const allWeapons = [];

    categories.forEach(function (cat) {
      const list = Array.isArray(weaponsMap[cat]) ? weaponsMap[cat] : [];
      list.forEach(function (weaponName) {
        allWeapons.push({ category: cat, name: weaponName });
      });
    });

    function renderWeapons(activeCat) {
      const filtered = activeCat === "ALL"
        ? allWeapons
        : allWeapons.filter(function (w) { return w.category === activeCat; });

      gridContainer.innerHTML = filtered
        .map(function (item) {
          return (
            '<div class="weapon-chip" data-cat="' +
            escapeHtml(item.category) +
            '">' +
            '<span class="weapon-cat-tag">' +
            escapeHtml(item.category) +
            "</span>" +
            '<span class="weapon-name">' +
            escapeHtml(item.name) +
            "</span>" +
            "</div>"
          );
        })
        .join("");
    }

    if (filterContainer) {
      filterContainer.addEventListener("click", function (e) {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        const cat = btn.getAttribute("data-category") || "ALL";

        filterContainer.querySelectorAll(".filter-btn").forEach(function (b) {
          const isMatch = b === btn;
          b.classList.toggle("is-active", isMatch);
          b.setAttribute("aria-selected", isMatch ? "true" : "false");
        });

        renderWeapons(cat);
      });
    }

    if (scopesContainer && SITE.scopes.length) {
      scopesContainer.innerHTML = SITE.scopes
        .map(function (s) {
          return '<span class="acc-badge badge-cyan">' + escapeHtml(s) + "</span>";
        })
        .join("");
    }

    if (attContainer && SITE.attachments.length) {
      attContainer.innerHTML = SITE.attachments
        .map(function (a) {
          return '<span class="acc-badge">' + escapeHtml(a) + "</span>";
        })
        .join("");
    }

    renderWeapons("ALL");
  }

  /* --------------------------------------------------------------------------
     6. YouTube Lite Facade & 5 Interactive Chapters
     -------------------------------------------------------------------------- */
  function initVideoSection() {
    const videoFrame = document.getElementById("video-frame");
    const chapterContainer = document.getElementById("video-chapters");
    const directLink = document.getElementById("yt-direct-link");
    const directLinkText = document.getElementById("yt-direct-link-text");

    if (!videoFrame) return;

    const ytId = SITE.links.youtubeId || "U-3y32RV4Eo";
    const ytWatchBase = "https://www.youtube.com/watch?v=" + encodeURIComponent(ytId);
    const isFileProtocol = window.location.protocol === "file:";

    function loadYouTubeAt(seconds, timeLabel) {
      const startSec = Math.max(0, parseInt(seconds, 10) || 0);
      const watchWithTime = ytWatchBase + (startSec > 0 ? "&t=" + startSec + "s" : "");

      if (directLink) {
        directLink.setAttribute("href", watchWithTime);
      }
      if (directLinkText) {
        directLinkText.textContent = timeLabel
          ? "Xem trên YouTube tại mốc " + timeLabel
          : "Mở trực tiếp trên YouTube";
      }

      const embedUrl =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(ytId) +
        "?autoplay=1&rel=0&modestbranding=1&start=" +
        startSec;

      // On file:// protocol, some browsers block YouTube embed with Error 153 due to missing Referer header.
      // We render the iframe AND a sleek direct YouTube fallback pill inside the frame if opened via file://.
      const fileFallbackBanner = isFileProtocol
        ? '<div style="position:absolute;bottom:10px;left:12px;right:12px;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;background:rgba(9,13,20,0.92);border:1px solid #FFB800;border-radius:8px;font-size:0.82rem;color:#F8FAFC;">' +
          '<span>💡 Nếu trình duyệt chặn nhúng YouTube khi mở file offline:</span>' +
          '<a href="' +
          escapeHtml(watchWithTime) +
          '" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm" style="padding:4px 10px;font-size:0.78rem;">Xem trên YouTube (' +
          escapeHtml(timeLabel || "00:01") +
          ") ↗</a>" +
          "</div>"
        : "";

      videoFrame.innerHTML =
        '<iframe src="' +
        escapeHtml(embedUrl) +
        '" title="Hướng dẫn sử dụng MACGO PRO v2.5" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
        'referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>' +
        fileFallbackBanner;
    }

    const facade = document.getElementById("yt-facade");
    if (facade) {
      facade.addEventListener("click", function () {
        loadYouTubeAt(1, "00:01");
      });
      facade.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          loadYouTubeAt(1, "00:01");
        }
      });
    }

    if (chapterContainer && SITE.videoChapters.length) {
      const headerHtml =
        '<div class="chapter-list-header">' +
        '<span class="badge badge-cyan">5 MỐC THỜI GIAN</span>' +
        "<h3>Nhảy Nhanh Tới Phần Bạn Cần Xem</h3>" +
        "</div>";

      const buttonsHtml = SITE.videoChapters
        .map(function (ch, idx) {
          const activeClass = idx === 0 ? " is-active" : "";
          return (
            '<button type="button" class="chapter-btn' +
            activeClass +
            '" data-seconds="' +
            escapeHtml(ch.seconds) +
            '" data-time="' +
            escapeHtml(ch.time) +
            '">' +
            '<span class="chapter-time">' +
            escapeHtml(ch.time) +
            "</span>" +
            '<span class="chapter-info">' +
            '<strong class="chapter-label">' +
            escapeHtml(ch.label) +
            "</strong>" +
            (ch.desc ? '<small class="chapter-desc" style="display:block;color:var(--text-muted);font-size:0.78rem;margin-top:2px;">' + escapeHtml(ch.desc) + "</small>" : "") +
            "</span>" +
            "</button>"
          );
        })
        .join("");

      chapterContainer.innerHTML = headerHtml + buttonsHtml;

      chapterContainer.addEventListener("click", function (e) {
        const btn = e.target.closest(".chapter-btn");
        if (!btn) return;

        chapterContainer.querySelectorAll(".chapter-btn").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });

        const sec = parseInt(btn.getAttribute("data-seconds"), 10) || 1;
        const timeStr = btn.getAttribute("data-time") || "00:01";
        loadYouTubeAt(sec, timeStr);
      });
    }
  }

  /* --------------------------------------------------------------------------
     7. Pricing Section Hydration — MACGO ONLY (4 Featured + 3 Compact)
     -------------------------------------------------------------------------- */
  function initPricingSection() {
    const featuredGrid = document.getElementById("pricing-featured-grid");
    const compactGrid = document.getElementById("pricing-compact-grid");
    if (!featuredGrid || !compactGrid) return;

    const plans = Array.isArray(SITE.pricing) ? SITE.pricing : DEFAULT_DATA.pricing;
    const discordUrl = SITE.links.discordInvite || DEFAULT_DATA.links.discordInvite;

    const featuredPlans = plans.filter(function (p) { return Boolean(p.featured); });
    const compactPlans = plans.filter(function (p) { return !p.featured; });

    if (featuredPlans.length) {
      featuredGrid.innerHTML = featuredPlans
        .map(function (plan) {
          let cardModifier = "";
          let badgeModifier = "";
          if (plan.tier === "popular" || plan.id === "30days") {
            cardModifier = " is-popular";
            badgeModifier = " badge-gold";
          } else if (plan.tier === "lifetime" || plan.id === "lifetime") {
            cardModifier = " is-lifetime";
            badgeModifier = " badge-cyan";
          } else if (plan.tier === "value" || plan.id === "90days") {
            badgeModifier = " badge-emerald";
          }

          const perks = Array.isArray(plan.perks) ? plan.perks : [];
          // Strip leading checkmark if present since CSS .pricing-features li::before adds '✓'
          const perksHtml = perks
            .map(function (perk) {
              const cleanPerk = String(perk).replace(/^[✓✔]\s*/, "");
              return "<li>" + escapeHtml(cleanPerk) + "</li>";
            })
            .join("");

          return (
            '<article class="pricing-card' +
            cardModifier +
            '" data-plan-id="' +
            escapeHtml(plan.id) +
            '">' +
            '<div class="pricing-card-header">' +
            '<span class="pricing-badge badge' +
            badgeModifier +
            '">' +
            escapeHtml(plan.badge || "MACGO PRO") +
            "</span>" +
            '<h3 class="pricing-name">' +
            escapeHtml(plan.name) +
            "</h3>" +
            '<div class="pricing-price">' +
            escapeHtml(plan.priceFormatted) +
            "</div>" +
            '<p class="pricing-per-day">' +
            escapeHtml(plan.perDay) +
            "</p>" +
            "</div>" +
            '<ul class="pricing-features">' +
            perksHtml +
            "</ul>" +
            '<a href="' +
            escapeHtml(discordUrl) +
            '" data-link="discord" target="_blank" rel="noopener noreferrer" class="btn btn-discord btn-block">' +
            "<span>Mua Gói Này Trên Discord</span>" +
            "</a>" +
            "</article>"
          );
        })
        .join("");
    }

    if (compactPlans.length) {
      compactGrid.innerHTML = compactPlans
        .map(function (plan) {
          let badgeClass = "badge";
          if (plan.id === "180days") badgeClass = "badge badge-emerald";
          if (plan.id === "360days") badgeClass = "badge badge-gold";

          return (
            '<div class="pricing-compact-card" data-plan-id="' +
            escapeHtml(plan.id) +
            '">' +
            '<div class="compact-info">' +
            '<div class="compact-top" style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">' +
            '<strong class="compact-name" style="font-family:var(--font-display);font-size:1.1rem;color:var(--text-primary);">' +
            escapeHtml(plan.name) +
            "</strong>" +
            '<span class="' +
            badgeClass +
            '">' +
            escapeHtml(plan.badge || "Linh hoạt") +
            "</span>" +
            "</div>" +
            '<div class="compact-price" style="font-family:var(--font-display);font-size:1.45rem;font-weight:700;color:var(--gold-hi);">' +
            escapeHtml(plan.priceFormatted) +
            "</div>" +
            '<div class="compact-sub" style="font-family:var(--font-mono);font-size:0.78rem;color:var(--text-muted);margin-top:2px;">' +
            escapeHtml(plan.perDay) +
            "</div>" +
            "</div>" +
            '<a href="' +
            escapeHtml(discordUrl) +
            '" data-link="discord" target="_blank" rel="noopener noreferrer" class="btn btn-discord btn-sm">' +
            "<span>Mua ngay</span>" +
            "</a>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  /* --------------------------------------------------------------------------
     8. Interactive 4-Tab Software User Guide, PUBG 4/4 Checklist & Hotkey Filter
     -------------------------------------------------------------------------- */
  function initGuideHub() {
    // 8A. 4-Tab Switcher
    const tabsContainer = document.getElementById("guide-tabs");
    const panels = document.querySelectorAll(".guide-panel");

    if (tabsContainer) {
      tabsContainer.addEventListener("click", function (e) {
        const btn = e.target.closest(".guide-tab-btn");
        if (!btn) return;
        const targetId = btn.getAttribute("data-tab");
        if (!targetId) return;

        tabsContainer.querySelectorAll(".guide-tab-btn").forEach(function (b) {
          const isMatch = b === btn;
          b.classList.toggle("is-active", isMatch);
          b.setAttribute("aria-selected", isMatch ? "true" : "false");
        });

        panels.forEach(function (panel) {
          panel.classList.toggle("is-active", panel.id === targetId);
        });
      });
    }

    // 8B. Tab 2: Interactive 4/4 PUBG Mandatory Checklist (persisted in localStorage)
    const STORAGE_KEY = "macgo_pubg_checklist_v25";
    const checkInputs = document.querySelectorAll(".pubg-check-input");
    const checkCountEl = document.getElementById("pubg-check-count");
    const checkStatusEl = document.getElementById("pubg-checklist-status");

    function loadSavedChecklist() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
      } catch (_err) {
        return {};
      }
    }

    function saveChecklist(state) {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (_err) {
        // Ignore storage errors in private/restricted file:// mode
      }
    }

    const checklistState = loadSavedChecklist();

    function updateChecklistUI() {
      let checkedCount = 0;
      const total = checkInputs.length || 4;

      checkInputs.forEach(function (input) {
        const id = input.getAttribute("data-check-id");
        const isChecked = Boolean(input.checked);
        if (isChecked) checkedCount++;

        const card = input.closest(".checklist-item");
        if (card) {
          card.classList.toggle("is-checked", isChecked);
        }
        if (id) {
          checklistState[id] = isChecked;
        }
      });

      if (checkCountEl) {
        checkCountEl.textContent = checkedCount + "/" + total;
      }

      if (checkStatusEl) {
        if (checkedCount === total) {
          checkStatusEl.classList.add("is-complete");
          checkStatusEl.textContent =
            "✅ Hoàn tất cài đặt PUBG (" +
            checkedCount +
            "/" +
            total +
            ") — Bạn đã sẵn sàng vào trận!";
        } else {
          checkStatusEl.classList.remove("is-complete");
          checkStatusEl.textContent =
            "⏳ Đã hoàn tất " +
            checkedCount +
            "/" +
            total +
            " bước — Hãy tick đủ 4 thiết lập PUBG bắt buộc bên dưới trước khi vào trận.";
        }
      }

      saveChecklist(checklistState);
    }

    checkInputs.forEach(function (input) {
      const id = input.getAttribute("data-check-id");
      if (id && checklistState[id]) {
        input.checked = true;
      }
      input.addEventListener("change", updateChecklistUI);
    });

    // Allow clicking anywhere on .checklist-item card (outside image zoom or label) to toggle checkbox
    document.querySelectorAll(".checklist-item").forEach(function (card) {
      card.addEventListener("click", function (e) {
        if (
          e.target.closest(".guide-step-img-wrap") ||
          e.target.closest("label") ||
          e.target.tagName === "INPUT"
        ) {
          return;
        }
        const input = card.querySelector(".pubg-check-input");
        if (input) {
          input.checked = !input.checked;
          updateChecklistUI();
        }
      });
    });

    updateChecklistUI();

    // 8C. Tab 3: Hotkey Table & Group Filter
    const hotkeyTbody = document.getElementById("hotkey-tbody");
    const hotkeyFilterBar = document.getElementById("hotkey-filter-bar");

    function formatKeycapHtml(keyStr) {
      const raw = String(keyStr || "").trim();
      // Special case: "~ (Dấu ngã)"
      if (raw.indexOf("~") === 0 && raw.indexOf("(") !== -1) {
        const parts = raw.split("(");
        return (
          '<kbd class="keycap">' +
          escapeHtml(parts[0].trim()) +
          "</kbd> <small>(" +
          escapeHtml(parts[1]) +
          "</small>"
        );
      }
      // Split by " / " or " + " while keeping separator
      return raw
        .split(/(\s+\/\s+|\s+\+\s+)/)
        .map(function (token) {
          const trimmed = token.trim();
          if (trimmed === "/" || trimmed === "+") {
            return " " + escapeHtml(trimmed) + " ";
          }
          return '<kbd class="keycap">' + escapeHtml(trimmed) + "</kbd>";
        })
        .join("");
    }

    function getGroupBadgeClass(group) {
      if (group === "Thực chiến") return "badge badge-gold";
      if (group === "Hiển thị") return "badge badge-cyan";
      if (group === "Tinh chỉnh") return "badge badge-emerald";
      return "badge";
    }

    function renderHotkeys(activeGroup) {
      if (!hotkeyTbody) return;
      const list = activeGroup === "ALL"
        ? SITE.hotkeys
        : SITE.hotkeys.filter(function (hk) { return hk.group === activeGroup; });

      hotkeyTbody.innerHTML = list
        .map(function (hk) {
          const badgeClass = getGroupBadgeClass(hk.group);
          return (
            '<tr data-group="' +
            escapeHtml(hk.group) +
            '">' +
            '<td><span class="' +
            badgeClass +
            '">' +
            escapeHtml(hk.groupLabel || hk.group) +
            "</span></td>" +
            "<td>" +
            formatKeycapHtml(hk.key) +
            "</td>" +
            "<td><strong>" +
            escapeHtml(hk.action) +
            "</strong></td>" +
            "<td>" +
            escapeHtml(hk.tip) +
            "</td>" +
            "</tr>"
          );
        })
        .join("");
    }

    if (hotkeyFilterBar) {
      hotkeyFilterBar.addEventListener("click", function (e) {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        const group = btn.getAttribute("data-hk-group") || "ALL";

        hotkeyFilterBar.querySelectorAll(".filter-btn").forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });

        renderHotkeys(group);
      });
    }

    renderHotkeys("ALL");
  }

  /* --------------------------------------------------------------------------
     9. Image Lightbox Modal (#lightbox-modal)
     -------------------------------------------------------------------------- */
  function initLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const modalCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");

    if (!modal || !modalImg) return;

    function openLightbox(src, caption) {
      if (!src) return;
      modalImg.setAttribute("src", src);
      modalImg.setAttribute("alt", caption || "Ảnh hướng dẫn MACGO PRO");
      if (modalCaption) {
        modalCaption.textContent = caption || "";
      }
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      modalImg.setAttribute("src", "");
    }

    document.querySelectorAll(".guide-step-img-wrap").forEach(function (wrap) {
      wrap.addEventListener("click", function (e) {
        e.stopPropagation();
        if (wrap.classList.contains("img-fallback")) return;
        const img = wrap.querySelector("img");
        const src = wrap.getAttribute("data-lightbox-src") || (img && img.getAttribute("src"));
        const caption = wrap.getAttribute("data-lightbox-caption") || (img && img.getAttribute("alt")) || "";
        openLightbox(src, caption);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", closeLightbox);
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. FAQ Accordion (#faq-list)
     -------------------------------------------------------------------------- */
  function initFaqAccordion() {
    const faqList = document.getElementById("faq-list");
    if (!faqList) return;

    if (SITE.faqs && SITE.faqs.length) {
      faqList.innerHTML = SITE.faqs
        .map(function (item, idx) {
          const isOpen = idx === 0;
          return (
            '<div class="faq-item' +
            (isOpen ? " is-open" : "") +
            '">' +
            '<button type="button" class="faq-question" aria-expanded="' +
            (isOpen ? "true" : "false") +
            '">' +
            "<span>" +
            (idx + 1) +
            ". " +
            escapeHtml(item.q) +
            "</span>" +
            '<span class="faq-icon" aria-hidden="true">+</span>' +
            "</button>" +
            '<div class="faq-answer">' +
            "<p>" +
            escapeHtml(item.a) +
            "</p>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }

    faqList.addEventListener("click", function (e) {
      const btn = e.target.closest(".faq-question");
      if (!btn) return;
      const item = btn.closest(".faq-item");
      if (!item) return;

      const willOpen = !item.classList.contains("is-open");

      faqList.querySelectorAll(".faq-item").forEach(function (other) {
        const isCurrent = other === item && willOpen;
        other.classList.toggle("is-open", isCurrent);
        const qBtn = other.querySelector(".faq-question");
        if (qBtn) {
          qBtn.setAttribute("aria-expanded", isCurrent ? "true" : "false");
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. Scroll Reveal Animation (IntersectionObserver)
     -------------------------------------------------------------------------- */
  function initScrollReveal() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof window.IntersectionObserver !== "function") {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.08
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
     Initialize Everything on DOMContentLoaded
     -------------------------------------------------------------------------- */
  function boot() {
    syncOfficialLinks();
    initNavigation();
    initHeroMockup();
    initWeaponsSection();
    initVideoSection();
    initPricingSection();
    initGuideHub();
    initLightbox();
    initFaqAccordion();
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
