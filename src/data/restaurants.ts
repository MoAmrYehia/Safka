import axios from 'axios'
import { RestaurantMain } from '../types/restaurants'

interface GetRestaurantsProps {
  setRestaurants: React.Dispatch<React.SetStateAction<RestaurantMain[]>>
  // add handling for filters
  filters?: any
}

const getAndUpdateRestaurants = ({
  setRestaurants,
  filters
}: GetRestaurantsProps) => {
  return axios.post(`${process.env.GATSBY_AITO_API_URL || ''}/api/v1/_search`, {
    from: 'restaurants',
    ...(filters && {where: filters})
  }, {
    headers: { 'x-api-key': process.env.GATSBY_AITO_API_KEY || '' },
  })
    .then(result => {
      return setRestaurants(result.data.hits)
    })
}

export { getAndUpdateRestaurants }