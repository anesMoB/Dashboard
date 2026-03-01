

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z, ZodEnum, ZodNumber, ZodString, ZodType } from 'zod'


export enum UserRole {
    Admin = "admin",
    User = "user",
}
export type FormSchema = {
    FirstName: string,
    LastName: string,
    Email: string,
    Age: number
    Password: string,
    ConfirmPassword: string,
    Role: UserRole,
}
export const schema = z.object({
    FirstName: z.string().min(2, "First name must be at least 2 characters."),
    LastName: z.string().min(2, "Last name must be at least 2 characters."),
    Email: z.email("Please enter a valid email address."),
    Age: z.number().min(18, { message: "You must be at least 18 years old." }).max(100, { message: "Age must be less than 100." }),
    Password: z.string().min(6, "Password must be at least 6 characters."),
    ConfirmPassword: z.string().min(6, "Confirm password must be at least 6 characters."),
    Role: z.enum(Object.values(UserRole), "Role must be either 'admin' or 'user'."),
}).refine((data) => data.Password === data.ConfirmPassword, {
    message: "Passwords don't match.",
    path: ["ConfirmPassword"],
});

function ZodWithUseFormHook() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            FirstName: '',
            LastName: '',
            Email: '',
            Age: 18,
            Password: '',
            ConfirmPassword: '',
            Role: UserRole.User,
        }
    });
    const onSubmit = (data: FormSchema) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  items-center gap-4 mt-4'>


            <input type='text' {...register('FirstName')} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.FirstName && 'inputError'}`} />
            {errors.FirstName && <p className='inputErrorText'>{errors.FirstName.message}</p>}


            <input type='text' {...register('LastName')} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.LastName && 'inputError'}`} />
            {errors.LastName && <p className='inputErrorText'>{errors.LastName.message}</p>}


            <input type='email' {...register('Email')} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.Email && 'inputError'}`} />
            {errors.Email && <p className='inputErrorText'>{errors.Email.message}</p>}


            <input type='number' {...register('Age',{valueAsNumber:true})} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.Age && 'inputError'}`} />
            {errors.Age && <p className='inputErrorText'>{errors.Age.message}</p>}


            <input type='password' {...register('Password')} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.Password && 'inputError'}`} />
            {errors.Password && <p className='inputErrorText'>{errors.Password.message}</p>}


            <input type='password' {...register('ConfirmPassword')} className={`rounded-lg px-2 py-1 border border-gray-600 ${errors.ConfirmPassword && 'inputError'}`} />
            {errors.ConfirmPassword && <p className='inputErrorText'>{errors.ConfirmPassword.message}</p>}


            <button type="submit" className='border border-gray-700 bg-gray-900 rounded-lg cursor-pointer py-2 px-3 hover:bg-gray-950'>Submit</button>
        </form>
    )
}

export default ZodWithUseFormHook