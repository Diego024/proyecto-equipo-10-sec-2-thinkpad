import axios from "axios";

const BASE_URL = "https://delightful-puce-tunic.cyclic.app/api/";

export const createdRutina = async (formData) => {
    try {
        const response = await axios.post(`${BASE_URL}/rutina/create`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:', e);
        throw new Error("Error ocurrido al crear rutina. Intente nuevamente.");
    }
}


export const updateRutina = async (rutinaId, formData) => {
    try {
        const response = await axios.put(`${BASE_URL}/rutina/update/${rutinaId}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:', e);
        throw new Error("Error ocurrido al actualizar rutina. Intente nuevamente.");
    }
}


export const getAllRutinas = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/rutina/getAll/`);

        if (response.status === 200) return response.data.rutina;
        else return [];

    } catch (e) {
        console.log("Error:", e.message);
        return [];
    }
}


export const getOneRutina = async (rutinaId) => {
    try {
        if (!rutinaId) throw new Error("IdRutina es requerido");

        const response = await axios.get(`${BASE_URL}/rutina/get/${rutinaId}`);
        if (response.status === 200) return response.data.data;
        else return undefined;
    } catch (e) {
        console.log("Error:", e.message);
        return undefined;
    }
}


export const deleteOneRutina = async (rutinaId) => {
    try {
        if (!rutinaId) throw new Error("IdRutina es requerido");

        const response = await axios.delete(`${BASE_URL}/rutina/${rutinaId}`);
        if (response.status === 200) return true;
        else return undefined;
    } catch (e) {
        console.log("Error:", e.message);
        return undefined;
    }
}