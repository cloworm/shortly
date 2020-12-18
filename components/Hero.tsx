import { ReactElement } from 'react'

import Button from './Button'

const Hero = (): ReactElement => {

  return (
    <div className="relative">
      <div className="w-3/5 pt-32">
        <img
          className="absolute top-0 -right-40 -z-1 h-full"
          src="/images/illustration-working.svg"
        />
        <h1 className="text-6xl text-theme_darkViolet font-bold leading-15">
          More than just shorter links
        </h1>
        <p className="text-theme_gray pb-8">
          Build your brand&apos;s recognition and get detailed &nbsp; &nbsp; insights on how your links are performing.
        </p>
        <Button label="Get Started" rounded></Button>
      </div>
    </div>
  )
}

export default Hero
