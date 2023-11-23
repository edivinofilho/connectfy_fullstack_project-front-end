import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../providers/ContactContext";

import { Input } from "../Input";
import { StyledContactForm } from "../AddContactForm/style";
import { ContactInput } from "../AddContactForm/ContactInput";
import { ContactButton } from "../AddContactForm/ContactButton";

export const UpdateContactForm = ({ contact, setIsUpdating }) => {
  const { updateContact, setIsModalOpen, closeModal } =
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
  }, [contact, reset, closeModal]);

  const submit = (formData) => {
    updateContact(contact.id, formData);
    reset();
    setIsUpdating(false);
  };

  return (
    <StyledContactForm onSubmit={handleSubmit(submit)}>
      <ContactInput
        label="Full Name"
        type="text"
        {...register("name", { value: contact.name })}
      />

      <ContactInput
        label="Email Address"
        type="email"
        {...register("email", { value: contact.email })}
        error={errors.email}
      />

      <ContactInput
        label="Telephone Number"
        type="text"
        {...register("telephone", { value: contact.telephone })}
      />

      <ContactButton text={"Update Details"} type="submit" />
    </StyledContactForm>
  );
};
