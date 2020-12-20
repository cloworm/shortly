import { ReactElement } from 'react'

import Button, { Size } from './Button'
import { LinkType } from '../recoil/atoms/links'

const Link = ({ link }: { link: LinkType }): ReactElement => {
  return (
    <div className="pt-4">
      <div className="bg-white flex items-center rounded px-8 py-3">
        <div className="text-theme_veryDarkViolet hover:text-theme_cyan">
          <a href={link.original} target="_blank" rel="noopener noreferrer">
            {link.original}
          </a>
        </div>
        <div className="ml-auto text-theme_cyan hover:text-theme_veryDarkViolet pr-5">
          <a href={link.shortened} target="_blank" rel="noopener noreferrer">
            {link.shortened}
          </a>
        </div>
        <div>
          <Button size={Size.MEDIUM}>Copy</Button>
        </div>
      </div>
    </div>
  )
}

export default Link
