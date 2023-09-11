import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../services/apiUrl";


const read_itineraries = createAsyncThunk(
    'read_itineraries',
    async({_id})=> {//es el que trae algo que tenesmo que buscar, lo podemos desestrcuturar como ahora
        try {
            let data = await axios(apiUrl+'/itineraries?city_id='+_id)
            
            
            return { itineraries: data.data.response }
        } catch (error) {
            console.log(error);
            return { itineraries: [] }
        }
    }
)

const read_itinerary = createAsyncThunk(
    'read_itinerary',
    async(obj)=> {///falta terminar
        try {
            let data = await axios(apiUrl+'itineraries/'+obj.id)
            console.log(data);
            return { itinerary: data.data.response }
        } catch (error) {
            console.log(error);
            return {itinerary: {} }
        }
    }
)

const itinerary_actions = {read_itineraries,read_itinerary }
export default itinerary_actions