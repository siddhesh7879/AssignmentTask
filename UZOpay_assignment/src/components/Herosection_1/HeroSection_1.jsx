import React from 'react'
import HeroText from '../Herosection_1/HeroText_1'
import HeroVisual from '../Herosection_1/HeroVisual_1'

function HeroSection_1() {
  return (
    <section className="flex flex-col  md:flex-row  p-8 bg-transparent mt-25 relative gap-37">
      <HeroText />
      <div className="flex-col"><HeroVisual/></div>
    </section>
  )
}

export default HeroSection_1
