import { ReactElement } from 'react'

import FeatureCard from './FeatureCard'

const Features = (): ReactElement => {
  return (
    <div className="bg-theme_lightGray pt-24 lg:pt-32 pb-12 lg:pb-20">
      <h2 className="font-bold text-theme_darkViolet text-2xl lg:text-4xl text-center">
        Advanced Statistics
      </h2>
      <p className="text-theme_grayishViolet pt-6 pb-8 lg:pb-0 px-9 lg:px-0 text-sm lg:text-base leading-6 lg:leading-8 text-center">
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>
      <div className="px-6 lg:px-24 py-8 lg:py-10">
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-6 bg-stripe-v lg:bg-stripe-h">
          <div>
            <FeatureCard
              icon="/images/icon-brand-recognition.svg"
              title="Brand Recognition"
              content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
            />
          </div>
          <div className="lg:pt-6">
            <FeatureCard
              icon="/images/icon-detailed-records.svg"
              title="Detailed Records"
              content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
          </div>
          <div className="lg:pt-12">
            <FeatureCard
              icon="/images/icon-fully-customizable.svg"
              title="Fully Customizable"
              content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
