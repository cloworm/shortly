import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Shortener = (): ReactElement => {
  return (
    <div className="bg-half px-32 w-full mt-14">
      <div className="bg-theme_darkViolet bg-shorten py-10 px-14 rounded-lg flex items-stretch">
        <div className="flex-1 flex items-center">
          <input
            className="w-full mr-6 rounded text-theme_gray px-6 py-3"
            placeholder="Shorten a link here..."
          />
        </div>
        <div className="">
          <Button label="Shorten it!" size={Size.MEDIUM} />
        </div>
      </div>
    </div>
  )
}

export default Shortener
