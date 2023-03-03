import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurant : [],
    initialRestaurant : [],
    isLoader:false,
}

const restaurantSlice = createSlice({
    name : "restaurant",
    initialState,
    reducers:{
        getAllRestaurants :(state,action) =>{
            state.restaurant = action.payload
            return state
        },  

        getInitalRestaurantsData : (state,action) =>{
            state.initialRestaurant = action.payload
            return state
        }, 
        isLoader : (state,action) =>{
            state.isLoader = action.payload
            console.log(state.isLoader,"outpit")
            return state
        },
    }
})


export const {getAllRestaurants,getInitalRestaurantsData,isLoader} = restaurantSlice.actions;

export default restaurantSlice.reducer;
