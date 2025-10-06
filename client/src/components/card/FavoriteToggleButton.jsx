//rafce
import React from 'react'
import { CardSignInButtons, CardSubmitButtons } from './CardButtons'
import useCampingStore from '@/store/camping-store'
import { useForm } from 'react-hook-form'
import { useAuth } from '@clerk/clerk-react'
import { createNotify } from '@/utils/createAlert'

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
    // Clerk
    const { getToken, isSignedIn } = useAuth();
    // const { user } = useUser();
    //HookForm
    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    // Zustand
    const actionAddorRemoveFavorite = useCampingStore((state) => state.actionAddorRemoveFavorite);
    // const actionListCamping = useCampingStore((state) => state.actionListCamping);

    const hdSubmit = async () => {
        await new Promise((r) => setTimeout(r, 1000));
        const token = await getToken()
        // console.log("Token:",token);
        const res = await actionAddorRemoveFavorite(token, { campingId, isFavorite });
        // console.log(res);
        if (res.success) {
            createNotify("success",res.message);
        } else {
            createNotify("error",res.message);
        }
    }

    if (!isSignedIn) {
        return <CardSignInButtons />
    }

    // console.log(campingId, isFavorite)
    return (
        <form onSubmit={handleSubmit(hdSubmit)}>
            <CardSubmitButtons isPending={isSubmitting} isFavorite={isFavorite} />
        </form>
    )
}

export default FavoriteToggleButton