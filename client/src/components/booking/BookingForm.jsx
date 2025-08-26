import React from 'react'
import useBookingStore from '@/store/booking-store'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { calTotal } from '@/utils/booking'
import { formatNumber } from '@/utils/formats'
import BookingConfirm from './BookingConfirm'


const BookingForm = () => {
  const price = useBookingStore((state) => state.price);
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;

  const result = calTotal(checkIn, checkOut, price);

  if (!range || !range.from || !range.to) return null;

  return (
    <div>
      <Card className="p-8 my-2">
        <CardTitle className="text-left">Booking Summary</CardTitle>
        <p className="flex justify-between">
          <span>{`${formatNumber(price)} THB x ${formatNumber(result.totalNight)} day = `}</span>
          <span className='font-semibold'>{` ${formatNumber(result.total)} THB`}</span>
        </p>
      </Card>
      <BookingConfirm />
    </div>
  )
}

export default BookingForm