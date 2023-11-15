import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from "../Input"

import { zodResolver } from '@hookform/resolvers/zod'
import { addContactFormSchema } from './addContactFormSchema'
import { ContactList } from '../ContactList'

export const AddContactForm = (setContactList) => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const createContact = async (formData) => {
        try {
            const { data } = await api.post('/contacts', formData)

            setContactList((setContactList) => [...ContactList, data])
        } catch (error) {
            console.log(error)
        }
    }

    const submit = (formData) => {
        console.log(formData)
        // await createContact(formData)
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