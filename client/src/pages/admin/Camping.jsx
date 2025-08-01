import FormInputs from '@/components/form/FormInputs';
import TextAreaInput from '@/components/form/TextAreaInput';
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { campingSchema } from '@/utils/schemas';
import Buttons from '@/components/form/Buttons';
import CategoryInput from '@/components/form/CategoryInput';
import Mainmap from '@/components/map/Mainmap';
import { createCamping } from '@/api/camping';
import { useAuth } from '@clerk/clerk-react'; // useAuth ใช้เพื่อจัดการการยืนยันตัวตนของผู้ใช้
import FormUploadImage from '@/components/form/FormUploadImage';
import { createAlert } from '@/utils/createAlert';



const Camping = () => {
  const { getToken } = useAuth(); // ดึงข้อมูลผู้ใช้ที่เข้าสู่ระบบจาก useAuth
  const { register, handleSubmit, formState, setValue, reset } = useForm({ resolver: zodResolver(campingSchema) });
  const { errors, isSubmitting } = formState;

  console.log(isSubmitting);

  const hdlSubmit = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken(); // ดึง token สำหรับการยืนยันตัวตนของผู้ใช้
    console.log(data);
    createCamping(token, data)
      .then((res) => {
        console.log(res.data);
        reset(); // รีเซ็ตฟอร์มหลังจากการส่งข้อมูลสำเร็จ
        createAlert('success', 'Camping created successfully!'); // แสดงข้อความแจ้งเตือนเมื่อสร้าง Camping สำเร็จ
      })
      .catch((err) => {
        console.error(err);
        createAlert('error', 'Failed to create camping!'); // แสดงข้อความแจ้งเตือนเมื่อสร้าง Camping ไม่สำเร็จ
      });
  };


  return (
    <section >
      <h1 className='capitalize text-2xl font-semibold mb-4' >
        Create Camping
      </h1>
      <div className='border p-8 rounded-md'>
        <form onSubmit={handleSubmit(hdlSubmit)} >
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInputs register={register} name='title' type='text' placeholder='Input your Title' errors={errors} />
            <FormInputs register={register} name='price' type='number' placeholder='Input your Price' errors={errors} />
            <TextAreaInput register={register} name='description' type='text' placeholder='Input your Desciption' errors={errors} />
            <div>
              <CategoryInput
                name='category'
                register={register}
                setValue={setValue}
              />
              <FormUploadImage setValue={setValue} />
            </div>
          </div>
          <Mainmap register={register} setValue={setValue} />
          <Buttons
            text="Create Camping"
            isPending={isSubmitting}
          />
        </form>
      </div>
    </section>
  )
}

export default Camping