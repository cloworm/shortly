import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
    <footer className="bg-theme_veryDarkViolet flex px-24 py-10 flex-col lg:flex-row lg:justify-between">
      <div>
        <p className="text-white text-3xl text-center lg:text-left font-bold">
          Shortly
        </p>
      </div>
      <div className="flex flex-col text-center lg:text-left lg:flex-row lg:space-x-16 pb-10 lg:pb-0">
        <div>
          <p className="text-white font-bold pt-10 pb-6 lg:pb-4">
            Features
          </p>
          <ul className="text-theme_grayishViolet">
            <li className="leading-8">Link Shortening</li>
            <li className="leading-8">Branded Links</li>
            <li className="leading-8">Analytics</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold pt-10 pb-6 lg:pb-4">
            Resources
          </p>
          <ul className="text-theme_grayishViolet">
            <li className="leading-8">Blog</li>
            <li className="leading-8">Developers</li>
            <li className="leading-8">Support</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-bold pt-10 pb-6 lg:pb-4">
            Company
          </p>
          <ul className="text-theme_grayishViolet">
            <li className="leading-8">About</li>
            <li className="leading-8">Our Team</li>
            <li className="leading-8">Careers</li>
            <li className="leading-8">Contact</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center space-x-5">
        <a href="#">
          <img src="/images/icon-facebook.svg" />
        </a>
        <a href="#">
          <img src="/images/icon-twitter.svg" />
        </a>
        <a href="#">
          <img src="/images/icon-pinterest.svg" />
        </a>
        <a href="#">
          <img src="/images/icon-instagram.svg" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
