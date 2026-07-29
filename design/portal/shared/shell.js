/* ============================================================
   ONTOH Design Portal · Shell JS
   Sidebar rendering · Theme toggle · Mobile menu · Active link
   ============================================================ */

(function () {
  'use strict';

  // ==================== Path Prefix Detection ====================
  // Portal root is /design/portal/. Compute how many "../" needed to reach it.
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
  const SIDEBAR = [
    {
      title: 'Get Started',
      icon: 'solar:book-linear',
      links: [
        { label: 'Introduction',  href: 'get-started/introduction.html' },
        { label: 'Principles',    href: 'get-started/principles.html' },
        { label: 'Install · Use', href: 'get-started/install.html' },
      ]
    },
    {
      title: 'Foundations',
      icon: 'solar:palette-linear',
      links: [
        { label: 'Color',       href: 'foundations/color.html' },
        { label: 'Typography',  href: 'foundations/typography.html' },
        { label: 'Spacing',     href: 'foundations/spacing.html' },
        { label: 'Radius · Shape', href: 'foundations/radius.html' },
        { label: 'Elevation',   href: 'foundations/elevation.html' },
        { label: 'Motion',      href: 'foundations/motion.html' },
        { label: 'Iconography', href: 'foundations/iconography.html' },
      ]
    },
    {
      title: 'Components',
      icon: 'solar:widget-3-linear',
      links: [
        { label: 'Button',           href: 'components/button.html' },
        { label: 'Card',             href: 'components/card.html' },
        { label: 'Tag',              href: 'components/tag.html' },
        { label: 'Kicker',           href: 'components/kicker.html' },
        { label: 'Stat Number',      href: 'components/stat-number.html' },
        { label: 'Dropdown Link',    href: 'components/dropdown-link.html' },
        { label: 'Breadcrumb',       href: 'components/breadcrumb.html' },
        { label: 'Lightbox',         href: 'components/lightbox.html' },
        { label: 'Feature Carousel', href: 'components/feature-carousel.html' },
        { label: 'Alert',            href: 'components/alert.html' },
        { label: 'Form',             href: 'components/form.html' },
        { label: 'Navigation',       href: 'components/navigation.html' },
      ]
    },
    {
      title: 'Patterns',
      icon: 'solar:layers-linear',
      links: [
        { label: 'Hero',    href: 'patterns/hero.html' },
        { label: 'Section', href: 'patterns/section.html' },
        { label: 'CTA',     href: 'patterns/cta.html' },
        { label: 'Form',    href: 'patterns/form.html' },
      ]
    },
    {
      title: 'Develop',
      icon: 'solar:code-square-linear',
      links: [
        { label: 'Integration', href: 'develop/integration.html' },
        { label: 'Changelog',   href: 'develop/changelog.html' },
      ]
    },
  ];

  // Detect active link from URL
  function isActive(href) {
    const path = location.pathname;
    const m = path.match(/\/design\/portal\/(.*)$/);
    if (!m) return false;
    let current = m[1] || 'index.html';
    if (current === '' || current.endsWith('/')) current = current + 'index.html';
    return current === href;
  }

  // Render sidebar
  function renderSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    if (sidebar.dataset.rendered) return; // already rendered

    const html = SIDEBAR.map(section => {
      const links = section.links.map(link => {
        const activeClass = isActive(link.href) ? ' is-active' : '';
        return `<a href="${PREFIX}${link.href}" class="side-link${activeClass}">${link.label}</a>`;
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

  // Render top brand link (adjust to home)
  function renderBrandHref() {
    const brand = document.querySelector('.topnav-brand');
    if (brand) brand.setAttribute('href', PREFIX + 'index.html');
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
  }

  // ==================== Mobile Sidebar ====================
  function toggleSidebar(open) {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;
    const isOpen = open !== undefined ? open : !sidebar.classList.contains('is-open');
    sidebar.classList.toggle('is-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  // ==================== Init ====================
  function init() {
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
    if (menuBtn) menuBtn.addEventListener('click', () => toggleSidebar());
    if (backdrop) backdrop.addEventListener('click', () => toggleSidebar(false));

    document.querySelectorAll('.sidebar .side-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 900) toggleSidebar(false);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleSidebar(false);
    });

    const searchInput = document.querySelector('.topnav-search input');
    if (searchInput) {
      document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
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
