"use client";

import { LoginForm } from "@/app/forms/login.form";
import { CustomModal } from "@/components/common/modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Войти" size="sm">
      <LoginForm onCancel={onClose} />
    </CustomModal>
  );
};
