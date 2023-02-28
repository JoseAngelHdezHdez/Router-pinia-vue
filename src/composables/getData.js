import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
    
    const data = ref(null);
    const loading = ref(true);
    const errorData = ref(null)

    const getData = async ( url ) => {
        try {
            loading.value = true;
            const res = await axios.get(url);
            data.value = res.data;
        } catch (e) {
            errorData.value = `Error de servidor: ${e}`;
        } finally {
            loading.value = false;
        }
    };

    return{
        getData,
        data,
        loading,
        errorData
    };
 }