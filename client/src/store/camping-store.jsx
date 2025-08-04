import { listCamping } from "@/api/camping";
import { create } from "zustand";

const campingStore = (set) => ({
    campings: [],
    actionListCamping: async  () => {
        try {
            const res = await listCamping();
            set({ campings: res.data.result });
        } catch (error) {
            console.error("Error fetching camping data:", error);
        }
    },
});

const useCampingStore = create(campingStore);

export default useCampingStore;
