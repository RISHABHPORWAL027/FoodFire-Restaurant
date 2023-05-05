import React, { useState, useEffect } from 'react';
import { swiggy_menu_api_URL, IMG_CDN_URL } from '../constants';
import { useParams } from "react-router-dom";

import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import imageNotFound from '../images/image-not-found.jpg'
import { SimmerMenu } from './Simmer';


import '../styles/RestaurantMenu.css';
import '../styles/RestaurantCard.css';

import {AddToCart} from '../redux/slices/restaurantSlice';
import { useSelector, useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState([])
  const [restaurantProduct, setRestaurantProduct] = useState([{}])
  const [isLoading, setIsLoading] = useState(false);

  const { resId } = useParams();
  const dispatch = useDispatch();

  const redux_cart = useSelector((state)=> state.restaurant.cart)
  // console.log("find",Object.values(restaurantInfo.items))
  const [addCart, setAddCart] = useState(0)
  const [addProduct , setAddProduct] = useState([])


  // Monday: [{ start_at: "09:00", end_at: "17:00", checked: true }],

  const getRestaurantInfo = async () => {
    try {
      setIsLoading(false)
      const response = await fetch(swiggy_menu_api_URL + resId)
      const json = await response.json()
      setRestaurantInfo(json?.data)
      console.log("menu data", JSON.stringify(json?.data))
      // setRestaurantProduct(Object.values(json?.data?.menu?.items))
      // setAddProduct(Object.values(json?.data?.menu?.items))
      let cartArr = Object.values(json?.data?.menu?.items).map((item,i) => ({
        name:item.name,
        qty:0,
        id:item.id,
        description : item.description,
        cloudinaryImageId : item.cloudinaryImageId,
        price:item.price,
        isBestSeller:item.isBestSeller,
        inStock:item.iteminStock,
        isVeg:item.isVeg

      }))
      setRestaurantProduct(cartArr)
      // console.log("ss",cartArr);

      // setAddProduct((prevState)=>[ ...prevState , cart_value = 0
      // ])
      // setItems(items.map(item => ({ ...item, newKey: 'newValue' })));
      // setAddProduct(addProduct.map((item)=>({...item, cart_value : '0'})))
      // console.log("ss",addProduct);


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

   const handleAddCart =(value, products)=>{

      value==='add' ? setAddCart(addCart+1) : setAddCart(addCart-1);
      dispatch(AddToCart(addCart))
      // dispatch(AddToCart(addCart))
      // console.log("aaa",addProduct)
    // debugger

     if(addProduct.length===0)
     {
      const obj = {
        product:products,
         cart_value:1
      }
      addProduct.push(obj)
      // setAddProduct([...obj])
      console.log('add',addProduct)
      return null
     }
     console.log("a",addProduct.length)
      for(let i=0;i<=addProduct.length ; i++)
      {
        // console.log('aasa',products.id)
        // console.log('asasassas',addProduct[i])
        
        if(addProduct[i].product.id === products.id)
        {
          addProduct[i].cart_value = addCart
          setAddProduct([...addProduct])
          console.log("id statement",addProduct)
          return null
        }
        else{
          const obj = {
            product:products,
             cart_value:1,
          }
          setAddProduct(prevproduct => [...prevproduct , obj] )
          console.log('else statement',addProduct)
          return null
        }
      }
   }


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
            <div className={'item_container'} key={item.id}>
              <div className={'item_content'}>
                <h4 className={'item_h3'}>{item?.name}</h4>
                <h5 className={'item_h5'}>{item?.price}</h5>
                <p className={'item_p'}>{item?.description}</p>
              </div>
              <div className={'item_btnimg'}>
                {item?.cloudinaryImageId ? <img alt='not found' className={'item_img'} src={IMG_CDN_URL + item?.cloudinaryImageId} /> :
                  <img alt='not found' className={'item_img'} src={imageNotFound} />
                }
                {
                  addCart === 0 ? <Button variant="contained" className={'item_btn'} color="success" onClick={()=>handleAddCart('add',item)} disabled={item.inStock === 0 ? true : false}>Add +</Button>
                    :
                    <div className={'btnParent'}>
                      <Fab size="small" fontSize='small' className={'plusminusBtn'} onClick={()=>handleAddCart('add',item)} color="secondary" aria-label="add">
                        <AddIcon />
                      </Fab>
                      <label className={'inputChild'}>{ item.qty || '0'}</label>
                      <Fab size="small" fontSize='small' className={'plusminusBtn'} onClick={()=>handleAddCart('remove',item)} color="secondary" aria-label="add">
                        <RemoveIcon />
                      </Fab>
                    </div>
                }
              </div>
            </div>
          )
        })}
      </div>
  )
}

export default RestaurantMenu