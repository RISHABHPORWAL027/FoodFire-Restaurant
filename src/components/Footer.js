import React from 'react';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-between' , margin:'2rem'}}>
        <h1>Created by <span style={{fontWeight:'600px' , color:'#a53729'}}>Rishabh Dapkara</span></h1>
        <div style={{margin:'auto 3rem'}}>
            <Link><FacebookIcon /></Link>
            <Link><InstagramIcon/></Link>
            <Link to='https://www.linkedin.com/in/rishabhdapkara/'><LinkedInIcon/></Link>
        </div>
    </div>
  )
}

export default Footer