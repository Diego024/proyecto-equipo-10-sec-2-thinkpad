import axios from "axios";

const BASE_URL = "http://localhost:3500/api";

export const createdDeportista = async (formData)=>{
    try {
        const response = await axios.post(`${BASE_URL}/deportista/create`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al crear deportista. Intente nuevamente.");
    }
}


export const updateDeportista = async (deportistaId,formData)=>{
    try {
        const response = await axios.put(`${BASE_URL}/deportista/update/${deportistaId}`,formData,{
            headers:{
                'Content-Type':'application/json'
            }
        });
        return response.data
    } catch (e) {
        console.error('Error al realizar la petición:',e);
        throw new Error("Error ocurrido al actualizar deportista. Intente nuevamente.");
    }
}


export const getAllDeportistas = async ()=>{
    try {
        const response = await axios.get(`${BASE_URL}/deportista/getAll/`);

        if(response.status === 200) return response.data.deportista;
        else return[];
        
    } catch (e) {
        console.log("Error:",e.message);
        return [];
    }
}


export const getOneDeportista = async (deportistaId)=>{
   try{
    if(!deportistaId) throw new Error("IdDeportista es requerido");

   const response = await axios.get(`${BASE_URL}/deportista/get/${deportistaId}`);
   if(response.status===200) return response.data.data;
   else return undefined;
   }catch(e){
      console.log("Error:",e.message);
      return undefined;
   }
}


export const deleteOneDeportista = async (deportistaId)=>{
    try{
     if(!deportistaId) throw new Error("IdDeportista es requerido");
 
    const response = await axios.delete(`${BASE_URL}/deportista/${deportistaId}`);
    if(response.status===200) return true;
    else return undefined;
    }catch(e){
       console.log("Error:",e.message);
       return undefined;
    }
 }