"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

function Modal({
  isOpen,
  children,
  className,
}: ModalProps): JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div
      className={`w-[50%] min-h-[400px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-slate-500 ${className}`}
    >
      {children}
    </div>
  );
}

export default Modal;
