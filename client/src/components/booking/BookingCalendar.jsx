import React from 'react'
import { useState, useEffect } from 'react'
import { Calendar } from '../ui/calendar';
import useBookingStore from '@/store/booking-store';

const defaultSelected = {
  from: new Date(),
  to: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Default to one day later
};

const BookingCalendar = () => {
  const [range, setRange] = useState(defaultSelected);

  useEffect(() => {
    useBookingStore.setState({
      range: range,
    });
  }, [range]);

  return (
    <>
      <Calendar
        mode="range"
        selected={range}       
        onSelect={setRange}
        className={'border border-gray-300 rounded-lg p-4 mt-2'}
      />
    </>
  )
}

export default BookingCalendar