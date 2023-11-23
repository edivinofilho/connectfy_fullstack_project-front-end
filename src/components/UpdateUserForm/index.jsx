import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ContactContext } from "../../providers/ContactContext";
import { UserContext } from "../../providers/UserContext";

import { Input } from "../Input";
import { Link } from "react-router-dom";
import { ContactModal } from "../ContactModal";

export const UpdateUserForm = ({ setIsUpdating }) => {
  const { user, updateUser } = useContext(UserContext);
  const { deleteContact, updateContact, closeModal, isModalOpen } = useContext(ContactContext);

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
    console.log(user)
    setIsUpdating(false)
  };

  return (
    <main>

      <form onSubmit={handleSubmit(submit)}>
        <Input
          label="Username"
          type="text"
          {...register("name", { value: user.name })}
        />
  
        <Input
          label="Email Address"
          type="email"
          {...register("email", { value: user.email })}
          error={errors.email}
        />
  
        <Input
          label="Telephone Number"
          type="text"
          {...register("telephone", { value: user.telephone })}
        />
  
        <Input
          label="Password"
          type="password"
          {...register("password", { value: user.password })}
        />
  
        <button type="submit">Update Details</button>
      </form>
    </main>
  );
};
