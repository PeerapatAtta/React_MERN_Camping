//RAFCE
import React, { useEffect, useState } from 'react'
import StateCard from './StateCard'
import { listReservations } from '@/api/admin';
import { useAuth } from '@clerk/clerk-react';


const ReservationsContainer = () => {

    const [data, setData] = useState();
    const { getToken } = useAuth();

    useEffect(() => {
        fetchStates()
    }, [])

    const fetchStates = async () => {
        const token = await getToken();
        try {
            const res = await listReservations(token);
            console.log("State data:", res.data);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching state data:", error);
        }
    }

    return (
        <div className='mt-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <StateCard label="Campings" value={data?.campings||0} />
            <StateCard label="Nights" value={data?.nights||0} />
            <StateCard label="Totals" value={data?.totals||0} />
        </div>
    )
}

export default ReservationsContainer