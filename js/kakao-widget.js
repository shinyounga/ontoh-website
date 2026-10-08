/* 카카오톡 상담 · 플로팅 런처 + 안내 카드 — 전 페이지 공통 (평소엔 닫혀 있고, 런처에 마우스를 올리거나 포커스가 오면 열림) */
(function () {
  'use strict';
  if (document.querySelector('.kakao-fab')) return;
  var CHAT = 'https://pf.kakao.com/_TqExiX/chat', FRIEND = 'https://pf.kakao.com/_TqExiX/friend';
  var SYM = '<svg viewBox="0 0 24 24" aria-hidden="true" class="kakao-sym"><path fill="currentColor" d="M12 3.2C6.6 3.2 2.3 6.6 2.3 10.8c0 2.7 1.8 5.1 4.6 6.5l-.9 3.4c-.1.3.3.6.6.4l4-2.7c.5.1 1 .1 1.5.1 5.4 0 9.7-3.4 9.7-7.6S17.4 3.2 12 3.2z"/></svg>';
  // 이 스크립트 위치 기준으로 에셋 경로 계산 (blog/ · references/ 하위 페이지 대응)
  var src = (document.currentScript && document.currentScript.src) || '';
  var root = src ? src.replace(/js\/kakao-widget\.js.*$/, '') : '';

  function build() {
    var fab = document.createElement('div');
    fab.className = 'kakao-fab';
    fab.innerHTML =
      '<div class="kakao-card" id="kakaoCard" role="dialog" aria-labelledby="kakaoCardTitle" aria-hidden="true">' +
        '<button type="button" class="kakao-card-close" data-kakao-close aria-label="닫기"><iconify-icon icon="solar:close-small-linear" class="text-[20px]"></iconify-icon></button>' +
        '<div class="flex items-center gap-3 pr-6">' +
          '<img src="' + root + 'assets/logo/lookat/lookat-symbol.png" alt="" aria-hidden="true" class="w-10 h-10">' +
          '<div>' +
            '<p id="kakaoCardTitle" class="text-[15px] font-bold text-ink leading-tight"><img src="' + root + 'assets/logo/ontoh/ontoh-wordmark-tight.svg" alt="ONTOH" class="inline-block h-[11px] w-auto mr-1.5" style="vertical-align:0">도입 상담</p>' +
            '<p class="mt-0.5 text-[12px] text-sub">카카오톡 채널 1:1 상담</p>' +
          '</div>' +
        '</div>' +
        '<p class="mt-4 text-[14.5px] text-body leading-[1.6]">현장 도입이나 구성이 궁금하신가요?<br>편하게 물어보세요.</p>' +
        '<a href="' + CHAT + '" target="_blank" rel="noopener" class="mt-4 flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] h-11 text-[15px] font-bold hover:brightness-95 transition">' +
          '<span class="text-[20px] inline-flex">' + SYM + '</span>카카오톡 상담하기</a>' +
        '<a href="' + FRIEND + '" target="_blank" rel="noopener" class="mt-2.5 block text-center text-[13px] font-semibold text-sub hover:text-ink underline-offset-2 hover:underline">채널 추가하고 소식 받기</a>' +
      '</div>' +
      '<a href="' + CHAT + '" target="_blank" rel="noopener" class="kakao-launcher" aria-label="카카오톡으로 상담하기 (새 창)">' + SYM +
        '<span class="kakao-tip" aria-hidden="true">카카오톡 상담</span></a>';
    document.body.appendChild(fab);

    var card = fab.querySelector('#kakaoCard'), launcher = fab.querySelector('.kakao-launcher'), timer;
    function set(open) {
      clearTimeout(timer);
      card.classList.toggle('is-open', open);
      card.setAttribute('aria-hidden', open ? 'false' : 'true');
      card.querySelectorAll('a,button').forEach(function (el) { el.tabIndex = open ? 0 : -1; });
    }
    function later() { timer = setTimeout(function () { set(false); }, 250); }  // 런처↔카드 이동 중 깜빡임 방지
    set(false);
    // 닫힌 카드가 차지하는 빈 영역에는 반응하지 않도록 컨테이너는 이벤트를 통과시키고 런처·카드만 받는다
    fab.style.pointerEvents = 'none';
    launcher.style.pointerEvents = 'auto';
    [launcher, card].forEach(function (el) {
      el.addEventListener('mouseenter', function () { set(true); });
      el.addEventListener('mouseleave', later);
    });
    fab.addEventListener('focusin', function () { set(true); });
    fab.addEventListener('focusout', function (e) { if (!fab.contains(e.relatedTarget)) later(); });
    card.querySelector('[data-kakao-close]').addEventListener('click', function () { set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
}());
