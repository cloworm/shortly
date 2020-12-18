import { ReactElement } from 'react'

import FeatureCard from './FeatureCard'

const Features = (): ReactElement => {
  return (
    <div className="bg-theme_lightGray pt-32 pb-16">
      <h2 className="font-bold text-theme_darkViolet text-4xl text-center">
        Advanced Statistics
      </h2>
      <p className="text-theme_grayishViolet pt-6 leading-8 text-center">
        Track how your links are performing across the web with<br/> our advanced statistics dashboard.
      </p>
      <div className="flex px-24 py-10 space-x-6">
        <div>
          <FeatureCard
            icon="/images/icon-brand-recognition.svg"
            title="Brand Recognition"
            content="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
          />
        </div>
        <div className="pt-6">
          <FeatureCard
            icon="/images/icon-detailed-records.svg"
            title="Detailed Records"
            content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="pt-12">
          <FeatureCard
            icon="/images/icon-fully-customizable.svg"
            title="Fully Customizable"
            content="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  )
}

export default Features
