import { ReactElement } from 'react'

import Button from './Button'
import { Size } from '../types/size.type'

const Navbar = (): ReactElement => {
  return (
    <div className="relative flex items-center px-8 lg:px-24">
      <a href="#" className="font-bold  text-4xl lg:text-3xl text-theme_darkViolet">Shortly</a>

      <div className="pl-11 invisible lg:visible">
        <a href="#" className="text-sm pr-6 font-bold text-theme_grayishViolet" id="feat">Features</a>
        <a href="#" className="text-sm pr-6 font-bold text-theme_grayishViolet" id="pricing">Pricing</a>
        <a href="#" className="text-sm pr-6 font-bold text-theme_grayishViolet" id="resources">Resources</a>
      </div>

      <div className="flex-end ml-auto invisible lg:visible">
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="login">Login</a>
        <Button label="Sign Up" size={Size.SMALL} rounded />
      </div>

      <div className="w-36px h-36px lg:invisible absolute top-6 right-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-theme_grayishViolet" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
