import { readCamping } from '@/api/camping';
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
        <div>CampingDetail</div>
    )
}

export default CampingDetail