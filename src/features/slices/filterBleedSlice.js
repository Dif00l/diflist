import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        "id":"Blutrausch",
        "Name":"Blutrausch",
        "Img":"btimmuBleed",
        "Checked":false
    };

const filterBleedSlice = createSlice({
    name: 'filterBleed',
    initialState,
    reducers:{
        setFilterBleed: (state, action) => {
            
            state = action.payload
            return state
        },
        setFilterBleedTrue: (state, action) =>{
            return{
                ...state, Img: 'btimmuBleed_hover',
                Checked:true
            }
        },
        setFilterBleedFalse: (state, action) =>{
            return{
                ...state, Img: 'btimmuBleed',
                Checked:false
            }
        },
        getFilterBleed: ( state,action ) => {
        return state.Immu
            
        },
        default:(state)=>{
            return state;
        }
    }
})

export const {setFilterBleed, setFilterBleedTrue, setFilterBleedFalse} = filterBleedSlice.actions

export const getFilterBleed = state => state.filterBleed

export default filterBleedSlice.reducer
