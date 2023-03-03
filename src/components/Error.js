import React from 'react';
import error from '../images/error.jpg'

import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import '../styles/body.css';

const Error = () => {
  return (
    <div className={"errorPage"}>
      <img alt='error' src={error} style={{ width: '500px' }} />
      <Link to='/' style={{alignSelf:'center'}}><Button variant="outlined" color="error">
        Back to Home
      </Button></Link>
    </div>
  )
}

export default Error