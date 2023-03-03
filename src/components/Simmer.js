import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

//MUI imports 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//Css files imports
import '../styles/Header.css';
import '../styles/RestaurantCard.css';
import '../styles/RestaurantMenu.css';


const shimmer_card_unit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const SimmarCard = () => {
  return (<Card className={"restaurant_cardSimmer"}>
    <CardMedia
      title="green iguana">
      <Skeleton width={300} height={100} /></CardMedia>
    <CardContent>
      <Typography gutterBottom variant="button" component="div">
        <Skeleton height={15} />
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <Skeleton height={15} />
      </Typography>
    </CardContent>
    <CardActions className={'card_Action'} >
      <div className={'restaurant_childAction'}>
        <Skeleton circle={true} height={50} width={50} />
      </div>
      <Button size="small"><Skeleton height={25} width={125} /></Button>
    </CardActions>
  </Card>)

}

export const SimmerMenu = () => {
  return (
    <div>
      <div className={'menu_Container'}>
        <Skeleton style={{ margin: '1.5rem' }} height={180} width={300} />
        <div className={'menu_content'}>
          <h1> <Skeleton width={250} height={20} /></h1>
          <p> <Skeleton width={150} height={12} /></p>
          <div className={'card_Action_Menu'} >
            <div className={'card_Action_MenuCard'}>
              <Skeleton circle={true} width={50} height={50} />
              {/* <p className='avg_rating' >{restaurantInfo?.avgRating}</p> */}
              <Skeleton style={{ marginLeft: '2rem', marginTop: '1rem' }} width={130} height={25} />
            </div>
            <p size="small" className={'stringMenu'}> <Skeleton /></p>
          </div>
        </div>
      </div>
      {shimmer_card_unit.map(() => {
        return (
          <div className={'item_container'}>
            <div className={'item_content'}>
              <h4 className={'item_h3'}><Skeleton /></h4>
              <h5 className={'item_h5'}><Skeleton /></h5>
              <p className={'item_p'}><Skeleton /></p>

            </div>
            <div className={'item_btnimg'} style={{ marginLeft: '1rem' }}>
              <Skeleton width={90} height={90} />
              <Button variant="contained" className={'item_btn'} color="success"><Skeleton /></Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}


const Simmer = () => {
  return (
    <>
      {(shimmer_card_unit).map((element) => {
        return (
          <SimmarCard key={element} />
        )
      })}
    </>
  )
}

export default Simmer