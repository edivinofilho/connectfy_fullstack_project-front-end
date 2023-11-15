import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '../Input'

import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormSchema } from './loginFormSchema'

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const { register, handleSubmit, formState: {errors}, reset} =useForm({
        mode: 'onBlur',
        resolver: zodResolver(LoginFormSchema)
    })

    const navigate = useNavigate()

    // const { loginUser } = useContext(UserContext)

    const submit = (formData) => {
        console.log(formData)
        // loginUser(formData)
        reset()
        navigate('/home')
      }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <Input label='Email' type='email' {...register('email')} error={errors.email}/>

                <Input label='Password' type='password' {...register('password')} error={errors.password}/>

                <button type='submit'> Login</button>
            </div>
        </form>
    )
}