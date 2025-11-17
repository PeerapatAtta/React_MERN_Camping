//RAFCE
import React, { useEffect, useState } from 'react'
import StateCard from './StateCard'
import { listStates } from '@/api/admin';
import { useAuth } from '@clerk/clerk-react';


const StateContainer = () => {

    const [data, setData] = useState();
    const { getToken } = useAuth();

    useEffect(() => {
        fetchStates()
    }, [])

    const fetchStates = async () => {
        const token = await getToken();
        try {
            const res = await listStates(token);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching state data:", error);
        }
    }

    return (
        <div className='mt-4 gap-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            <StateCard label="Users" value={data?.usersCount||0} />
            <StateCard label="Campings" value={data?.campingsCount||0} />
            <StateCard label="Bookings" value={data?.bookingsCount||0} />
        </div>
    )
}

export default StateContainer