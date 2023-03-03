import React from 'react';
import { IMG_CDN_URL } from '../constants';


// MUI imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

//Css files imports 
import '../styles/RestaurantCard.css';



const RestaurantCard = ({ restaurantData }) => {


    return (
        
                <Card className={"restaurant_card"}>
                    <CardMedia
                        sx={{ height: 100 }}
                        image={IMG_CDN_URL + restaurantData.cloudinaryImageId}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="button" component="div">
                            {restaurantData.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {restaurantData.locality}
                        </Typography>
                    </CardContent>
                    <CardActions className={'card_Action'} >
                        <div className={'restaurant_childAction'} style={{
                            backgroundColor: restaurantData.avgRating > 3.5 ? 'green' : 'red', color: 'white'
                        }}>
                            <StarIcon className={'star_icon'} />
                            <p className='avg_rating' >{restaurantData.avgRating==='--' ? '0' : restaurantData.avgRating}</p>
                        </div>
                        <Button size="small">{restaurantData.costForTwoString}</Button>
                    </CardActions>
                </Card >

        
    )
}

export default RestaurantCard