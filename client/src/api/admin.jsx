import axios from "axios";

export const listStates = async (token) => {
    return await axios.get('http://localhost:5000/api/states', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

