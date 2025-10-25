import React from 'react'
import HeroText from '../Herosection_1/HeroText_1'
import HeroVisual from '../Herosection_1/HeroVisual_1'

function HeroSection_1() {
  return (
    <section className="flex flex-col  md:flex-row justify-between p-8 bg-transparent mt-28 relative  md:left-32">
      <HeroText />
      <div className="md:w-1/2"><HeroVisual/></div>
    </section>
  )
}

export default HeroSection_1
