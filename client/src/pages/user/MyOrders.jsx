import { listBookings } from '@/api/booking';
import { useAuth } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const MyOrders = () => {

  const [bookings, setBookings] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    const token = await getToken();
    try {
      const res = await listBookings(token);
      // console.log(res.data.message);
      // console.log(res.data.result);
      setBookings(res.data.result);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }

  // console.log(bookings);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Booking ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Total Day</TableHead>
            <TableHead>Total Price</TableHead>
            <TableHead>Checkin</TableHead>
            <TableHead>Checkout</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((item) => {
            console.log(item);
            const {id, total, totalNights, checkIn, checkOut} = item;
            const {title} = item.landmark;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{total}THB</TableCell>
                <TableCell>{checkIn}</TableCell>
                <TableCell>{checkOut}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default MyOrders