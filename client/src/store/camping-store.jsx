import { addOrRemoveFavorite, listCamping } from "@/api/camping";
import { create } from "zustand";
// Step 1 Create the camping store
const campingStore = (set, get) => ({
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
        try {
            const res = await addOrRemoveFavorite(token, data);
            const camping = get().campings;
            // console.log(camping);
            const updatedCampings = camping.map(item => {
                return item.id === data.campingId
                    ? { ...item, isFavorite: !data.isFavorite }
                    : item;
            });
            set({ campings: updatedCampings });
            // console.log(res.data.message);
            return { success: true, message: res.data.message };
        } catch (error) {
            // console.error("Error adding/removing favorite:", error);
            return { success: false, message: error?.response?.data?.message || error.message };
        }
    }
});

const useCampingStore = create(campingStore);

export default useCampingStore;
