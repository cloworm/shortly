import { ReactElement } from 'react'

import Button, { Size, Width } from './Button'

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
        <Button size={Size.SMALL} rounded>Sign Up</Button>
      </div>

      <div className="w-36px h-36px lg:invisible absolute top-6 right-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-theme_grayishViolet" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <div className="bg-theme_darkViolet rounded-lg absolute top-20 left-6 right-6 lg:invisible z-50 py-6 px-4">
        <ul className="text-white text-center font-bold border-b border-theme_grayishViolet">
          <li className="py-4">Features</li>
          <li className="py-4">Pricing</li>
          <li className="py-4">Resources</li>
        </ul>
        <ul className="text-white text-center font-bold border-theme_grayishViolet">
          <li className="py-4">Login</li>
        </ul>
        <div className="text-center">
          <Button size={Size.SMALL} width={Width.FULL} rounded>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
