import { useEffect, useCallback } from 'react'
import { RecoilState, useRecoilState } from 'recoil'

import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

function useRecoilLocalStorage<T>(key: string, recoilState: RecoilState<T>, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useRecoilState<T>(recoilState)

  const setValue = useCallback((value: T): void => {
    setLocalStorage(key, JSON.stringify(value))
    setState(value)
  }, [key, setState])

  useEffect(() => {
    if (!state || (Array.isArray(state) && state['length'] > 0)) return

    let nextValue: T
    try {
      nextValue = JSON.parse(getLocalStorage(key)) || defaultValue
    } catch (e) {
      nextValue = defaultValue
    }

    if (nextValue) {
      setValue(nextValue)
    }
  }, [defaultValue, key, setValue, state])

  return [
    state,
    setValue
  ]
}

export default useRecoilLocalStorage
