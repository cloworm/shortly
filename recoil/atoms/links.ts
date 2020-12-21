import { atom } from 'recoil'

export interface LinkType {
  id: string
  original?: string
  shortened?: string
}

const linksState = atom<LinkType[]>({
  key: 'linksState',
  default: null
})

export default linksState
