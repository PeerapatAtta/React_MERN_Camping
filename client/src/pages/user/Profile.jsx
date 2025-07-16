import FormInputs from '@/components/form/FormInputs';
import React from 'react'
import { useForm } from 'react-hook-form'
import Buttons from '@/components/form/Buttons';
import { profileSchema } from '@/utils/schemas'; // profileSchema ใช้สำหรับการตรวจสอบความถูกต้องของข้อมูลฟอร์ม
import { zodResolver } from '@hookform/resolvers/zod'; // zodResolver ใช้สำหรับเชื่อมต่อกับ Zod schema เพื่อการตรวจสอบความถูกต้องของข้อมูลฟอร์ม
import { useAuth } from '@clerk/clerk-react'; // useAuth ใช้เพื่อจัดการการยืนยันตัวตนของผู้ใช้
import { createProfile } from '@/api/profile';

const Profile = () => {
  const { getToken, userId } = useAuth(); // ดึงข้อมูลผู้ใช้ที่เข้าสู่ระบบจาก useAuth
  const { register, handleSubmit, formState } = useForm({ resolver: zodResolver(profileSchema) }); // useForm ใช้เพื่อจัดการฟอร์ม 
  const { errors, isSubmitting } = formState; // formState ใช้เพื่อจัดการสถานะของฟอร์ม เช่น ข้อผิดพลาดและสถานะการส่ง

  const onSubmit = async (data) => {
    const token = await getToken(); // ดึง token สำหรับการยืนยันตัวตนของผู้ใช้
    createProfile(token, data)
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