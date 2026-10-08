/* ONTOH website analytics. Public IDs only; never put passwords or tokens here. */
(function () {
  'use strict';
  if (window.ontohAnalytics) return;

  var GA4_ID = 'G-K8YLE1HTK4';
  var CLARITY_ID = 'yudy5as4me';
  var STORAGE_KEY = 'ontoh-analytics-consent-v1';
  var CONSENT_AGE = 180 * 24 * 60 * 60 * 1000;
  var allowedHost = /^(www\.)?ontoh\.co\.kr$/.test(window.location.hostname);
  var configured = /^G-[A-Z0-9]+$/.test(GA4_ID) && /^[a-z0-9]+$/.test(CLARITY_ID);
  var started = false;
  var consent = readConsent();
  var banner;
  var settings;

  function readConsent() {
    try {
      var value = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
      if (value && (value.choice === 'granted' || value.choice === 'denied') &&
          typeof value.timestamp === 'number' && value.timestamp <= Date.now() &&
          Date.now() - value.timestamp < CONSENT_AGE) return value.choice;
    } catch (error) { /* Unavailable storage means consent must be requested again. */ }
    return null;
  }

  function cleanUrl(value, keepCampaign) {
    try {
      var url = new URL(value, window.location.href);
      var clean = url.origin + url.pathname;
      if (keepCampaign) {
        var campaign = new URLSearchParams();
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_id', 'utm_term', 'utm_content'].forEach(function (key) {
          var item = url.searchParams.get(key);
          if (item && /^[a-zA-Z0-9_.-]{1,100}$/.test(item)) campaign.set(key, item);
        });
        if (campaign.toString()) clean += '?' + campaign.toString();
      }
      return clean;
    } catch (error) { return ''; }
  }

  function addScript(src, id) {
    var script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function start() {
    if (started || consent !== 'granted' || !allowedHost || !configured) return;
    started = true;
    window['ga-disable-' + GA4_ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'denied', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, {
      page_location: cleanUrl(window.location.href, true),
      page_referrer: document.referrer ? cleanUrl(document.referrer, false) : '',
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    addScript('https://www.googletagmanager.com/gtag/js?id=' + GA4_ID, 'ontoh-ga4');

    window.clarity = window.clarity || function () {
      (window.clarity.q = window.clarity.q || []).push(arguments);
    };
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
    addScript('https://www.clarity.ms/tag/' + CLARITY_ID, 'ontoh-clarity');
  }

  function removeAnalyticsCookies() {
    document.cookie.split(';').forEach(function (entry) {
      var name = entry.trim().split('=')[0];
      if (!/^(_ga($|_)|_gid$|_gat($|_)|_clck$|_clsk$)/.test(name)) return;
      ['', window.location.hostname, '.' + window.location.hostname, 'ontoh.co.kr', '.ontoh.co.kr'].forEach(function (domain) {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + (domain ? '; domain=' + domain : '');
      });
    });
  }

  function choose(choice) {
    consent = choice;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice: choice, timestamp: Date.now() })); }
    catch (error) { /* Current-page choice still works when storage is blocked. */ }
    if (banner) banner.hidden = true;
    if (settings) settings.focus();
    if (choice === 'granted') start();
    else {
      window['ga-disable-' + GA4_ID] = true;
      if (started) {
        window.clarity('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
        window.clarity('stop');
      }
      removeAnalyticsCookies();
      // A fresh page prevents loaded third-party SDKs from running after withdrawal.
      if (started) window.location.reload();
    }
  }

  function track(name, details) {
    if (consent !== 'granted' || !started || typeof window.gtag !== 'function') return;
    if (['contact_click', 'contact_channel_click', 'generate_lead'].indexOf(name) < 0) return;
    var params = {
      page_location: cleanUrl(window.location.href, true),
      page_referrer: document.referrer ? cleanUrl(document.referrer, false) : '',
      transport_type: 'beacon'
    };
    if (name === 'generate_lead') params.form_id = 'contactForm';
    if (name === 'contact_channel_click') {
      var channel = details && details.channel;
      if (['kakao', 'email', 'phone'].indexOf(channel) < 0) return;
      params.contact_channel = channel;
    }
    window.gtag('event', name, params);
  }

  function setupUi() {
    var style = document.createElement('style');
    style.textContent = '#ontoh-analytics-banner[hidden]{display:none!important}' +
      '#ontoh-analytics-banner{position:fixed;inset:auto 16px 16px;z-index:10001;max-width:960px;margin:auto;padding:20px 24px;background:#fff;color:#212121;border:1px solid #d9e0e7;box-shadow:0 8px 28px #0a244025;font:15px/1.6 Pretendard,system-ui,sans-serif}' +
      '#ontoh-analytics-banner h2{font-size:17px;font-weight:700;margin:0 0 6px}' +
      '#ontoh-analytics-banner p{margin:0 0 14px}' +
      '#ontoh-analytics-banner a{color:#0169a9;text-decoration:underline}' +
      '#ontoh-analytics-banner .analytics-actions{display:flex;gap:10px;flex-wrap:wrap}' +
      '#ontoh-analytics-banner button{font:inherit;font-weight:600;padding:9px 18px;cursor:pointer;border:1px solid #1b2e6a;border-radius:4px;background:#fff;color:#1b2e6a}' +
      '#ontoh-analytics-banner button[data-choice="granted"]{background:#1b2e6a;color:white}' +
      '.ontoh-analytics-settings{background:none;border:0;color:inherit;cursor:pointer;font:inherit;padding:0}' +
      '.ontoh-analytics-settings:hover{text-decoration:underline}' +
      '.ontoh-analytics-sep{opacity:.4}' +
      '#ontoh-analytics-banner button:focus-visible,.ontoh-analytics-settings:focus-visible{outline:3px solid #0169a9;outline-offset:3px}' +
      '@media(max-width:600px){#ontoh-analytics-banner{inset:auto 10px 10px;padding:16px}#ontoh-analytics-banner button{flex:1}}';
    document.head.appendChild(style);
    banner = document.createElement('section');
    banner.id = 'ontoh-analytics-banner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', '웹사이트 분석 설정');
    banner.hidden = consent !== null;
    banner.innerHTML = '<h2>웹사이트 분석 설정</h2>' +
      '<p>사이트 개선을 위해 Google Analytics와 Microsoft Clarity로 방문 통계와 클릭·스크롤 행동을 분석합니다. 분석은 허용한 경우에만 시작되며, 거부해도 홈페이지를 이용할 수 있습니다. <a href="/privacy.html">개인정보처리방침</a></p>' +
      '<div class="analytics-actions"><button type="button" data-choice="denied">분석 거부</button><button type="button" data-choice="granted">분석 허용</button></div>';
    banner.addEventListener('click', function (event) {
      var button = event.target.closest('button[data-choice]');
      if (button) choose(button.getAttribute('data-choice'));
    });
    document.body.appendChild(banner);
    settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'ontoh-analytics-settings';
    settings.textContent = '웹사이트 분석 설정';
    settings.addEventListener('click', function () {
      banner.hidden = false;
      banner.querySelector('button').focus();
    });
    // 개인정보처리방침 · 이용약관 옆에 작게 배치 (푸터 링크 줄이 없으면 푸터 끝)
    var privacyLink = document.querySelector('footer a[href$="privacy.html"]');
    var linkRow = privacyLink && privacyLink.parentNode;
    if (linkRow) {
      var sep = document.createElement('span');
      sep.className = 'ontoh-analytics-sep';
      sep.setAttribute('aria-hidden', 'true');
      sep.textContent = '|';
      linkRow.appendChild(sep);
      linkRow.appendChild(settings);
    } else {
      settings.style.marginTop = '12px';
      (document.querySelector('footer > div') || document.body).appendChild(settings);
    }
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (/^mailto:/i.test(href)) track('contact_channel_click', { channel: 'email' });
      else if (/^tel:/i.test(href)) track('contact_channel_click', { channel: 'phone' });
      else {
        try {
          var url = new URL(href, window.location.href);
          if (url.hostname === 'pf.kakao.com') track('contact_channel_click', { channel: 'kakao' });
          else if (url.origin === window.location.origin && url.pathname === '/contact.html') track('contact_click');
        } catch (error) { /* Non-URL links are unrelated to analytics. */ }
      }
    });
    start();
  }

  window.ontohAnalytics = { track: track, openSettings: function () {
    if (settings) settings.click();
  } };
  window.addEventListener('storage', function (event) {
    if (event.key !== STORAGE_KEY) return;
    consent = readConsent();
    if (started && consent !== 'granted') choose(consent || 'denied');
    else {
      if (banner) banner.hidden = consent !== null;
      start();
    }
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupUi);
  else setupUi();
}());
