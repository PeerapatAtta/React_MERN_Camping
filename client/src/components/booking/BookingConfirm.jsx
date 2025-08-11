/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import Buttons from '../form/Buttons'
import useBookingStore from '@/store/booking-store'
import { SignInButton, useAuth } from '@clerk/clerk-react';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { createBooking } from '@/api/booking';

const BookingConfirm = () => {
    // Zustand
    const range = useBookingStore((state) => state.range);
    const checkIn = range?.from;
    const checkOut = range?.to;
    const campingId = useBookingStore((state) => state.campingId);
    // Clerk
    const { getToken, userId } = useAuth();
    // Hook form
    const { handleSubmit, setValue, formState } = useForm();
    const { isSubmitting } = formState;

    if (!userId) {
        return (
            <div className='flex justify-center'>
                <SignInButton mode='modal' forceRedirectUrl={`/user/camping/${campingId}`}>
                    <Button>Sign In</Button>
                </SignInButton>
            </div>
        )
    }

    useEffect(() => {      
        if (campingId) setValue('campingId', campingId);
        if (checkIn) setValue('checkIn', checkIn);
        if (checkOut) setValue('checkOut', checkOut);
    }, [range]);  

    const hdlBooking = async (value) => {
        const token = await getToken();
        try {
            const res = await createBooking(token, value);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex justify-center'>
            <form action="" onSubmit={handleSubmit(hdlBooking)}>   
                <Buttons text="Confirm Booking" isPending={isSubmitting} />
            </form>
        </div>
    )
}

export default BookingConfirm