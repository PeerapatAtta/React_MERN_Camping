import React from 'react'
import CampingCard from '../card/CampingCard';
import useCampingStore from '@/store/camping-store';

const CampingLists = () => {

  const campings = useCampingStore((state) => state.campings);

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