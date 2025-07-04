import React from 'react'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FormInputs = ({register,name,type,placeholder}) => {
    
    return (
        <div className='mb-2'>
            <Label htmlFor={name} className='capitalize'>{name}</Label>
            <Input {...register(name)}  type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormInputs