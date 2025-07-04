import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react'
import { useForm } from 'react-hook-form'


const Camping = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <section >
            <h1 className='capitalize text-2xl font-semibold mb-4' >
                Create Camping
            </h1>
            <div className='border p-8 rounded-md'>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className='grid md:grid-cols-2 gap-4 mt-4'>
                        <FormInputs register={register} name='title' type='text' placeholder='Input your Title' />
                        <FormInputs register={register} name='price' type='number' placeholder='Input your Price' />
                        <TextAreaInput register={register} name='description' type='text' placeholder='Input your Desciption' />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Camping