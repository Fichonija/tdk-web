import { HIDE_EASING, TOAST_ID } from './const';
import { removeToastText } from './utils';

export async function removeToast() {
  const toast = document.getElementById(TOAST_ID)!;

  toast.getAnimations().pop()?.cancel();
  await animateHideToast(toast);

  toast.classList.toggle('hidden');
  removeToastText();
}

function animateHideToast(toast: HTMLElement) {
  const animation = toast?.animate(
    [
      { transform: 'translateY(32px)', opacity: 1, easing: HIDE_EASING },
      { transform: 'translateY(0)', opacity: 0 },
    ],
    1000,
  );

  return animation.finished;
}
