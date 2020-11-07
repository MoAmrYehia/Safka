import React from 'react'
import Layout from '../components/Layout'

import LandingPage from '../components/LandingPage'
import Register from '../components/Register'
import Login from '../components/Login'
import Invite from '../components/Invite'
import Chat from '../components/Chat'

const Index = () => {
  return (
    <Layout>
      <>
        {/* <LandingPage /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Invite /> */}

        <Chat />
      </>
    </Layout>
  )
}

export default Index
