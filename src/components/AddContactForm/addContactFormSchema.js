import { z } from 'zod'

export const addContactFormSchema = z.object ({

    name: z.string().nonempty('Please add the contact name!'),
  
    email: z.string().nonempty("The contact's email please!").email('Ops, try a valid email.'),
  
    telephone: z.string().nonempty('Your password is a must!'),
})