import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormInputs = ({register,name,type,placeholder,errors}) => {

        
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>{name}</Label>
            <Input {...register(name)}  type={type} placeholder={placeholder} className={`${errors[name] &&"border-red-500"}`}/>
            {errors[name] && (
                <p className='text-red-500 text-sm mt-1'>
                    {errors[name].message}
                </p>
            )}
        </div>
    )
}

export default FormInputs