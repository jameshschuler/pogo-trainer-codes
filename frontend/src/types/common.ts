import { ToastType } from "./enums";

export type ModalType = "loading" | "info";

export interface Toast {
  type?: ToastType;
  duration?: number;
  delay?: number;
  message: string;
}
