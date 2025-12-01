import { listMyCampings } from '@/api/admin';
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

const MyCampings = () => {

    const [campings, setCampings] = useState([]);
    const { getToken } = useAuth();

    useEffect(() => {
        fetchCampings();
    }, []);

    const fetchCampings = async () => {
        const token = await getToken();
        try {
            const res = await listMyCampings(token);
            // console.log(res.data.message);
            // console.log(res.data.result);
            setCampings(res.data.result);
        } catch (error) {
            console.error("Error fetching campings:", error);
        }
    }

    // console.log(bookings);

    return (
        <div>
            <h1>Total Camping: {campings.length}</h1>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {campings.map((item) => {
                        const { id, title, price } = item;
                        return (
                            <TableRow key={id}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{price}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default MyCampings