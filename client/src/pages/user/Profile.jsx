import FormInputs from '@/components/form/FormInputs';
import React from 'react'
import { useForm } from 'react-hook-form'
import Buttons from '@/components/form/Buttons';
import axios from 'axios';

const Profile = () => {
  const { register, handleSubmit, formState} = useForm(); // useForm ใช้เพื่อจัดการฟอร์ม 
  const { errors, isSubmitting } = formState; // formState ใช้เพื่อจัดการสถานะของฟอร์ม เช่น ข้อผิดพลาดและสถานะการส่ง

  const onSubmit = async (data) => {

    await axios.post('http://localhost:5000/api/profile', data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section >
      <h1 className='capitalize text-2xl font-semibold mb-4' >
        Create Profile
      </h1>
      <div className='border p-8 rounded-md'>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInputs register={register} name='firstname' type='text' placeholder='Input your firstname' errors={errors} />
            <FormInputs register={register} name='lastname' type='text' placeholder='Input your lastname' errors={errors} />
          </div>
          <Buttons text="Create Profile" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  )
}

export default Profile