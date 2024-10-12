import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Klassen:{
        Mutant:{
        "id":"Mutant",
        "Name":"Mutant",
        "Img_inactive":"btMutant",
        "Img_active":"btMutant_hover",
        "Checked":false
        },
        Talent:{
            "id":"Talent",
            "Name":"Talent",
            "Img_inactive":"btTalent",
            "Img_active":"btTalent_hover",
            "Checked":false
        },
        Forschung:{
            "id":"Forschung",
            "Name":"Forschung",
            "Img_inactive":"btForschung",
            "Img_active":"btForschung_hover",
            "Checked":false
        },
        Mystisch:{
            "id":"Mystisch",
            "Name":"Mystisch",
            "Img_inactive":"btMystisch",
            "Img_active":"btMystisch_hover",
            "Checked":false
        },
        Kosmos:{
            "id":"Kosmos",
            "Name":"Kosmos",
            "Img_inactive":"btKosmos",
            "Img_active":"btKosmos_hover",
            "Checked":false
        },
        Technologie:{
            "id":"Technologie",
            "Name":"Technologie",
            "Img_inactive":"btTechnologie",
            "Img_active":"btTechnologie_hover",
            "Checked":true
        }
    },
    Immunity:{
        Bleed:{
            "id":0,
            "Name":"Blutrausch",
            "Name_eng":"Bleed",
            "Img_active":"btimmuBleed",
            "Img_inactive":"btimmuBleed_hover",
            "Checked":false
        },
        Poison:{
            "id":1,
            "Name_de":"Gift",
            "Name_eng":"Poison",
            "Img_active":"btimmuPoison",
            "Img_inactive":"btimmuPosion_hover",
            "Checked":false
        }
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setFilter: (state, action) => {
            
            state = action.payload
            return state
        },
    
        getFilterKlassen: ( state,action ) => {
        return state
            
        },
        default:(state)=>{
            return state;
        }
    }
})

export const {setFilter} = filterSlice.actions

export const getFilterKlasse = state => state.filter

export default filterSlice.reducer
