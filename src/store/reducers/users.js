import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const { read_user,signin, signin_token,signout,update_user,signup } = user_actions

const initial_state = {
    userItineraries:{},
    users:[],
    signin:[],
    token:"",
    user: {},
    messages:[]

   
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
            token:action.payload.token,
            messages:action.payload.messages
        }
        return new_state        //retorno el nuevo estado para que se actualice la vista
    }
).addCase(
    signin_token.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
        return new_state
    }
).addCase(
    signout.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
        return new_state
    }
).addCase(
    update_user.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            user: action.payload.user
        }
        return new_state
    }
).addCase(
    signup.fulfilled,
    (state,action)=> {
        let new_state = {
            ...state,
            user: action.payload.user,
            token: action.payload.token
        }
        return new_state
    }
))


    export default user_reducer