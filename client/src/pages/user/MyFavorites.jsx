//rafce
import CampingCard from '@/components/card/CampingCard';
import useCampingStore from '@/store/camping-store';
import { useAuth } from '@clerk/clerk-react';
import React, { useEffect } from 'react'

const MyFavorites = () => {
    const { getToken } = useAuth();
    const actionListFavorites = useCampingStore((state) => state.actionListFavorites);
    const favorites = useCampingStore((state) => state.favorites);

    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const token = await getToken();
        actionListFavorites(token);
    };

    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {favorites.map((item) => {
                return <CampingCard key={item.id} camping={item.landmark} />;
            })}
        </section>
    )
}

export default MyFavorites