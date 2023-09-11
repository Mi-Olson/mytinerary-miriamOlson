import { createReducer } from "@reduxjs/toolkit";

import activities_actions from "../actions/activities";
const { read_activities} = activities_actions

const initial_state = {
    activities: [],
    // activity: {},
   
}

const activity_reducer = createReducer(
    initial_state,                  //estado incial
    builder => builder.addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
        read_activities.fulfilled,    //accion a reducir
        (state,action)=> {          //callback que depende del estado y la accion y es la encargada de reducir los estados
            let new_state = {
                ...state,           //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion
                activities: action.payload.activities
            }
            return new_state        //retorno el nuevo estado para que se actualice la vista
        }
    )
)

    export default activity_reducer   