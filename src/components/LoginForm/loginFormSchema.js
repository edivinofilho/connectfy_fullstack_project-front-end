import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Hey, don't forget to add your email!")
    .email("Ops, try a valid email."),

  password: z.string().nonempty("Your password is a must!"),
});
