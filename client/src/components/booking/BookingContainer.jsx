import React, { useEffect } from 'react'
import BookingCalendar from './BookingCalendar'
import BookingForm from './BookingForm'
import useBookingStore from '@/store/booking-store';

const BookingContainer = ({ campingId, price, bookings }) => {

  useEffect(() => {
    useBookingStore.setState({
      campingId: campingId,
      price: price,
      bookings: bookings,
    });
  }, [campingId, price, bookings]);

  return (
    <div className='flex flex-col mb-8'>
        <BookingCalendar />
        <BookingForm />
    </div>
  )
}

export default BookingContainer