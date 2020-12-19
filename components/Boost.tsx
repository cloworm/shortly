import { ReactElement } from 'react'

import Button, { Size } from './Button'

const Boost = (): ReactElement => {
  return (
    <div className="bg-boost_mobile lg:bg-boost bg-100-100 lg:bg-auto py-20 lg:py-10 text-center">
      <p className="text-white font-bold text-2xl lg:text-3xl text-center pb-6">
        Boost your links today
      </p>

      <Button size={Size.MEDIUM} rounded>Get Started</Button>
    </div>
  )
}

export default Boost
