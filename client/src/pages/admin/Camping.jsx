import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import campingSchema from '@/utils/schemas';
import { Button } from '@/components/ui/button';
import Buttons from '@/components/form/Buttons';


const Camping = () => {

    const { register, handleSubmit,formState } = useForm({resolver: zodResolver(campingSchema)});

    const { errors } = formState;    

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
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
                        <FormInputs register={register} name='title' type='text' placeholder='Input your Title' errors={errors} />
                        <FormInputs register={register} name='price' type='number' placeholder='Input your Price' errors={errors} />
                        <TextAreaInput register={register} name='description' type='text' placeholder='Input your Desciption' errors={errors}/>
                    </div>
                    <Buttons text="Create Camping" isPending={isSubmitting}/>
                </form>
            </div>
        </section>
    )
}

export default Camping