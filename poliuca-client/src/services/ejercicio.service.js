import axios from "axios";

const BASE_URL = "https://delightful-puce-tunic.cyclic.app/api/";

export const createdEjercicio = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/ejercicio/create`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:', e);
        throw new Error("Error ocurrido al crear ejercicio. Intente nuevamente.");
    }
}


export const updateEjercicio = async (ejercicioId, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/ejercicio/update/${ejercicioId}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:', e);
        throw new Error("Error ocurrido al actualizar ejercicio. Intente nuevamente.");
    }
}


export const getAllEjercicios = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/ejercicio/getAll/`);

        console.log(response)
        if (response.status === 200) return response.data.ejercicio;
        else return [];

    } catch (e) {
        console.log("Error:", e.message);
        return [];
    }
}


export const getOneEjercicio = async (ejercicioId) => {
    try {
        if (!ejercicioId) throw new Error("IdEjercicio es requerido");

        const response = await axios.get(`${BASE_URL}/ejercicio/get/${ejercicioId}`);
        if (response.status === 200) return response.data.data;
        else return undefined;
    } catch (e) {
        console.log("Error:", e.message);
        return undefined;
    }
}


export const deleteOneEjercicio = async (ejercicioId) => {
    try {
        if (!ejercicioId) throw new Error("IdEjercicio es requerido");

        const response = await axios.delete(`${BASE_URL}/ejercicio/${ejercicioId}`);
        if (response.status === 200) return true;
        else return undefined;
    } catch (e) {
        console.log("Error:", e.message);
        return undefined;
    }
}