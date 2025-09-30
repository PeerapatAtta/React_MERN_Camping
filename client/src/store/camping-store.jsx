import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";
// Step 1 Create the camping store
const campingStore = (set) => ({
    campings: [],
    actionListCamping: async (id) => {
        try {
            const res = await listCamping(id);
            set({ campings: res.data.result });
        } catch (error) {
            console.error("Error fetching camping data:", error);
        }
    },
    actionAddorRemoveFavorite: async (token, data) => {
        const res = await addOrRemoveFavorite(token, data);
        console.log(res);
    }
});

const useCampingStore = create(campingStore);

export default useCampingStore;
