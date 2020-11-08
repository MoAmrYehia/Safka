import React from 'react'
// import { Grid } from '@material-ui/core'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout'

// import LandingPage from '../components/LandingPage'
// import Register from '../components/Register'
import Layout from '../components/Layout'
import Restaurants from '../components/restaurants/Restaurants'
// import LandingPage from '../components/LandingPage'
// import Register from '../components/Register'
// import Login from '../components/Login'
// import Invite from '../components/Invite'
import Chat from '../components/Chat'

const Index = () => {
  return (
    <TopLayout>
      <Layout>
      <>
        {/* <LandingPage /> */}
        {/* <Register /> */}
        <Restaurants />
        {/* <Login /> */}
        {/* <Invite /> */}

        <Chat />
      </>
      </Layout>
    </TopLayout>
  )
}

export default Index
