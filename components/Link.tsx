import { ReactElement, useCallback, useState } from 'react'
import { useClipboard } from 'use-clipboard-copy'

import Button, { Size, Width } from './Button'
import { LinkType } from '../recoil/atoms/links'

const Link = ({ link }: { link: LinkType }): ReactElement => {
  const [copied, setCopied] = useState(false)
  const clipboard = useClipboard()

  const handleClick = useCallback(() => {
    clipboard.copy(link.shortened)
    setCopied(true)
  }, [clipboard, link])

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
          <Button
            size={Size.MEDIUM}
            onClick={handleClick}
            backgroundColor={ copied ? 'theme_darkViolet' : ''}
            width={Width.FIXED}
          >
            { copied ? 'Copied!' : 'Copy' }
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Link
