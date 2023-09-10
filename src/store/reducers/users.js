import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const { read_user,signin } = user_actions

const initial_state = {
    userItineraries:{},
    users:[],
    signin:[],
    token:"",
    user: {},

   
}

const user_reducer = createReducer(
    initial_state,                  //estado incial
    builder => builder.addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
        read_user.fulfilled,    //accion a reducir
        (state,action)=> {          //callback que depende del estado y la accion y es la encargada de reducir los estados
            let new_state = {
                ...state,           //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion
                userItineraries: action.payload.userItineraries
              
            }
            return new_state        //retorno el nuevo estado para que se actualice la vista
        }
    ).addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
    signin.fulfilled,    //accion a reducir
    (state,action)=> {          //callback que depende del estado y la accion y es la encargada de reducir los estados
        let new_state = {
            ...state,           //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion
            user: action.payload.user,
            token:action.payload.token
        }
        return new_state        //retorno el nuevo estado para que se actualice la vista
    }
))

    export default user_reducer