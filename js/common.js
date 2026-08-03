/* ==================== ONTOH Common Scripts ==================== */

// ==================== GSAP · 전역 초기화 (사이트 전체 공통) ====================
// GSAP CDN이 로드되어 있으면 CustomEase 등록 · 기본 easing 설정
if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  if (typeof CustomEase !== 'undefined') {
    CustomEase.create('ontoh', '0.16, 1, 0.3, 1'); // ONTOH 시그니처 easing (cubic-bezier와 동일)
    gsap.defaults({ ease: 'ontoh', duration: 0.9 });
  }
}

document.addEventListener('DOMContentLoaded', function() {

  // ==================== Scroll Reveal (GSAP ScrollTrigger · fallback IntersectionObserver) ====================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    // GSAP 방식 · 진입/역방향 시 자연스러운 재생
    document.querySelectorAll('.reveal').forEach(function(el) {
      gsap.fromTo(el,
        { y: 32, opacity: 0, filter: 'blur(4px)' },
        {
          y: 0, opacity: 1, filter: 'blur(0px)',
          duration: 0.9, ease: 'ontoh',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
          onStart: function() { el.classList.add('visible'); },
        }
      );
    });
  } else {
    // Fallback · GSAP 미로드 시 기존 IntersectionObserver
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // ==================== Nav: 투명 → 글래스 전환 ====================
  const nav = document.getElementById('mainNav');
  if (nav) {
    function updateNav() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 80) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
        nav.classList.add('nav-transparent');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }

  // ==================== Mobile Menu ====================
  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function() {
      closeMobileMenu();
    });
  }

  // 모바일 메뉴 링크 클릭 시 자동 닫기
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        closeMobileMenu();
      });
    });
  }

  // ==================== Smooth Scroll ====================
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ==================== Tab UI ====================
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length > 0) {
    tabBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        tabBtns.forEach(function(b) { b.classList.remove('active'); });
        this.classList.add('active');
        document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
        const panel = document.getElementById('tab-' + tabId);
        if (panel) panel.classList.add('active');
      });
    });
  }

});

// ==================== Global Functions ====================
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}
