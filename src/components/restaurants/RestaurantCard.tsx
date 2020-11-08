import { Card, CardMedia, createStyles, Grid, Paper, Typography, withStyles } from '@material-ui/core'
import React from 'react'

const restaurantCardStyles = () => createStyles({
  restaurantCard: {
    height: '100px'
  },
  foodImage: {
    maxHeight: '100.5px'
  },
  nameGrid: {
    maxWidth: '90%',
    margin: '10px 0 2px 0'
  },
  cityGrid: {
    maxWidth: '90%',
    margin: '0 0 5px 0'
  },
  starsGrid: {
    maxWidth: '90%',
    margin: '0 0 5px 0'
  },
  nameText: {
    fontFamily: 'Space Mono',
    fontStyle: 'normal',
    fontWeight: 'bolder',
    lineHeight: '30px',
    fontSize: '0.76rem',
    color: 'black'
  },
  cityText: {
    fontFamily: 'Work Sans',
    fontStyle: 'normal',
    fontWeight: 'lighter',
    lineHeight: '21px',
    color: '#C4C4C4',
    textShadow: '0 0 black'
  }
})

export interface RestaurantCardProps {
  classes: any
  name: string
  city: string
  image: any
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ classes, name, city, image }) => {
  const capitalizedName = `${name[0].toUpperCase()}${name.slice(1, name.length)}`
  const shortenedName = capitalizedName.length > 25 ? `${capitalizedName.slice(0, 25)}...` : capitalizedName
  return (
  <Paper elevation={6}>
    <Card className={classes.restaurantCard}>
      <Grid container direction='row'>
        <Grid item xs={4}>
          <Grid  container direction='column'>
            <Grid item xs={12} style={{marginBottom: '-3px', marginLeft: '-8.5px'}}>
              <CardMedia className={classes.foodImage} component='img' image={image} />
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={8} style={{ height: '100px' }}>
          <Grid container direction='column' justify='space-between'>
            <Grid item xs={3} className={classes.nameGrid}>
              <Typography variant='body1' className={classes.nameText}>{shortenedName}</Typography>
            </Grid>
            <Grid item xs={3} className={classes.cityGrid}>
              <Typography variant='body1' className={classes.cityText}>{city}</Typography>
            </Grid>
            <Grid item xs={3} className={classes.starsGrid}>
              ⭐⭐⭐
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  </Paper>
  )}



export default withStyles(restaurantCardStyles)(RestaurantCard)