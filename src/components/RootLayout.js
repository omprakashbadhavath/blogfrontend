import React from 'react'
import NavigationBar from './navbar/NavigationBar'
import Footer from './footer/Footer'
import {Outlet} from 'react-router-dom'
function RootLayout() {
  return (
    <div>
<NavigationBar/>

<Outlet/>
<div style={{minHeight:'80vh'}}></div>
<Footer/>

    </div>
  )
}

export default RootLayout  