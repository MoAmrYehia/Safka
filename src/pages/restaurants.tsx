import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import RestaurantsList from '../components/restaurants/RestaurantsList'

interface Props {
  classes?: any
}


const Restaurants: FC<Props> = () => {
  
  return (
    <Container>
      <RestaurantsList/>
    </Container>
  )
}

export default Restaurants