import React from 'react'
// import { Grid } from '@material-ui/core'
import TopLayout from '../../plugins/gatsby-plugin-top-layout/TopLayout'

// import LandingPage from '../components/LandingPage'
// import Register from '../components/Register'
import Login from '../components/Login'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <TopLayout>
      <Layout>
      <>
        {/* <LandingPage /> */}
        {/* <Register /> */}
        <Login />
      </>
      </Layout>
    </TopLayout>
  )
}

export default Index
