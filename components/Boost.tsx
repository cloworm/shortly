import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Boost = (): ReactElement => {
  return (
    <div className="bg-boost py-12 text-center">
      <p className="text-white font-bold text-3xl text-center pb-6">
        Boost your links today
      </p>

      <Button label="Get Started" size={Size.MEDIUM} rounded />
    </div>
  )
}

export default Boost
