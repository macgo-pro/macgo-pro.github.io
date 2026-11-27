/**
 * MACGO PRO v2.5 — Main Interactive Controller
 * Pure Vanilla ES6 JavaScript (No external dependencies, works on both http:// and file://)
 */
(function () {
  "use strict";

  const DISCORD_ICON_SVG =
    '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">' +
    '<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>' +
    "</svg>";

  const PLAN_ICONS = {
    macgo:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>' +
      "</svg>",
    aim:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="9"></circle>' +
      '<circle cx="12" cy="12" r="3"></circle>' +
      '<line x1="12" y1="2" x2="12" y2="5"></line>' +
      '<line x1="12" y1="19" x2="12" y2="22"></line>' +
      '<line x1="2" y1="12" x2="5" y2="12"></line>' +
      '<line x1="19" y1="12" x2="22" y2="12"></line>' +
      "</svg>",
    combo:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>' +
      "</svg>"
  };

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
    pricingTagline: "LỰA CHỌN GÓI PHÙ HỢP VỚI NHU CẦU CỦA BẠN!",
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
    ]
  };

  const rawData = window.SITE_DATA || {};
  const SITE = {
    brand: Object.assign({}, DEFAULT_DATA.brand, rawData.brand || {}),
    links: Object.assign({}, DEFAULT_DATA.links, rawData.links || {}),
    heroPresets: Array.isArray(rawData.heroPresets) && rawData.heroPresets.length
      ? rawData.heroPresets
      : DEFAULT_DATA.heroPresets,
    pricingTagline: typeof rawData.pricingTagline === "string" && rawData.pricingTagline.trim()
      ? rawData.pricingTagline
      : DEFAULT_DATA.pricingTagline,
    pricingPlans: Array.isArray(rawData.pricingPlans) && rawData.pricingPlans.length
      ? rawData.pricingPlans
      : DEFAULT_DATA.pricingPlans
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
    const sectionIds = ["features", "video", "pricing", "how-to-buy"];
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
     5. YouTube Lite Facade Player
     -------------------------------------------------------------------------- */
  function initVideoSection() {
    const videoFrame = document.getElementById("video-frame");
    const directLink = document.getElementById("yt-direct-link");
    const directLinkText = document.getElementById("yt-direct-link-text");

    if (!videoFrame) return;

    const ytId = SITE.links.youtubeId || "U-3y32RV4Eo";
    const ytWatchBase = "https://www.youtube.com/watch?v=" + encodeURIComponent(ytId);
    const isFileProtocol = window.location.protocol === "file:";

    function loadYouTubeAt(seconds) {
      const startSec = Math.max(0, parseInt(seconds, 10) || 0);
      const watchWithTime = ytWatchBase + (startSec > 0 ? "&t=" + startSec + "s" : "");

      if (directLink) {
        directLink.setAttribute("href", watchWithTime);
      }
      if (directLinkText) {
        directLinkText.textContent = "Mở trực tiếp trên YouTube";
      }

      const embedUrl =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(ytId) +
        "?autoplay=1&rel=0&modestbranding=1&start=" +
        startSec;

      const fileFallbackBanner = isFileProtocol
        ? '<div style="position:absolute;bottom:10px;left:12px;right:12px;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 12px;background:rgba(9,13,20,0.92);border:1px solid #FFB800;border-radius:8px;font-size:0.82rem;color:#F8FAFC;">' +
          '<span>💡 Nếu trình duyệt chặn nhúng YouTube khi mở file offline:</span>' +
          '<a href="' +
          escapeHtml(watchWithTime) +
          '" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm" style="padding:4px 10px;font-size:0.78rem;">Xem trên YouTube ↗</a>' +
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
        loadYouTubeAt(0);
      });
      facade.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          loadYouTubeAt(0);
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     6. 3-Column Pricing Table Hydration (GÓI MACGO | GÓI AIM-AI | GÓI COMBO)
     -------------------------------------------------------------------------- */
  function initPricingSection() {
    const pricingGrid = document.getElementById("pricing-three-grid");
    const taglineEl = document.getElementById("pricing-tagline");
    if (!pricingGrid) return;

    const plans = Array.isArray(SITE.pricingPlans) && SITE.pricingPlans.length
      ? SITE.pricingPlans
      : DEFAULT_DATA.pricingPlans;
    const discordUrl = SITE.links.discordInvite || DEFAULT_DATA.links.discordInvite;

    pricingGrid.innerHTML = plans
      .map(function (col) {
        const iconSvg = PLAN_ICONS[col.iconKey] || PLAN_ICONS.macgo;
        const tiers = Array.isArray(col.tiers) ? col.tiers : [];
        const tiersHtml = tiers
          .map(function (tier) {
            const lifetimeClass = tier.isLifetime ? " is-lifetime" : "";
            const badgeHtml = tier.badge
              ? '<span class="plan-best-value">' + escapeHtml(tier.badge) + "</span>"
              : "";
            return (
              '<div class="plan-tier-row' +
              lifetimeClass +
              '">' +
              '<div class="plan-tier-left">' +
              '<span class="plan-tier-duration">' +
              escapeHtml(tier.duration) +
              "</span>" +
              '<span class="plan-tier-hours">' +
              escapeHtml(tier.hours) +
              "</span>" +
              "</div>" +
              '<div class="plan-tier-right">' +
              badgeHtml +
              '<span class="plan-tier-price">' +
              escapeHtml(tier.priceFormatted) +
              "</span>" +
              "</div>" +
              "</div>"
            );
          })
          .join("");

        const subtitleHtml = col.subtitle
          ? '<p class="plan-col-subtitle">' + escapeHtml(col.subtitle) + "</p>"
          : "";

        return (
          '<article class="plan-column ' +
          escapeHtml(col.colClass || "") +
          '" data-plan-group="' +
          escapeHtml(col.id || "") +
          '">' +
          '<div class="plan-col-header">' +
          '<div class="plan-col-icon">' +
          iconSvg +
          "</div>" +
          '<h3 class="plan-col-title">' +
          escapeHtml(col.title) +
          "</h3>" +
          subtitleHtml +
          "</div>" +
          '<div class="plan-tier-list">' +
          tiersHtml +
          "</div>" +
          '<div class="plan-col-footer">' +
          '<a href="' +
          escapeHtml(discordUrl) +
          '" data-link="discord" target="_blank" rel="noopener noreferrer" class="btn btn-discord btn-block">' +
          DISCORD_ICON_SVG +
          "<span>" +
          escapeHtml(col.ctaText || "Mua Ngay") +
          "</span>" +
          "</a>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    if (taglineEl && SITE.pricingTagline) {
      taglineEl.textContent = SITE.pricingTagline;
    }
  }

  /* --------------------------------------------------------------------------
     7. Scroll Reveal Animation (IntersectionObserver)
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
    initHeroMockup();
    initVideoSection();
    initPricingSection();
    syncOfficialLinks();
    initNavigation();
    initScrollReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
