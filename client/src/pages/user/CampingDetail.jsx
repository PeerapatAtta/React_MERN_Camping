/* eslint-disable react-hooks/exhaustive-deps */
import { readCamping } from '@/api/camping';
import BookingContainer from '@/components/booking/BookingContainer';
import Breadcrums from '@/components/campings/Breadcrums';
import Description from '@/components/campings/Description';
import ImageContainer from '@/components/campings/ImageContainer';
import Mainmap from '@/components/map/Mainmap';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const CampingDetail = () => {
    const [camping, setCamping] = useState([]);
    const { id } = useParams(); // Assuming you are using react-router to get the camping ID from the URL

    useEffect(() => {
        fetchCampingDetail(id);
    }, []);

    const fetchCampingDetail = async (id) => {
        try {
            const response = await readCamping(id);
            setCamping(response.data.result);
        } catch (error) {
            console.error("Error fetching camping detail:", error);
        }
    };
    console.log(camping);

    return (
        <div>
            <Breadcrums name={camping.title} />
            <header className='flex justify-between items-center p-4 bg-gray-100 mt-4'>
                <h1 className='text-2xl font-bold'>{camping.title}</h1>
                <div className='flex space-x-4'>
                    <p>Share</p>
                    <p>Favorite</p>
                </div>
            </header>
            <ImageContainer image={camping.secure_url} name={camping.name} />
            <section className='p-4'>
                <div className='grid grid-cols-1 lg:grid-cols-6 gap-4'>
                    <Description text={camping.description} />
                    {camping.lat && <Mainmap location={[camping.lat, camping.lng]} />}
                </div>
                <div className='lg:col-span-4 flex flex-col items-center'>
                    <BookingContainer 
                        campingId={camping.id}
                        price={camping.price}
                        booking={[]}
                    />
                </div>
            </section>
        </div>
    )
}

export default CampingDetail