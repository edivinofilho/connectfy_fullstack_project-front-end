import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { registerFormSchema } from "./registerFormSchema";

import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";
import { Button } from "../Button";
import { StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const submit = (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <StyledRegisterForm onSubmit={handleSubmit(submit)}>
      <>
        <Input
          label="Name"
          type="text"
          {...register("name")}
          error={errors.name}
        />

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

        <Input
          label="Confirm Password"
          type="password"
          {...register("confirm")}
          error={errors.confirm}
        />

        <Input
          label="Phone Number"
          {...register("telephone")}
          type="text"
          error={errors.telephone}
        />

        <Button text={"Register"} type="submit" />
      </>
    </StyledRegisterForm>
  );
};
