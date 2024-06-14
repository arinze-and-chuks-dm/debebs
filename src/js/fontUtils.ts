import type { TransitionBeforeSwapEvent } from "astro:transitions/client";

/**
 * * Fix for font preload issue when using View Transitions
 * this dynamically remove superfluous preloads from the next pages as you navigate to them
 * related to this issue: https://github.com/withastro/astro/issues/10425
 */
export function viewTransitionFontPreloadFix() {
  document.addEventListener("astro:before-swap", (e) =>
    [
      ...(e as TransitionBeforeSwapEvent).newDocument.head.querySelectorAll(
        'link[as="font"]',
      ),
    ].forEach((link) => link.remove()),
  );
}
