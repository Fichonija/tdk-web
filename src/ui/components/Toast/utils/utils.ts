import { TOAST_CONTAINER_ID, TOAST_HELPER_TEXT_ID, TOAST_TEXT_ID } from './const';
import type { ToastVariant } from './types';

export function addToastText(text: string, helperText?: string) {
  const toastText = document.getElementById(TOAST_TEXT_ID)!;
  toastText.innerText = text;

  if (helperText) {
    const toastHelperText = document.getElementById(TOAST_HELPER_TEXT_ID)!;
    toastHelperText.innerText = helperText;
  }
}

export function removeToastText() {
  const toastText = document.getElementById(TOAST_TEXT_ID)!;
  toastText.innerText = '';

  const toastHelperText = document.getElementById(TOAST_HELPER_TEXT_ID)!;
  toastHelperText.innerText = '';
}

const SUCCESS_BG_CLASS = 'bg-green-600';
const DANGER_BG_CLASS = 'bg-red-600';

export function paintToast(variant: ToastVariant) {
  const toastContainer = document.getElementById(TOAST_CONTAINER_ID)!;

  removeCurrentToastPaint(toastContainer);

  switch (variant) {
    case 'success':
      toastContainer.classList.add(SUCCESS_BG_CLASS);
      break;
    case 'danger':
      toastContainer.classList.add(DANGER_BG_CLASS);
      break;
  }
}

function removeCurrentToastPaint(toastContainer: HTMLElement) {
  toastContainer.classList.remove(SUCCESS_BG_CLASS);
  toastContainer.classList.remove(DANGER_BG_CLASS);
}
