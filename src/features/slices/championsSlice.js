import { createSlice } from "@reduxjs/toolkit";

const initialState = [{"Name":"Abomination","Klasse":"Forschung","Image":"051","Tags":[],"Skills":[],"Immunities":[]}];


const championsSlice = createSlice({
    name: 'champions',
    initialState,
    reducers:{
        setChampions: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {setChampions} = championsSlice.actions

export const selectChampions = state => state.champions;

export default championsSlice.reducer