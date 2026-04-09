"use client";

import { type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "full";

const sizeClasses: Record<ModalSize, string> = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  size?: ModalSize;
}

const portalId = "app-modal-root";

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
}: IProps) {
  const isBrowser = typeof window !== "undefined";

  if (!isOpen || !isBrowser) {
    return null;
  }

  const maxWidth = sizeClasses[size] ?? sizeClasses.md;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        className={`relative z-10 w-full ${maxWidth} max-h-[90vh] overflow-hidden rounded-[32px] border border-amber-500/40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.7)] ring-1 ring-amber-400/40`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-amber-200">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-2xl font-medium text-amber-300 transition-colors hover:text-amber-100"
          >
            ×
          </button>
        </div>
        <div className="mt-6 text-left text-gray-100">
          <div className="mx-auto w-full max-w-[420px] space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") {
    return modalContent;
  }

  let container = document.getElementById(portalId);
  if (!container) {
    container = document.createElement("div");
    container.id = portalId;
    document.body.appendChild(container);
  }

  return createPortal(modalContent, container);
}
