import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ContactContext } from "../../providers/ContactContext";
import { UserContext } from "../../providers/UserContext";
import { ContactButton } from "../AddContactForm/ContactButton";
import { StyledContactForm } from "../AddContactForm/style";
import { ContactInput } from "../AddContactForm/ContactInput";

export const UpdateUserForm = ({ setIsUpdating }) => {
  const { user, updateUser } = useContext(UserContext);
  const { deleteContact, updateContact, closeModal, isModalOpen } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset();
    closeModal();
  }, [user, reset, closeModal]);

  const submit = (formData) => {
    updateUser(user.id, formData);
    reset();
    setIsUpdating(false);
  };

  return (
    <main>
      <StyledContactForm onSubmit={handleSubmit(submit)}>
        <ContactInput
          label="Username"
          type="text"
          {...register("name", { value: user.name })}
        />

        <ContactInput
          label="Email Address"
          type="email"
          {...register("email", { value: user.email })}
          error={errors.email}
        />

        <ContactInput
          label="Telephone Number"
          type="text"
          {...register("telephone", { value: user.telephone })}
        />

        <ContactButton text={"Update Details"} type="submit" />
      </StyledContactForm>
    </main>
  );
};
