import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../providers/ContactContext";

import { Input } from "../Input";

export const UpdateContactForm = ({ contact, setIsUpdating }) => {
  const { updateContact, setIsModalOpen, closeModal } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    reset(); 
    closeModal()
  }, [contact, reset, closeModal]);

  const submit = (formData) => {
    updateContact(contact.id, formData);
    reset();
    setIsUpdating(false)
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Input
        label="Full Name"
        type="text"
        {...register("name", { value: contact.name })}
      />

      <Input
        label="Email Address"
        type="email"
        {...register("email", { value: contact.email })}
        error={errors.email}
      />

      <Input
        label="Telephone Number"
        type="text"
        {...register("telephone", { value: contact.telephone })}
      />

      <button type="submit">Update Contact</button>
    </form>
  );
};
