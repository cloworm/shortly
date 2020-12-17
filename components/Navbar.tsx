import { ReactElement } from 'react'

const Navbar = (): ReactElement => {
  return (
    <div className="flex items-center">
      <a href="#" className="font-bold text-3xl">Shortly</a>

      <div className="pl-11">
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="feat">Features</a>
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="pricing">Pricing</a>
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="resources">Resources</a>
      </div>

      <div className="flex-end ml-auto">
        <a href="#" className="text-sm pr-8 font-bold text-theme_grayishViolet" id="login">Login</a>
        <button className="bg-theme_cyan rounded-full font-bold text-white px-6 py-2.5" id="signup">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
