import { useEffect, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { nanoid } from 'nanoid'

import linksState from '../../recoil/atoms/links'
import localStorage from './useLocalStorage'

const useSetLocalLinks = () => {
  const { getLocalStorage, setLocalStorage } = localStorage()
  const setLinks = useSetRecoilState(linksState)

  const setDefault = useCallback(() => {
    setLocalStorage('links', JSON.stringify([
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
    ]))
  }, [setLocalStorage])

  useEffect(() => {
    const value = getLocalStorage('links')

    if (value) {
      try {
        setLinks(JSON.parse(value))
      } catch (e) {
        setDefault()
      }
    } else {
      setDefault()
    }

    return null
  }, [getLocalStorage, setLinks, setDefault])
}

export default useSetLocalLinks
