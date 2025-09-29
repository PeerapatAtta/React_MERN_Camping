import axios from "axios";

export const createCamping = async (token, data) => {
    return await axios
        .post('http://localhost:5000/api/camping', data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const listCamping = async (id) => {
    return await axios.get(`http://localhost:5000/api/campings/${id}`);
}

export const readCamping = async (id) => {
    return await axios.get(`http://localhost:5000/api/camping/${id}`);
}