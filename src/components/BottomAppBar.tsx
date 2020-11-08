import { Grid, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar/AppBar';
import React from 'react';
import LocationIcon from 'mdi-react/LocationIcon'
import { navigate } from 'gatsby';
import PersonIcon from 'mdi-react/PersonIcon'
import ChatDrawer from './ChatDrawer';

const useStyles = makeStyles((theme: any) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  icons: {
    color: theme.palette.primary
  }
}));

const BottomAppBar = () => {
  const classes = useStyles()
  return (
  <AppBar color='default' position="fixed" className={classes.appBar}>
    <Toolbar>
      <Grid container direction='row' justify='space-around'>
        <Grid item>
          <IconButton color="primary" onClick={() => navigate('/login')}>    
            <PersonIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <ChatDrawer />
        </Grid>
        <Grid item>
          <IconButton edge="end" color="primary">
            <LocationIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)}

export default BottomAppBar