export type ToastVariant = 'success' | 'danger';

export interface ShowToastOptions {
  text: string;
  helperText?: string;
  variant: ToastVariant;
  duration?: number;
}
