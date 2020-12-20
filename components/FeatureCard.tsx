import { ReactElement } from 'react'

const FeatureCard = ({
  icon,
  title,
  content
}: {
  icon: string,
  title: string,
  content: string
}): ReactElement => {
  return (
    <div className="bg-white rounded relative pt-20 px-7 pb-8">
      <div className="bg-theme_darkViolet inline-block rounded-full p-6 w-20 h-20 absolute -top-7 left-31 lg:left-6">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3 className="text-xl text-center lg:text-left text-theme_darkViolet font-bold">{title}</h3>
      <p className="text-center lg:text-left text-theme_grayishViolet pt-4">
        {content}
      </p>
    </div>
  )
}

export default FeatureCard
