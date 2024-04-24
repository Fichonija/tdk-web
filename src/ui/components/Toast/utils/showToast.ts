import { DURATION_FADING, DURATION_VISIBLE_DEFAULT, HIDE_EASING, SHOW_EASING, TOAST_ID } from './const';
import type { ShowToastOptions } from './types';
import { addToastText, paintToast, removeToastText } from './utils';

export async function showToast({ text, helperText, variant, duration }: ShowToastOptions) {
  const toast = document.getElementById(TOAST_ID)!;

  addToastText(text, helperText);
  paintToast(variant);

  toast.classList.toggle('hidden');
  await animateToast(toast, duration);
  toast.classList.toggle('hidden');

  removeToastText();
}

function animateToast(toast: HTMLElement, duration: number = DURATION_VISIBLE_DEFAULT) {
  const durationTotal = duration + 2 * DURATION_FADING;
  const fadingOffset = DURATION_FADING / durationTotal;

  const animation = toast?.animate(
    [
      { transform: 'translateY(0)', opacity: 0, easing: SHOW_EASING },
      { transform: 'translateY(32px)', opacity: 1, offset: fadingOffset },
      {
        transform: 'translateY(32px)',
        opacity: 1,
        offset: 1 - fadingOffset,
        easing: HIDE_EASING,
      },
      { transform: 'translateY(0)', opacity: 0 },
    ],
    durationTotal,
  );

  return animation.finished;
}
