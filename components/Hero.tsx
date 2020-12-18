import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Hero = (): ReactElement => {

  return (
    <div className="flex px-24">
      <div className="flex-1 pt-32 pb-20">
        <h1 className="text-7xl text-theme_darkViolet font-bold leading-17">
          More than just shorter links
        </h1>
        <p className="text-xl text-theme_gray pb-8">
          Build your brand&apos;s recognition and get detailed <br/>insights on how your links are performing.
        </p>
        <Button label="Get Started" size={Size.MEDIUM} rounded></Button>
      </div>
      <div className="flex-1 relative">
        <img
          src="/images/illustration-working.svg"
          className="absolute -right-52 bottom-0"
        />
      </div>
    </div>
  )
}

export default Hero
