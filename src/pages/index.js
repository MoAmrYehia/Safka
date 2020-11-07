import React from 'react'
import { getAllRestaurants } from '../data/restaurants'

export default function Home() {
  const restaurants = getAllRestaurants()
  console.log('restaurants:', restaurants)
  return <div>Hello world!</div>
}
