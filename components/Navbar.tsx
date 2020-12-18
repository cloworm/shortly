import { ReactElement } from 'react'

import Button from './Button'

const Navbar = (): ReactElement => {
  return (
    <div className="flex items-center">
      <a href="#" className="font-bold text-3xl text-theme_darkViolet">Shortly</a>

      <div className="pl-11">
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="feat">Features</a>
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="pricing">Pricing</a>
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="resources">Resources</a>
      </div>

      <div className="flex-end ml-auto">
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="login">Login</a>
        <Button label="Sign Up" rounded />
      </div>
    </div>
  )
}

export default Navbar
