import { Container, Grid } from '@material-ui/core'
import React, { FC, useEffect, useState } from 'react'
import { getAndUpdateRestaurants } from '../../data/restaurants'
import { RestaurantMain } from '../../types/restaurants'
import RestaurantCard from './RestaurantCard'
import pizzaImg from '../../../static/assets/pizza.svg' // can be ignored
import coffeeImg from '../../../static/assets/coffee.svg' // can be ignored
import sushiImg from '../../../static/assets/sushi.svg' // can be ignored

interface Props {
  classes?: any
}


const RestaurantsList: FC<Props> = () => {
  
  const [restaurants, setRestaurants] = useState<RestaurantMain[]>([])
  // use set filters in other components
  const [filters, setFilters] = useState<any>()
  useEffect(() => {
    getAndUpdateRestaurants({setRestaurants, filters})
  }, [filters])
  console.log('pizzaImg:', pizzaImg)
  const restaurantImages = [
    pizzaImg,
    coffeeImg,
    sushiImg
  ]
  const max3Restaurants = restaurants?.slice(3, 6) || []
  return (
    <Container style={{ marginTop: '20px', maxWidth: '600px' }}>
      <Grid container direction='column' spacing={2}>
          {max3Restaurants && max3Restaurants.map(({name, city}, index) => 
          <Grid item xs={12} key={`${name}+${index}`}>
            <RestaurantCard
              {...{name, city, image: restaurantImages[index] }}
            />
          </Grid>
            )
          }
      </Grid>
    </Container>
    
  )
}

export default RestaurantsList