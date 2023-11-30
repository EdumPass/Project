import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({child}) => {
  return (
    <div>
        <Header/>
        {child}
        <Footer/>
    </div>
  )
}

export default Layout