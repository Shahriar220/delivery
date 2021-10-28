import axios from 'axios'
export const getAllPizza=()=>async dispatch=>{
    dispatch({type:'GET_PIZZAS'})
    try{
        const response=await axios.get(`/api/admin/getAll`)
        console.log(response)
        dispatch({type:'GET_PIZZAS_SUCCESS',payload:response.data})
    }
    catch(error){
        dispatch({type:'GET_PIZZAS_FAILED',payload:error})
        console.log(error)
    }
}