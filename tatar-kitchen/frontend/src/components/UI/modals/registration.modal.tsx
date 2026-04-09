import { RegistrationForm } from "@/app/forms/registration.form";
import { CustomModal } from "@/components/common/modal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title="Регистрация" size="sm">
      <RegistrationForm onCancel={onClose} />
    </CustomModal>
  );
};
