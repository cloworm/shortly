import { atom } from 'recoil'

export enum MenuState {
  OPEN = 'open',
  CLOSED = 'closed',
}

const menuState = atom<MenuState>({
  key: 'menuState',
  default: MenuState.CLOSED,
})

export default menuState
