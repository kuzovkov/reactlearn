import { RegistrationForm } from "@/app/forms/registration.form"
import { CustomModal } from "@/components/common/modal"



export const RegistrationModal = ({ isOpen, onClose, title, children }) => {

  return (
      <CustomModal isOpen={isOpen} onClose={onClose} title={title}>
        <RegistrationForm></RegistrationForm>

      </CustomModal>

    )


}