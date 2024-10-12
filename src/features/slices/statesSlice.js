import { createSlice } from "@reduxjs/toolkit";

const initialState = {"ShowAll":1};


const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers:{
        setShowAll: (state, action) => {
            return{
                ...state, ShowAll: action.payload
               
            }
        }
    }
})

export const {setShowAll} = statesSlice.actions

export const getStates = state => state.states;

export default statesSlice.reducer