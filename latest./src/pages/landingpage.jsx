import React from 'react'
import Hero from './../component/landing/hero.jsx'
import Typo from './../component/landing/typhography.jsx'
import Work from './../component/landing/ourworks.jsx'
import Break from './../component/landing/break.jsx'

const landingpage = () => {
  return (
    <div>
        <Hero />
        <Typo />
        <Work />
        <Break />

    </div>
  )
}

export default landingpage