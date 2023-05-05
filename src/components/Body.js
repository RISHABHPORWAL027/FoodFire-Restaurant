import React, { useEffect } from 'react';
import { Link } from "react-router-dom";  
import { swiggy_api_URL } from '../constants';

//Custom Components
import RestaurantCard from './RestaurantCard';
import Simmer from './Simmer';
import data from '../response.json';
// CSS files import
import '../styles/body.css';

// import Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllRestaurants,getInitalRestaurantsData } from '../redux/slices/restaurantSlice';
// import { all } from 'axios';

  


const Body = () => {
    console.log("response Data-", data)
    const dispatch = useDispatch();
    const DisplayRestaurants = useSelector(state=> state.restaurant.restaurant);
    const isLoaderValue = useSelector(state=> state.restaurant.isLoader);


    async function getRestaurants() {
        // console.log('data',data)
        dispatch(getAllRestaurants(data))
        dispatch(getInitalRestaurantsData(data))
        // handle the error using try... catch
        // debugger
        // try {
        //     const response = await fetch(swiggy_api_URL);
        //     const json = await response.json();
        //     dispatch(getAllRestaurants(json?.data?.cards[2]?.data?.data?.cards))
        //     dispatch(getInitalRestaurantsData(json?.data?.cards[2]?.data?.data?.cards))
            

        // } catch (error) {
        //     console.log(error);
        // }
    }


    useEffect(() => {
        console.log("ddd",isLoaderValue)
        getRestaurants();
    }, [])

    //if allRestaurants is empty don't render restaurants cards
    if (!DisplayRestaurants) return null;

    // async function getRestaurant to fetch Swiggy API data
  

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