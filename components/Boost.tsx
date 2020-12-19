import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Boost = (): ReactElement => {
  return (
    <div className="bg-boost_mobile lg:bg-boost bg-100-100 lg:bg-auto py-20 lg:py-10 text-center">
      <p className="text-white font-bold text-2xl lg:text-3xl text-center pb-6">
        Boost your links today
      </p>

      <Button label="Get Started" size={Size.MEDIUM} rounded />
    </div>
  )
}

export default Boost
