import axios from "axios";

export const listStates = async (token) => {
    return await axios.get('http://localhost:5000/api/states', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listReservations = async (token) => {
    return await axios.get('http://localhost:5000/api/reservations', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listAllReservations = async (token) => {
    return await axios.get('http://localhost:5000/api/all-reservations', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

