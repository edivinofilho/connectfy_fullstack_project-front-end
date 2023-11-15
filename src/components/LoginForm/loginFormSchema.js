import { z } from 'zod'

export const LoginFormSchema = z.object ({

  email: z.string().nonempty('Your email please!').email('Ops, try a valid email.'),
  
  password: z.string().nonempty('Your password is a must!'),
})