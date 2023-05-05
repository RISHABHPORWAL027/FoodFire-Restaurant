import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    restaurant : [],
    initialRestaurant : [],
    isLoader:false,
    cart:{
        id : ''
    }
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
            console.log('state',JSON.stringify(state.initialRestaurant))
            return state
            
        }, 
        isLoader : (state,action) =>{
            state.isLoader = action.payload
            console.log(state.isLoader,"outpit")
            return state
        },
        AddToCart : (state, action) => {
            state.cart = action.payload
            return state;
        }
    }
})


export const {getAllRestaurants,getInitalRestaurantsData,isLoader,AddToCart} = restaurantSlice.actions;

export default restaurantSlice.reducer;
