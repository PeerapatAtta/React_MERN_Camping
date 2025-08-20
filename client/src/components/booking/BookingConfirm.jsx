import React, { useEffect } from 'react'
import Buttons from '../form/Buttons'
import useBookingStore from '@/store/booking-store'
import { SignInButton, useAuth } from '@clerk/clerk-react';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { createBooking } from '@/api/booking';
import { useNavigate } from 'react-router';


const BookingConfirm = () => {
    // Zustand
    const range = useBookingStore((state) => state.range);
    const checkIn = range?.from;
    const checkOut = range?.to;
    const campingId = useBookingStore((state) => state.campingId);
    // console.log("Booking Details:", { campingId, checkIn, checkOut, range });
    // Clerk
    const { getToken, userId } = useAuth();
    // Hook form
    const { handleSubmit, setValue, formState } = useForm();
    const { isSubmitting } = formState;
    // Navigate
    const navigate = useNavigate();

    // if (!userId) {
    //     return (
    //         <div className='flex justify-center'>
    //             <SignInButton mode='modal' forceRedirectUrl={`/user/camping/${campingId}`}>
    //                 <Button>Sign In</Button>
    //             </SignInButton>
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //     if (campingId) setValue('campingId', campingId);
    //     if (checkIn) setValue('checkIn', checkIn);
    //     if (checkOut) setValue('checkOut', checkOut);
    // }, []);

    // เรียก hooks เสมอ ไม่ว่าสถานะ userId จะเป็นอะไร
    useEffect(() => {
        setValue('campingId', campingId ?? '')
        setValue('checkIn', checkIn ? new Date(checkIn).toISOString() : '')
        setValue('checkOut', checkOut ? new Date(checkOut).toISOString() : '')
    }, [campingId, checkIn, checkOut, setValue])

    // const hdlBooking = async (value) => {
    //     console.log("Booking Values:", value);
    //     const token = await getToken();
    //     try {
    //         const res = await createBooking(token, value);
    //         console.log(res);
    //         const bookingId = res.data.result;
    //         navigate(`/user/checkout/${bookingId}`);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const hdlBooking = async (values) => {
        try {
            const token = await getToken()
            const payload = {
                campingId: Number(values.campingId),
                checkIn: values.checkIn,
                checkOut: values.checkOut
            }            
            const res = await createBooking(token, payload)
            console.log("Booking Response:", res)
            console.log("Booking Token:", token)
            console.log("Booking Payload:", payload)
           
            const bookingId = res?.data?.result?.bookingId ?? res?.data?.result
            if (!bookingId) return console.error('No bookingId from API', res?.data)
            navigate(`/user/checkout/${bookingId}`);

        } catch (err) {
            console.error(err)
        }
    }

    return (
        // <div className='flex justify-center'>
        //     <form action="" onSubmit={handleSubmit(hdlBooking)}>
        //         <Buttons text="Confirm Booking" isPending={isSubmitting} />
        //     </form>
        // </div>
        <div className='flex justify-center'>
            {!userId ? (
                <SignInButton mode='modal' forceRedirectUrl={`/user/camping/${campingId ?? ''}`}>
                    <Button>Sign In</Button>
                </SignInButton>
            ) : (
                <form onSubmit={handleSubmit(hdlBooking)}>
                    <Buttons text="Confirm Booking" isPending={isSubmitting} />
                </form>
            )}
        </div>
    )
}

export default BookingConfirm