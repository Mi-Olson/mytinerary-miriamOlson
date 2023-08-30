import { createReducer } from "@reduxjs/toolkit";
import itinerary_actions from "../actions/itineraries";

const { read_itineraries,read_itinerary} = itinerary_actions

const initial_state = {
    itineraries: [],
    itinerary: {},
   
}

const itinerary_reducer = createReducer(
    initial_state,                  //estado incial
    builder => builder.addCase(     //callback contructora de estados globales (agrega (mín) un caso de reduccion para cada accion)
        read_itineraries.fulfilled,    //accion a reducir
        (state,action)=> {          //callback que depende del estado y la accion y es la encargada de reducir los estados
            let new_state = {
                ...state,           //a la copia del estado tengo que "llenarle" la propiedad carousel con los datos que me envía la accion
                itineraries: action.payload.itineraries
            }
            return new_state        //retorno el nuevo estado para que se actualice la vista
        }
    )
    .addCase(
        read_itinerary.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                itinerary: action.payload.itinerary
            }
            return new_state
        }
    )
   
)

export default itinerary_reducer