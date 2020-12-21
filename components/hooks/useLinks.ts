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
        original: 'https://github.com/cloworm',
        shortened: 'https://shrtco.de/v9IcWA',
      }, {
        id: nanoid(),
        original: 'https://cloworm.github.io/',
        shortened: 'https://shrtco.de/sKpucB',
      }
    ],
  )
}

export default useLinks