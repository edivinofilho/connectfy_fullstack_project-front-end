import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

import { Input } from "../Input";

import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./loginFormSchema";
import { Button } from "../Button";
import { StyledForm } from "./style";

export const LoginForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(LoginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const submit = (formData) => {
    try {
      userLogin(formData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email}
      />

      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password}
      />

      <Button text={"Login"} type="submit" />
    </StyledForm>
  );
};
