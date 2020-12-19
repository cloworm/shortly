import { MutableRefObject, useEffect, useRef, useCallback } from 'react'
import { useRecoilState } from 'recoil'

import menuState, { MenuState } from '../../recoil/atoms/menu'

interface UseMenu {
  isOpen: boolean
  toggleMenu: () => void
  wrapperRef: MutableRefObject<HTMLDivElement>
}

const useMenu = (): UseMenu => {
  const wrapperRef = useRef(null)
  const [menu, setMenu] = useRecoilState(menuState)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (menu === MenuState.OPEN) {
          setMenu(MenuState.CLOSED)
        }
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menu, setMenu])

  const toggleMenu = useCallback((): void => {
    setMenu(menu === MenuState.OPEN ? MenuState.CLOSED : MenuState.OPEN)
  }, [menu, setMenu])

  return {
    isOpen: menu === MenuState.OPEN,
    toggleMenu,
    wrapperRef,
  }
}

export default useMenu
