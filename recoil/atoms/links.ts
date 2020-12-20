import { atom } from 'recoil'

export interface LinkType {
  original?: string
  shortened?: string
  copied?: boolean
}

const linksState = atom<LinkType[]>({
  key: 'linksState',
  default: [
    {
      original: 'https://www.frontendmentor.io',
      shortened: 'https://rel.ink/k4Kyk',
      copied: false,
    },
    {
      original: 'https://twitter.com/frontendmentor',
      shortened: 'https://rel.ink/gxOXp9',
      copied: false,
    },
    {
      original: 'https://www.linkedin.com/company/frontend-mentor',
      shortened: 'https://rel.ink/gob3X9',
      copied: false,
    },
  ]
})

export default linksState
