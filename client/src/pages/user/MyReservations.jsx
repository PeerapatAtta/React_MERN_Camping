import ReservationsContainer from '@/components/admin/ReservationsContainers'
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
import { formatDate, formatNumber } from '@/utils/formats';
import { listAllReservations } from '@/api/admin';

const MyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const { getToken } = useAuth();

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const token = await getToken();
    try {
      const res = await listAllReservations(token);
      setReservations(res.data.result);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }

  return (
    <div>
      <ReservationsContainer />
      <div className='mt-8'>
        <h1>Total Reservations: {reservations.length}</h1>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Booking ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Total Nights</TableHead>
              <TableHead>Total Price</TableHead>
              <TableHead>Checkin</TableHead>
              <TableHead>Checkout</TableHead>
              {/* <TableHead>Invoice</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {reservations?.map((item) => {
              // console.log(item);
              const { id, total, totalNights, checkIn, checkOut } = item;
              const { title } = item.landmark;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{totalNights}</TableCell>
                  <TableCell>{formatNumber(total)}THB</TableCell>
                  <TableCell>{formatDate(checkIn)}</TableCell>
                  <TableCell>{formatDate(checkOut)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default MyReservations