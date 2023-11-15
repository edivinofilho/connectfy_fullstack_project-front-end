import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../Input'
import { registerFormSchema } from './registerFormSchema'
import { useNavigate } from 'react-router-dom'

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(registerFormSchema)
    })

    const navigate = useNavigate()

    const userRegister = async (formData) => {
        try {
            const response = await api.post('/users', formData)
            console.log('Cadastro efetuado com sucesso!')
            navigate('/')

            //Adicionar Toatfy Success

        } catch (error) {
            console.log(error)

            //Adicionar Toatfy Error
        }
    }

    const submit = (formData) => {
        // userRegister(formData)
        console.log(formData)
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <Input label='Name' type='text' {...register('name')} error={errors.name}/>

                <Input label='Email' type='email'{...register('email')} error={errors.email}/>

                <Input label='Password' type='password' {...register('password')} error={errors.password}/>
                
                <Input label='Confirm Password' type='password' {...register('confirm')} error={errors.confirm}/>
                
                <Input label='Phone Number' {...register('telephone')}type='text' error={errors.telephone}/>
                
                <button type='submit'> Register</button>
            </div>
        </form>
    )
}