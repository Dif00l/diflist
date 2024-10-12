import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        Bleed:{
        "id":"Bleed",
        "Name":"Blutrausch",
        "Img":"btimmuBleed",
        "Img_inactive":"btimmuBleed",
        "Img_active":"btimmuBleed_hover",
        "Checked":false
        },
        Poison:{
            "id":"Poison",
            "Name":"Poison",
            "Img":"btimmuPoison",
            "Img_inactive":"btimmuPoison",
            "Img_active":"btimmuPoison_hover",
            "Checked":false
        },
        Incinerate:{
            "id":"Incinerate",
            "Name":"Incinerate",
            "Img":"btimmuIncinerate",
            "Img_inactive":"btimmuIncinerate",
            "Img_active":"btimmuIncinerate_hover",
            "Checked":false
        },
        Shock:{
            "id":"Shock",
            "Name":"Schock",
            "Img":"btimmuShock",
            "Img_inactive":"btimmuShock",
            "Img_active":"btimmuShock_hover",
            "Checked":false
        }
    };

const filterImmuSlice = createSlice({
    name: 'filterImmu',
    initialState,
    reducers:{
        setFilterImmu:(state, action ) => {
            const values = action.payload.split('|');
            
            if( values[1] === "false"){
                const nestedStateChecked = state[values[0]].Checked = true;
                const nestedStateImg = state[values[0]].Img = state[values[0]].Img_active;
            }else{
                const nestedStateChecked = state[values[0]].Checked = false;
                const nestedStateImg = state[values[0]].Img = state[values[0]].Img_inactive;
            }
            return state
        },
        getFilterImmu: ( state,action ) => {
        return state
            
        },
        default:(state)=>{
            return state;
        }
    }
})

export const {setFilterImmu} = filterImmuSlice.actions

export const getFilterImmu = state => state.filterImmu

export default filterImmuSlice.reducer
