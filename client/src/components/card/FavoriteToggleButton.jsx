//rafce
import React from 'react'
import { CardSubmitButtons } from './CArdButtons'
import useCampingStore from '@/store/camping-store'
import { useForm } from 'react-hook-form'
import { useAuth } from '@clerk/clerk-react'

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
    // Clerk
    const { getToken } = useAuth();
    //HookForm
    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    // Zustand
    const actionAddorRemoveFavorite = useCampingStore((state) => state.actionAddorRemoveFavorite);

    const hdSubmit = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const token = await getToken()
        // console.log("Token:",token);
        const res = await actionAddorRemoveFavorite(token,{campingId, isFavorite});
    }


    // console.log(campingId, isFavorite)
    return (
        <form onSubmit={handleSubmit(hdSubmit)}>
            <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite} />
        </form>
    )
}

export default FavoriteToggleButton