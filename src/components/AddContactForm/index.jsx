import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactContext } from '../../providers/ContactContext'

import { Input } from "../Input"


export const AddContactForm = (setContactList) => {
    const { createContact } = useContext(ContactContext);
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const submit = (formData) => {
        console.log(formData)
        createContact(formData)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label='Full Name' type='text' {...register('name')} error={errors.name}/>

            <Input label='Email Address' type='email' {...register('email')} error={errors.email}/>

            <Input label='Telephone Number' type='text' {...register('telephone')} error={errors.telephone}/>

            <button type='submit'>Add Contact</button>
        </form>
    )
}