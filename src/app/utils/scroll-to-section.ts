let activeFrame: number | undefined;
let activeScrollId = 0;
let removeUserInputListeners = (): void => {};

export function scrollToSection(id: string): void {
  cancelActiveScroll();

  const section = document.getElementById(id);
  if (!section) {
    return;
  }

  const start = window.scrollY;
  const marginTop = Number.parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
  const target = Math.max(0, start + section.getBoundingClientRect().top - marginTop);
  const distance = target - start;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || Math.abs(distance) < 1) {
    window.scrollTo(0, target);
    return;
  }

  const scrollId = activeScrollId;
  const startTime = performance.now();
  const duration = Math.min(1100, Math.max(500, Math.abs(distance) * 0.4));

  const stopOnUserInput = (): void => cancelActiveScroll();
  const removeListeners = (): void => {
    window.removeEventListener('wheel', stopOnUserInput);
    window.removeEventListener('touchstart', stopOnUserInput);
    window.removeEventListener('pointerdown', stopOnUserInput);
    window.removeEventListener('keydown', stopOnUserInput);
  };
  removeUserInputListeners = removeListeners;
  window.addEventListener('wheel', stopOnUserInput, { passive: true });
  window.addEventListener('touchstart', stopOnUserInput, { passive: true });
  window.addEventListener('pointerdown', stopOnUserInput, { passive: true });
  window.addEventListener('keydown', stopOnUserInput);

  const animate = (time: number): void => {
    if (scrollId !== activeScrollId) {
      return;
    }

    const progress = Math.min((time - startTime) / duration, 1);
    const easedProgress = 0.5 - Math.cos(Math.PI * progress) / 2;
    window.scrollTo(0, start + distance * easedProgress);

    if (progress < 1) {
      activeFrame = requestAnimationFrame(animate);
      return;
    }

    activeFrame = undefined;
    removeListeners();
    removeUserInputListeners = (): void => {};
  };

  activeFrame = requestAnimationFrame(animate);
}

function cancelActiveScroll(): void {
  activeScrollId += 1;
  if (activeFrame !== undefined) {
    cancelAnimationFrame(activeFrame);
    activeFrame = undefined;
  }
  removeUserInputListeners();
  removeUserInputListeners = (): void => {};
}
