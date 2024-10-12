import { configureStore } from "@reduxjs/toolkit";
import championsReducer from "./features/slices/championsSlice";
import filterKlassenReducer from "./features/slices/filterKlassenSlice";
import filterImmuReducer from "./features/slices/filterImmuSlice";
import filterBleedReducer from "./features/slices/filterBleedSlice";
import filterPoisonReducer from "./features/slices/filterPoisonSlice";
import statesReducer from './features/slices/statesSlice';


const store = configureStore({
    reducer: {

        champions: championsReducer,
        filterKlassen: filterKlassenReducer,
        filterImmu: filterImmuReducer, 
        filterBleed: filterBleedReducer,
        filterPoison: filterPoisonReducer,
        states: statesReducer,
        
     
    }
})

export default store