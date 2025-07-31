import React, { useEffect, useState } from 'react'
import { listCamping } from '@/api/camping';
import CampingCard from '../card/CampingCard';

const CampingLists = () => {
  // useState ใช้สำหรับเก็บข้อมูล
  const [campings, setCampings] = useState([]);
  console.log('Get Camping List:', campings);

  // useEffect  ใช้สำหรับการเรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์ถูกเรียกใช้งาน
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await listCamping();
      setCampings(res.data.result);
    } catch (error) {
      console.error('Error fetching camping List:', error);
    }
  }

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      { //.map ใช้สำหรับการวนลูปข้อมูลในอาร์เรย์
        campings.map((item) => {
          return <CampingCard key={item.id} camping={item} />;
        })
      }
    </section>
  )
}

export default CampingLists