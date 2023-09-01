import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../services/apiUrl";



const read_user = createAsyncThunk(
    'read_user',
    async({user_id})=> {    //  i/users/:user_id
        try {
            let data = await axios(apiUrl+'users/'+user_id)
            console.log(data);
            return { user: data.data.response }
        } catch (error) {
            console.log(error);
            return { user: {} }
        }
    }
)

const read_users = createAsyncThunk(
    'read_users',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'users?city='+obj.text)//falta terminar
            console.log(data);
            return { users: data.data.response }
        } catch (error) {
            console.log(error);
            return { users: [] }
        }
    }
)
const user_actions = { read_user, read_users }
export default user_actions