import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        Mutant:{
        "id":"Mutant",
        "Name":"Mutant",
        "Img":"btMutant",
        "Img_inactive":"btMutant",
        "Img_active":"btMutant_hover",
        "Checked":false
        },
        Talent:{
            "id":"Talent",
            "Name":"Talent",
            "Img":"btTalent",
            "Img_inactive":"btTalent",
            "Img_active":"btTalent_hover",
            "Checked":false
        },
        Forschung:{
            "id":"Forschung",
            "Name":"Forschung",
            "Img":"btForschung",
            "Img_inactive":"btForschung",
            "Img_active":"btForschung_hover",
            "Checked":false
        },
        Mystisch:{
            "id":"Mystisch",
            "Name":"Mystisch",
            "Img":"btMystisch",
            "Img_inactive":"btMystisch",
            "Img_active":"btMystisch_hover",
            "Checked":false
        },
        Kosmos:{
            "id":"Kosmos",
            "Name":"Kosmos",
            "Img":"btKosmos",
            "Img_inactive":"btKosmos",
            "Img_active":"btKosmos_hover",
            "Checked":false
        },
        Technologie:{
            "id":"Technologie",
            "Name":"Technologie",
            "Img":"btTechnologie",
            "Img_inactive":"btTechnologie",
            "Img_active":"btTechnologie_hover",
            "Checked":false
        },
        Spezial:{
            "id":"Spezial",
            "Name":"Spezial",
            "Img":"",
            "Img_inactive":"",
            "Img_active":"",
            "Checked":false
        }
    };

const filterKlassenSlice = createSlice({
    name: 'filterKlassen',
    initialState,
    reducers:{
        setFilterKlassen:(state, action ) => {
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
        getFilterKlassen: ( state,action ) => {
        return state
            
        },
        default:(state)=>{
            return state;
        }
    }
})

export const {setFilterKlassen} = filterKlassenSlice.actions

export const getFilterKlassen = state => state.filterKlassen

export default filterKlassenSlice.reducer
