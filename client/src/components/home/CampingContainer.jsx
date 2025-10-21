import React, { useEffect } from 'react'
import MapHome from '../map/MapHome'
import CampingLists from './CampingLists'
import useCampingStore from '@/store/camping-store'
import { useUser } from '@clerk/clerk-react'
import CategoryLists from './CategoryLists'

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  //Clerk
  const { user } = useUser();
  // console.log(user);

  useEffect(() => {
    const id = user?.id ?? null;
    // console.log("User ID:", id);
    actionListCamping(id)
  }, [user?.id]);

  return (
    <div>
      <CategoryLists />
      <MapHome />
      <CampingLists />
    </div>
  )
}

export default CampingContainer