//rafce
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { resizeFile } from '@/utils/resizeimage'
import { uploadImage } from '@/api/uploadfile'
import { useAuth } from '@clerk/clerk-react'

const FormUploadImage = () => {

    const { getToken } = useAuth() // Assuming you have a hook to get the token

    const hdlOnChange = async (e) => {
        const token = await getToken(); // Get the token from Clerk
        const file = e.target.files[0];
        if (!file) return;
        try {
            const resizedImage = await resizeFile(file);
            const res = await uploadImage(token, resizedImage);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    }

    return (
        <div>
            <Label className='text-sm font-semibold my-2'>
                Upload Image
            </Label>
            <div>
                <Input type="file" onChange={hdlOnChange} />
            </div>
        </div>
    )
}

export default FormUploadImage