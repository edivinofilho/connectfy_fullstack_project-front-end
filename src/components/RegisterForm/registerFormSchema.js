import { z } from 'zod';

export const registerFormSchema = z.object({
    name: z.string().nonempty("Hey, don't forget your name!"),

    email: z.string().nonempty('Oops, email is missing!').email('Enter a valid email'),

    password: z.string().nonempty('Password is a must!').min(6, 'Password')
        .regex(/(?=.*?[A-Z])/, 'Add an uppercase letter, it’s like a VIP in your password!')
        .regex(/(?=.*?[a-z])/, 'Don’t be shy, throw in a lowercase letter!')
        .regex(/(?=.*?[0-9])/, 'Numbers make passwords smarter! Add one.')
        .regex(/(?=.*?[!@#$%^&*(),.?":{}|<>])/, 'Special characters add spice! Include one.'),

    confirm: z.string().nonempty('Confirm your password'),

    telephone: z.string().nonempty('Telephone is a must!')
}).refine(({password, confirm}) => password === confirm, {
    message: 'Confirming is caring. Match the passwords, please!',
    path: ['confirm']
})