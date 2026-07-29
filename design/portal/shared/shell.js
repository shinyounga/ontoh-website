/* ============================================================
   ONTOH Design Portal · Shell JS · v2 (systematic improvements)
   - JS-rendered sidebar with WIP status handling
   - Theme toggle · Mobile menu · Active link
   - Client-side search over sidebar
   - ARIA improvements
   ============================================================ */

(function () {
  'use strict';

  // ==================== Path Prefix Detection ====================
  function getPathPrefix() {
    const path = location.pathname;
    const m = path.match(/\/design\/portal\/(.*)$/);
    if (!m) return '';
    const rest = m[1] || '';
    const slashes = (rest.match(/\//g) || []).length;
    return '../'.repeat(slashes);
  }

  const PREFIX = getPathPrefix();

  // ==================== Sidebar Structure ====================
  // status: 'ready' (default) or 'wip' (Coming in Stage 3)
  const SIDEBAR = [
    {
      title: 'Get Started',
      icon: 'solar:book-linear',
      links: [
        { label: 'Introduction',  href: 'get-started/introduction.html', status: 'ready' },
        { label: 'Principles',    href: 'get-started/principles.html',   status: 'wip' },
        { label: 'Install · Use', href: 'get-started/install.html',      status: 'wip' },
      ]
    },
    {
      title: 'Foundations',
      icon: 'solar:palette-linear',
      links: [
        { label: 'Color',          href: 'foundations/color.html',       status: 'ready' },
        { label: 'Typography',     href: 'foundations/typography.html',  status: 'ready' },
        { label: 'Spacing',        href: 'foundations/spacing.html',     status: 'ready' },
        { label: 'Radius · Shape', href: 'foundations/radius.html',      status: 'ready' },
        { label: 'Elevation',      href: 'foundations/elevation.html',   status: 'ready' },
        { label: 'Motion',         href: 'foundations/motion.html',      status: 'ready' },
        { label: 'Iconography',    href: 'foundations/iconography.html', status: 'ready' },
      ]
    },
    {
      title: 'Components',
      icon: 'solar:widget-3-linear',
      links: [
        { label: 'Button',           href: 'components/button.html',            status: 'wip' },
        { label: 'Card',             href: 'components/card.html',              status: 'wip' },
        { label: 'Tag',              href: 'components/tag.html',               status: 'wip' },
        { label: 'Kicker',           href: 'components/kicker.html',            status: 'wip' },
        { label: 'Stat Number',      href: 'components/stat-number.html',       status: 'wip' },
        { label: 'Dropdown Link',    href: 'components/dropdown-link.html',     status: 'wip' },
        { label: 'Breadcrumb',       href: 'components/breadcrumb.html',        status: 'wip' },
        { label: 'Lightbox',         href: 'components/lightbox.html',          status: 'wip' },
        { label: 'Feature Carousel', href: 'components/feature-carousel.html',  status: 'wip' },
        { label: 'Alert',            href: 'components/alert.html',             status: 'wip' },
        { label: 'Form',             href: 'components/form.html',              status: 'wip' },
        { label: 'Navigation',       href: 'components/navigation.html',        status: 'wip' },
      ]
    },
    {
      title: 'Patterns',
      icon: 'solar:layers-linear',
      links: [
        { label: 'Hero',    href: 'patterns/hero.html',    status: 'wip' },
        { label: 'Section', href: 'patterns/section.html', status: 'wip' },
        { label: 'CTA',     href: 'patterns/cta.html',     status: 'wip' },
        { label: 'Form',    href: 'patterns/form.html',    status: 'wip' },
      ]
    },
    {
      title: 'Develop',
      icon: 'solar:code-square-linear',
      links: [
        { label: 'Integration', href: 'develop/integration.html', status: 'wip' },
        { label: 'Changelog',   href: 'develop/changelog.html',   status: 'wip' },
      ]
    },
  ];

  function isActive(href) {
    const path = location.pathname;
    const m = path.match(/\/design\/portal\/(.*)$/);
    if (!m) return false;
    let current = m[1] || 'index.html';
    if (current === '' || current.endsWith('/')) current = current + 'index.html';
    return current === href;
  }

  function renderSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    if (sidebar.dataset.rendered) return;
    sidebar.setAttribute('aria-label', '문서 내비게이션');

    const html = SIDEBAR.map(section => {
      const links = section.links.map(link => {
        const activeClass = isActive(link.href) ? ' is-active' : '';
        if (link.status === 'wip') {
          return `<span class="side-link is-wip" data-label="${link.label.toLowerCase()}" role="link" aria-disabled="true" tabindex="-1" title="Stage 3 예정 · 아직 준비 중">${link.label}<span class="wip-badge">SOON</span></span>`;
        }
        return `<a href="${PREFIX}${link.href}" class="side-link${activeClass}" data-label="${link.label.toLowerCase()}">${link.label}</a>`;
      }).join('\n      ');
      return `
    <div class="side-section">
      <p class="side-section-title">
        <iconify-icon icon="${section.icon}"></iconify-icon>
        ${section.title}
      </p>
      ${links}
    </div>`;
    }).join('\n');

    sidebar.innerHTML = html;
    sidebar.dataset.rendered = '1';
  }

  function renderBrandHref() {
    const brand = document.querySelector('.topnav-brand');
    if (brand) brand.setAttribute('href', PREFIX + 'index.html');
  }

  // ==================== Topnav Rendering ====================
  function renderTopnav() {
    const topnav = document.querySelector('.topnav');
    if (!topnav) return;
    if (topnav.dataset.rendered) return;
    if (topnav.children.length > 0) return; // already has content (backward compat)

    topnav.setAttribute('aria-label', '상단 네비게이션');
    topnav.innerHTML = `
      <a href="${PREFIX}index.html" class="topnav-brand">
        <span class="topnav-brand-name">ONTOH</span>
        <span class="topnav-brand-sub">Design</span>
      </a>
      <div class="topnav-right">
        <div class="topnav-search">
          <iconify-icon icon="solar:magnifer-linear" style="font-size:15px;"></iconify-icon>
          <input type="search" placeholder="컴포넌트 · 토큰 검색..." aria-label="검색">
          <kbd>/</kbd>
        </div>
        <button class="topnav-btn" id="menuToggle" type="button" aria-label="메뉴 열기">
          <iconify-icon icon="solar:hamburger-menu-linear" style="font-size:20px;"></iconify-icon>
        </button>
        <button class="topnav-btn" id="themeToggle" type="button" aria-label="테마 전환">
          <iconify-icon icon="solar:moon-linear" style="font-size:18px;"></iconify-icon>
        </button>
        <a class="topnav-btn" href="https://github.com/shinyounga/ontoh-website" target="_blank" rel="noopener" aria-label="GitHub">
          <iconify-icon icon="mdi:github" style="font-size:20px;"></iconify-icon>
        </a>
      </div>
    `;
    topnav.dataset.rendered = '1';
  }

  // ==================== Theme Toggle ====================
  const root = document.documentElement;

  function getTheme() {
    return root.getAttribute('data-theme') ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    localStorage.setItem('portal-theme', t);
    updateThemeIcon(t);
  }
  function updateThemeIcon(t) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const icon = btn.querySelector('iconify-icon');
    if (icon) {
      icon.setAttribute('icon', t === 'dark' ? 'solar:sun-linear' : 'solar:moon-linear');
    }
    btn.setAttribute('aria-label', t === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환');
  }

  // ==================== Mobile Sidebar ====================
  function toggleSidebar(open) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    const isOpen = open !== undefined ? open : !sidebar.classList.contains('is-open');
    sidebar.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    const menuBtn = document.getElementById('menuToggle');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', String(isOpen));
  }

  // ==================== Client-side Search ====================
  function initSearch() {
    const input = document.querySelector('.topnav-search input');
    if (!input) return;

    let noResultsMsg = null;

    function filter() {
      const q = input.value.trim().toLowerCase();
      const sidebar = document.querySelector('.sidebar');
      if (!sidebar) return;

      let anyMatch = false;
      sidebar.querySelectorAll('.side-section').forEach(section => {
        let sectionHasMatch = false;
        section.querySelectorAll('.side-link').forEach(link => {
          const label = link.dataset.label || link.textContent.toLowerCase();
          const match = !q || label.includes(q);
          link.style.display = match ? '' : 'none';
          if (match) { sectionHasMatch = true; anyMatch = true; }
        });
        section.style.display = sectionHasMatch ? '' : 'none';
      });

      // "no results" message
      if (!anyMatch && q) {
        if (!noResultsMsg) {
          noResultsMsg = document.createElement('p');
          noResultsMsg.className = 'search-no-results';
          noResultsMsg.textContent = '검색 결과 없음';
          sidebar.appendChild(noResultsMsg);
        }
      } else if (noResultsMsg) {
        noResultsMsg.remove();
        noResultsMsg = null;
      }
    }

    input.addEventListener('input', filter);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        input.value = '';
        filter();
        input.blur();
      }
    });
  }

  // ==================== Init ====================
  function init() {
    renderTopnav();
    renderSidebar();
    renderBrandHref();

    const savedTheme = localStorage.getItem('portal-theme');
    if (savedTheme) setTheme(savedTheme);
    else updateThemeIcon(getTheme());

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
      });
    }

    const menuBtn = document.getElementById('menuToggle');
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.setAttribute('aria-controls', 'portalSidebar');
      menuBtn.addEventListener('click', () => toggleSidebar());
    }
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.setAttribute('id', 'portalSidebar');
    if (backdrop) backdrop.addEventListener('click', () => toggleSidebar(false));

    document.querySelectorAll('.sidebar .side-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) toggleSidebar(false);
      });
    });

    // WIP links: prevent navigation
    document.querySelectorAll('.sidebar .side-link.is-wip').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleSidebar(false);
    });

    initSearch();

    // Search shortcut
    const searchInput = document.querySelector('.topnav-search input');
    if (searchInput) {
      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput
            && !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) {
          e.preventDefault();
          searchInput.focus();
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
