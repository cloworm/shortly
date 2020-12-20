import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useClipboard } from 'use-clipboard-copy'

import Button, { Size, Width } from './Button'
import { LinkType } from '../recoil/atoms/links'
import Loading from './Loading'

const Link = ({ link }: { link: LinkType }): ReactElement => {
  const [copied, setCopied] = useState(false)
  const clipboard = useClipboard()

  const handleClick = useCallback(() => {
    clipboard.copy(link.shortened)
    setCopied(true)
  }, [clipboard, link])

  useEffect(() => {
    if (!copied) return

    const timeout = setTimeout(() => {
      setCopied(false)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [copied])

  return (
    <div className="pt-4">
      <div className="bg-white flex flex-col lg:flex-row lg:items-center rounded lg:px-8 py-4 lg:py-3">
        <div className="pb-3 lg:pb-0 px-4 lg:px-0 text-theme_veryDarkViolet hover:text-theme_cyan border-b border-theme_lightGray lg:border-none overflow-hidden overflow-ellipsis">
          <a href={link.original} target="_blank" rel="noopener noreferrer">{link.original}</a>
        </div>
        <div className="lg:ml-auto px-4 lg:px-0 text-theme_cyan hover:text-theme_veryDarkViolet py-4 lg:py-0 lg:pr-5 overflow-hidden overflow-ellipsis">
          {
            link.shortened
              ? <a href={link.shortened} target="_blank" rel="noopener noreferrer">{link.shortened}</a>
              : <Loading />
          }
        </div>
        <div className="hidden lg:inline-block">
          <Button
            size={Size.MEDIUM}
            onClick={handleClick}
            backgroundColor={ copied ? 'theme_darkViolet' : ''}
            width={Width.FIXED}
            disabled={link.shortened === undefined}
          >
            { copied ? 'Copied!' : 'Copy' }
          </Button>
        </div>
        <div className="lg:hidden px-4">
          <Button
            size={Size.MEDIUM}
            onClick={handleClick}
            backgroundColor={ copied ? 'theme_darkViolet' : ''}
            width={Width.FULL}
            disabled={link.shortened === undefined}
          >
            { copied ? 'Copied!' : 'Copy' }
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Link
