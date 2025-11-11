import { addOrRemoveFavorite, filterCamping, listCamping, listFavorites } from "@/api/camping";
import { create } from "zustand";
// Step 1 Create the camping store
const campingStore = (set, get) => ({
    campings: [],
    favorites: [],
    center: null,
    actionListCamping: async (id) => {
        try {
            const res = await listCamping(id);
            set({ campings: res.data.result, center: res.data.center });
        } catch (error) {
            console.error("Error fetching camping data:", error);
        }
    },
    actionAddorRemoveFavorite: async (token, data) => {
        try {
            const res = await addOrRemoveFavorite(token, data);
            const camping = get().campings;
            const { campingId, isFavorite } = data;

            const updatedCampings = camping.map(item => {
                return item.id === campingId
                    ? { ...item, isFavorite: !isFavorite }
                    : item;
            });

            set({ campings: updatedCampings });

            // Update favorites list if the item was removed from favorites
            const favorites = get().favorites;
            const updatedFavorite = favorites.filter((item) => {
                return item.landmark.id !== campingId;
            });

            set({ favorites: updatedFavorite });

            // console.log(res.data.message);
            return { success: true, message: res.data.message };
        } catch (error) {
            // console.error("Error adding/removing favorite:", error);
            return { success: false, message: error?.response?.data?.message || error.message };
        }
    },
    actionListFavorites: async (token) => {
        try {
            const res = await listFavorites(token);
            // console.log(res.data.result);
            set({ favorites: res.data.result });
        } catch (error) {
            console.error("Error fetching favorite camping data:", error);
        }
    },
    actionFilter: async (category = '', search = '') => {
        try {
            const res = await filterCamping(category, search);
            // console.log("This is Zustand",res);
            set({ campings: res.data.result, center: res.data.center });
        } catch (error) {
            console.error("Error filtering camping data:", error);
        }
    }
});

const useCampingStore = create(campingStore);

export default useCampingStore;
