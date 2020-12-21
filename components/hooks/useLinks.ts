import { nanoid } from 'nanoid'

import useRecoilLocalStorage from './useRecoilLocalStorage'
import linkState, { LinkType } from '../../recoil/atoms/links'

const useLinks = (): [LinkType[], (value: LinkType[]) => void] => {
  return useRecoilLocalStorage<LinkType[]>(
    'links',
    linkState,
    [
      {
        id: nanoid(),
        original: 'https://www.frontendmentor.io',
        shortened: 'https://rel.ink/k4Kyk',
        copied: false,
      },
      {
        id: nanoid(),
        original: 'https://twitter.com/frontendmentor',
        shortened: 'https://rel.ink/gxOXp9',
        copied: false,
      },
      {
        id: nanoid(),
        original: 'https://www.linkedin.com/company/frontend-mentor',
        shortened: 'https://rel.ink/gob3X9',
        copied: false,
      },
    ],
  )
}

export default useLinks
