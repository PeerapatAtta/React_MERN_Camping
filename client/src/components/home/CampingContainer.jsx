import React, { useEffect } from 'react'
import MapHome from '../map/MapHome'
import CampingLists from './CampingLists'
import useCampingStore from '@/store/camping-store'
import { useUser } from '@clerk/clerk-react'
import CategoryLists from './CategoryLists'
import { useSearchParams } from 'react-router'

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const actionFilter = useCampingStore((state) => state.actionFilter);
  const [searchParams, setSearchParams] = useSearchParams();

  //Clerk
  const { user } = useUser();
  const id = user?.id ?? null;

  const category = searchParams.get('category') || '';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    if (category || search) {
      actionFilter(category, search);
    }else if (!category && !search) {
      actionListCamping(id);
    }
  }, [category, search]);

  return (
    <div>
      <CategoryLists />
      <MapHome />
      <CampingLists />
    </div>
  )
}

export default CampingContainer