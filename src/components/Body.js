import React, { useEffect } from 'react';
import { Link } from "react-router-dom";  
import { swiggy_api_URL } from '../constants';

//Custom Components
import RestaurantCard from './RestaurantCard';
import Simmer from './Simmer';

// CSS files import
import '../styles/body.css';

// import Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants,getInitalRestaurantsData } from '../redux/slices/restaurantSlice';
// import { all } from 'axios';

  


const Body = () => {
    const dispatch = useDispatch();
    const DisplayRestaurants = useSelector(state=> state.restaurant.restaurant);
    const isLoaderValue = useSelector(state=> state.restaurant.isLoader);


    useEffect(() => {
        console.log("ddd",isLoaderValue)
        getRestaurants();
    }, [])

    //if allRestaurants is empty don't render restaurants cards
    if (!DisplayRestaurants) return null;

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants() {
        // handle the error using try... catch
        try {
            const response = await fetch(swiggy_api_URL);
            const json = await response.json();
            dispatch(getAllRestaurants(json?.data?.cards[2]?.data?.data?.cards))
            dispatch(getInitalRestaurantsData(json?.data?.cards[2]?.data?.data?.cards))

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className={'restaurant_containar'}>
            {DisplayRestaurants?.length === 0 && !isLoaderValue ? (<Simmer />) :
                isLoaderValue ===true ?
                <h1>This Food is <span style={{color:'#a53729   '}}>not Available</span> at this Time</h1>
                :
                (DisplayRestaurants.map((res) => {
                    return (
                        <Link to={"/restaurant/" +res.data.id}>
                            <RestaurantCard restaurantData={res.data} isLoaderValue={isLoaderValue} />
                        </Link>
                    )
                }))}
        </div>
    )
}

export default Body