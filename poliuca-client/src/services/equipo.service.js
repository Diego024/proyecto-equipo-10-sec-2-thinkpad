import axios from "axios";

const BASE_URL = "http://localhost:3500/api";

export const createdEquipo = async (formData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/equipo/create`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al crear equipo. Intente nuevamente.");
    }
}


export const updateEquipo = async (equipoId,formData)=>{
    try {
        const response = await axios.put(`${BASE_URL}/equipo/update/${equipoId}`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al actualizar equipo. Intente nuevamente.");
    }
}


export const getAllEquipos = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/equipo/getAll/`);

        if(response.status === 200) return response.data.data;
        else return[];
        
    } catch (e) {
        console.log("Error:",e.message);
        return [];
    }
}


export const getOneEquipo = async (equipoId)=>{
   try{
    if(!equipoId) throw new Error("IdEquipo es requerido");

   const response = await axios.get(`${BASE_URL}/equipo/get/${equipoId}`);
   if(response.status===200) return response.data.data;
   else return undefined;
   }catch(e){
      console.log("Error:",e.message);
      return undefined;
   }
}


export const deleteOneEquipo = async (equipoId)=>{
    try{
     if(!equipoId) throw new Error("IdEquipo es requerido");
 
    const response = await axios.delete(`${BASE_URL}/equipo/${equipoId}`);
    if(response.status===200) return true;
    else return undefined;
    }catch(e){
       console.log("Error:",e.message);
       return undefined;
    }
 }