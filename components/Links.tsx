import { ReactElement } from 'react'
import { useRecoilState } from 'recoil'

import Link from '../components/Link'
import linksState from '../recoil/atoms/links'

const Links = (): ReactElement => {
  const [links] = useRecoilState(linksState)

  return (
    <div className="bg-theme_lightGray pt-2 px-28">
      {
        links.map((link, idx) => {
          return <Link key={idx} link={link} />
        })
      }
    </div>
  )
}

export default Links
