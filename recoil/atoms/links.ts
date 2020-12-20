import { atom } from 'recoil'

export interface LinkType {
  id: string
  original?: string
  shortened?: string
  copied?: boolean
}

const linksState = atom<LinkType[]>({
  key: 'linksState',
  default: []
})

export default linksState
