import React from 'react'
import Ahero from './../component/about/ahero.jsx'
import Header from './../component/header/header.jsx'
import Footer from './../component/footer/footer.jsx'
import Show from './../component/about/showcase.jsx'
import Aboutme from './../component/about/me.jsx'

const aboutpage = () => {
  return (
    <div>
        <Header />
        <Ahero />
        <Aboutme/>
        <Show/>
        <Footer />
    </div>
  )
}

export default aboutpage