import axios from 'axios'

const getAllRestaurants = () => {
  return axios.post(`${process.env.GATSBY_AITO_API_URL || ''}/api/v1/_search`, {
    from: 'restaurants',
  }, {
    headers: { 'x-api-key': process.env.GATSBY_AITO_API_KEY || '' },
  })
    .then(result => {
      return result.data.restaurants
    })
}

export { getAllRestaurants }