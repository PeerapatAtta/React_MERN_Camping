//rafce
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { resizeFile } from '@/utils/resizeimage'
import { uploadImage } from '@/api/uploadfile'
import { useAuth } from '@clerk/clerk-react'
import { useState } from 'react'
import { RotateCw } from 'lucide-react'

const FormUploadImage = ({ setValue }) => {
    const [isLoading, setIsLoading] = useState(false); // isLoading ใช้เพื่อจัดการสถานะการโหลดของการอัปโหลดไฟล์
    const { getToken } = useAuth() // useAuth ใช้เพื่อจัดการการยืนยันตัวตนของผู้ใช้

    const hdlOnChange = async (e) => {
        setIsLoading(true); // ตั้งค่า isLoading เป็น true เมื่อเริ่มการอัปโหลด
        const token = await getToken(); // Get the token from Clerk
        const file = e.target.files[0];
        if (!file) return;
        try {
            const resizedImage = await resizeFile(file);
            const res = await uploadImage(token, resizedImage);
            console.log("Image uploaded successfully:", res.data.result);
            setValue('image', res.data.result); // Set the uploaded image URL in the form state
            setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อการอัปโหลดเสร็จสิ้น
        } catch (error) {
            console.error("Error uploading file:", error);
            setIsLoading(false); // ตั้งค่า isLoading เป็น false เมื่อเกิดข้อผิดพลาด
        }
    }

    return (
        <div>
            <Label className='text-sm font-semibold my-2'>
                Upload Image
            </Label>
            <div className='flex items-center gap-2'>
                <Input type="file" onChange={hdlOnChange} />
                {isLoading && <RotateCw className={`${isLoading ? 'animate-spin' : ''}`} />}
            </div>
        </div>
    )
}

export default FormUploadImage