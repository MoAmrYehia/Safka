import React, { FC } from 'react'
import '../../static/styles/styles.css'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
