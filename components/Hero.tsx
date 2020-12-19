import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Hero = (): ReactElement => {

  return (
    <div className="flex flex-col lg:flex-row px-6 lg:px-24">
      <div className="flex-1 pt-10 lg:pt-32 pb-6">
        <h1 className="text-3xl lg:text-7xl text-theme_darkViolet font-bold leading-18 lg:leading-17 text-center lg:text-left pb-4">
          More than just shorter links
        </h1>
        <p className="text-base lg:text-xl text-theme_grayishViolet text-center lg:text-left px-6 lg:px-0 lg:pr-24 pb-8">
          Build your brand&apos;s recognition and get detailed insights on how your links are performing.
        </p>
        <div className="text-center lg:text-left">
          <Button label="Get Started" size={Size.MEDIUM} rounded></Button>
        </div>
      </div>
      <div className="h-80 lg:h-auto flex-1 relative order-first lg:order-last">
        <img
          src="/images/illustration-working.svg"
          className="lg:absolute lg:-right-52 lg:bottom-0  max-w-none w-auto lg:max-w-full h-full lg:h-auto"
        />
      </div>
    </div>
  )
}

export default Hero
