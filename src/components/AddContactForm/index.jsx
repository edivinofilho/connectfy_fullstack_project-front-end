import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../providers/ContactContext";

import { ContactInput } from "./ContactInput";
import { StyledContactForm } from "./style";
import { ContactButton } from "./ContactButton";

export const AddContactForm = (setContactList) => {
  const { createContact } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submit = (formData) => {
    createContact(formData);
    reset();
  };

  return (
    <StyledContactForm onSubmit={handleSubmit(submit)}>
      <ContactInput
        label="Full "
        type="text"
        {...register("name")}
        error={errors.name}
      />

      <ContactInput
        label="Email Address"
        type="email"
        {...register("email")}
        error={errors.email}
      />

      <ContactInput
        label="Telephone Number"
        type="text"
        {...register("telephone")}
        error={errors.telephone}
      />

      <ContactButton text={"Add Contact"} type="submit" />
    </StyledContactForm>
  );
};
