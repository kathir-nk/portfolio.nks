import React from 'react'
import Hero from './../component/landing/hero.jsx'
import Typo from './../component/landing/typhography.jsx'
import Work from './../component/landing/work.jsx'
import Break from './../component/landing/break.jsx'

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <Hero />
      
      {/* NO SPACER - Next section comes immediately after hero unpin */}
      
      <div className="relative z-10 bg-white">
        <Typo />
        <Work />
        <Break />
      </div>
    </div>
  )
}

export default LandingPage