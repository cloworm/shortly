import { ReactElement } from 'react'

import Button, { Size } from './Button'

const Boost = (): ReactElement => {
  return (
    <div className="bg-boost_mobile flex flex-col justify-center lg:bg-boost bg-100-100 lg:bg-auto h-74 lg:h-60 lg:py-10 text-center">
      <div>
        <p className="text-white font-bold text-2xl lg:text-3xl text-center pb-4 lg:pb-6">
          Boost your links today
        </p>
      </div>
      <div>
        <Button size={Size.MEDIUM} rounded>Get Started</Button>
      </div>
    </div>
  )
}

export default Boost
