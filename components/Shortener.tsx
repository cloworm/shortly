import { ReactElement } from 'react'

import Button, { Size, Width } from './Button'

const Shortener = (): ReactElement => {
  return (
    <div className="bg-half px-6 lg:px-32 w-full mt-14">
      <div className="bg-theme_darkViolet bg-shorten_mobile bg-right-top lg:bg-left-top lg:bg-shorten lg:bg-105-100 py-5 px-5 lg:py-10 lg:px-14 rounded-lg flex flex-col lg:flex-row items-stretch">
        <div className="flex-1 flex items-center">
          <input
            className="w-full mb-4 lg:mb-0 lg:mr-6 rounded text-theme_gray px-6 py-3 focus:outline-none"
            placeholder="Shorten a link here..."
          />
        </div>
        <div>
          <Button size={Size.MEDIUM} width={Width.FULL}>Shorten it!</Button>
        </div>
      </div>
    </div>
  )
}

export default Shortener
