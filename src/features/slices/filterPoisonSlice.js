import { createSlice } from "@reduxjs/toolkit";

const initialState = 
    {
        "id":"Gift",
        "Name":"Gift",
        "Img":"btimmuPoison",
        "Checked":false
    };

const filterPoisonSlice = createSlice({
    name: 'filterPoison',
    initialState,
    reducers:{
        setFilterPoison: (state, action) => {
            
            state = action.payload
            return state
        },
        setFilterPoisonTrue: (state, action) =>{
            return{
                ...state, Img: 'btimmuBleed_hover',
                Checked:true
            }
        },
        setFilterPoisonFalse: (state, action) =>{
            return{
                ...state, Img: 'btimmuBleed',
                Checked:false
            }
        },
        getFilterPoison: ( state,action ) => {
        return state.Immu
            
        },
        default:(state)=>{
            return state;
        }
    }
})

export const {setFilterPoison, setFilterPoisonTrue, setFilterPoisonFalse} = filterPoisonSlice.actions

export const getFilterPoison = state => state.filterPoison

export default filterPoisonSlice.reducer
