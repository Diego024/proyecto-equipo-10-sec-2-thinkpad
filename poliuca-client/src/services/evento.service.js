import axios from "axios";

const BASE_URL = "http://localhost:3500/api";

export const createdEvento = async (formData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/evento/create`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al crear evento. Intente nuevamente.");
    }
}


export const updateEvento = async (eventoId,formData)=>{
    try {
        const response = await axios.put(`${BASE_URL}/evento/update/${eventoId}`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al actualizar evento. Intente nuevamente.");
    }
}


export const getAllEventos = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/evento/getAll/`);

        if(response.status === 200) return response.data.data;
        else return[];
        
    } catch (e) {
        console.log("Error:",e.message);
        return [];
    }
}


export const getOneEvento = async (eventoId)=>{
   try{
    if(!eventoId) throw new Error("IdEvento es requerido");

   const response = await axios.get(`${BASE_URL}/evento/get/${eventoId}`);
   if(response.status===200) return response.data.data;
   else return undefined;
   }catch(e){
      console.log("Error:",e.message);
      return undefined;
   }
}


export const deleteOneEvento = async (eventoId)=>{
    try{
     if(!eventoId) throw new Error("IdEvento es requerido");
 
    const response = await axios.delete(`${BASE_URL}/evento/${eventoId}`);
    if(response.status===200) return true;
    else return undefined;
    }catch(e){
       console.log("Error:",e.message);
       return undefined;
    }
 }