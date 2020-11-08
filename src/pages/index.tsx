import React from 'react'
// import { Grid } from '@material-ui/core'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout'
import LandingPage from '../components/LandingPage'

const Index = () => {
  return (
    <TopLayout>
      <>
        <LandingPage />
      </>
    </TopLayout>
  )
}

export default Index
