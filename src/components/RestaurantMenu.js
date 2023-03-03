import React, { useState, useEffect } from 'react';
import { swiggy_menu_api_URL, IMG_CDN_URL } from '../constants';
import { useParams } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

import imageNotFound from '../images/image-not-found.jpg'
import { SimmerMenu } from './Simmer';


import '../styles/RestaurantMenu.css';
import '../styles/RestaurantCard.css';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([])
  const [restaurantProduct, setRestaurantProduct] = useState([])
  const [isLoading,setIsLoading] = useState(false);

  const { resId } = useParams();
  // console.log("find",Object.values(restaurantInfo.items))

  const getRestaurantInfo = async () => {
    try {
      setIsLoading(false)
      const response = await fetch(swiggy_menu_api_URL + resId)
      const json = await response.json()
      setRestaurantInfo(json?.data)
      setRestaurantProduct(Object.values(json?.data?.menu?.items))
      console.log(restaurantInfo,"info")
      setIsLoading(true)
    }
    catch (err) {
      console.log(err);
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getRestaurantInfo();
  }, [])


  return (
    !isLoading ? <SimmerMenu /> :
      <div>
        <div className={'menu_Container'}>
          {<img alt='not found' className={'menu_img'} src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />}
          <div className={'menu_content'}>
            <h1>{restaurantInfo?.name}</h1>
            <p>{restaurantInfo?.cuisines?.join(', ')}</p>
            <div className={'card_Action_Menu'} >
              <div className={'card_Action_MenuCard'} style={{
                backgroundColor: restaurantInfo?.avgRating > 3.5 ? 'green' : 'red', color: 'white'
              }}>
                <StarIcon className={'star_icon'} />
                <p className='avg_rating' >{restaurantInfo?.avgRating}</p>
              </div>

              <p size="small" className={'stringMenu'}>{restaurantInfo?.costForTwoMsg}</p>
            </div>
          </div>
        </div>

        {restaurantProduct.map((item) => {
          return (
            <div className={'item_container'}>
              <div className={'item_content'}>
                <h4 className={'item_h3'}>{item?.name}</h4>
                <h5 className={'item_h5'}>{item?.price}</h5>
                <p className={'item_p'}>{item?.description}</p>
              </div>
              <div className={'item_btnimg'}>
                {item?.cloudinaryImageId ? <img alt='not found' className={'item_img'} src={IMG_CDN_URL + item?.cloudinaryImageId} /> :
                  <img alt='not found' className={'item_img'} src={imageNotFound} />
                }
                <Button variant="contained" className={'item_btn'} color="success" disabled={item.inStock===0 ? true : false }>Add +</Button>
              </div>
            </div>
          )
        })}
      </div>
  )
}

export default RestaurantMenu