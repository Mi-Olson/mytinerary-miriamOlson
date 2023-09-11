import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../services/apiUrl";


const read_activities = createAsyncThunk(
    'read_activities',
    async({itinerary_id})=> {//es el que trae algo que tenesmo que buscar, lo podemos desestrcuturar como ahora
        try {
            let data = await axios(apiUrl+'/activities?itinerary_id='+itinerary_id)
            console.log(data);
            
            return { activities: data.data.response }
        } catch (error) {
            console.log(error);
            return { activities: [] }
        }
    }
)
const activities_actions = {read_activities }
export default activities_actions