import React from 'react';
import Avatar from '@mui/material/Avatar';
import profile_img from '../images/dp.jpg';
import '../styles/Profile.css';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Profile = () => {
  return (
    <div className={'profile_container'}>
      <div className={'profileContent'}>
        <h1>Profile</h1>
        <Avatar sx={{ width: 156, height: 156 }} alt="Remy Sharp" src={profile_img} />
      </div>
      <div style={{marginTop:'2rem'}}>
        <Grid container spacing={1} className={'gridClass'}>
          <Grid item lg={6} sm={6} xs={12}>
            <TextField
              id="standard-size-normal"
              label="First Name"
              multiline
              maxRows={4}
              value={'Rishabh'}
              disabled
            />
          </Grid>

          <Grid item lg={6} sm={6} xs={12} >
            <TextField
              id="standard-size-normal"
              label="Last Name"
              multiline
              maxRows={4}
              value={'Porwal'}
              disabled
            />
          </Grid>


          <Grid item lg={6} sm={6} xs={12}>
            <TextField
              id="standard-size-normal"
              label="Number"
              multiline
              maxRows={4}
              value={'+91-99999999999'}
              disabled
            />
          </Grid>

          <Grid item lg={6} sm={6} xs={12}>
            <TextField
              id="standard-size-normal"
              label="Email"
              multiline
              maxRows={4}
              value={'porwal027@gmail.com'}
              disabled
            />
          </Grid>

          <Grid item lg={3} xs={0} sm={3}></Grid>
          <Grid item lg={3} xs={5} sm={3} >
            <Button variant="outlined" disabled>Edit<EditIcon className={'btn_icon'} /></Button>
          </Grid>
          <Grid item lg={3} xs={5} sm={3}>
            <Button variant="outlined" disabled>Save<TurnedInIcon className={'btn_icon'} /></Button>
          </Grid>
          <Grid item lg={3} xs={0} sm={3}></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Profile