(() => {
  const root = document.documentElement;
  const intro = document.querySelector('.intro');
  const main = document.querySelector('.invitation');
  const skip = document.querySelector('.intro__skip');
  const mark = document.querySelector('.intro__mark');
  const monogram = document.querySelector('.intro__monogram');
  const logo = document.querySelector('.brand__logo');
  const content = [...document.querySelectorAll('.flourish, .welcome, .signature')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let timeline;
  let finished = false;

  function finish() {
    if (finished) return;
    finished = true;
    const restoreFocus = intro.contains(document.activeElement);
    window.clearTimeout(window.chhedaIntroTimeout);
    timeline?.kill();
    root.removeAttribute('data-intro');
    main.inert = false;
    // Only these elements receive inline animation styles.
    [main, logo, ...content].forEach(element => element.removeAttribute('style'));
    skip.removeEventListener('click', finish);
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('visibilitychange', onVisibilityChange);
    window.removeEventListener('resize', finish);
    window.removeEventListener('pagehide', finish);
    window.removeEventListener('pageshow', onPageShow);
    window.removeEventListener('chheda:intro-timeout', finish);
    reducedMotion.removeEventListener('change', onMotionChange);
    if (restoreFocus) document.querySelector('#welcome-title').focus({ preventScroll: true });
  }

  function onKeyDown(event) { if (event.key === 'Escape') finish(); }
  function onVisibilityChange() { if (document.hidden) finish(); }
  function onPageShow(event) { if (event.persisted) finish(); }
  function onMotionChange(event) { if (event.matches) finish(); }

  if (root.dataset.intro !== 'pending' || reducedMotion.matches || !window.gsap) {
    finish();
    return;
  }

  main.inert = true;
  skip.addEventListener('click', finish);
  document.addEventListener('keydown', onKeyDown);
  document.addEventListener('visibilitychange', onVisibilityChange);
  window.addEventListener('resize', finish);
  window.addEventListener('pagehide', finish);
  window.addEventListener('pageshow', onPageShow);
  window.addEventListener('chheda:intro-timeout', finish);
  reducedMotion.addEventListener('change', onMotionChange);

  Promise.all([monogram.decode(), logo.decode()]).then(() => {
    if (finished) return;
    const gsap = window.gsap;
    // The supplied PNG's visible emblem is 510px across, centered at (306, 329).
    // The horizontal header logo's matching emblem is 410px across at (325, 228).
    const start = mark.getBoundingClientRect();
    let landing;
    timeline = gsap.timeline({ defaults: { ease: 'power2.inOut' }, onComplete: finish });
    timeline
      .set(logo, { autoAlpha: 0 })
      .fromTo(monogram, { rotation: 0, scale: 0.92 }, { rotation: 360, scale: 1, duration: 2.35, ease: 'power2.inOut' }, 0)
      .fromTo(monogram, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.35, ease: 'power1.out' }, 0)
      .to('.intro__copy', { autoAlpha: 0, y: -6, duration: 0.3 }, 1.55)
      .to('.intro__skip', { autoAlpha: 0, duration: 0.2 }, 1.75)
      .call(() => {
        const target = logo.getBoundingClientRect();
        const scale = (target.width * (410 / 1600)) / (start.width * (510 / 643));
        const sourceX = start.left + start.width * (306 / 643);
        const sourceY = start.top + start.height * 0.5;
        landing = { x: target.left + target.width * (325 / 1600) - sourceX, y: target.top + target.height * (228 / 487) - sourceY, scale };
      }, [], 1.7)
      .to(mark, { x: () => landing.x, y: () => landing.y, scale: () => landing.scale, transformOrigin: '47.6% 50%', duration: 0.85, ease: 'power3.inOut' }, 1.7)
      .to('.intro__veil', { autoAlpha: 0, duration: 0.7 }, 1.85)
      .set(main, { autoAlpha: 1 }, 1.85)
      .fromTo(content, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.07 }, 1.9)
      .to(monogram, { autoAlpha: 0, duration: 0.18 }, 2.43)
      .to(logo, { autoAlpha: 1, duration: 0.25 }, 2.43);
  }).catch(finish);
})();
