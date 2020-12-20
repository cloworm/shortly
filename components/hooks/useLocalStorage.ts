interface UseLocalStorage {
  getLocalStorage: (key: string) => string|null
  setLocalStorage: (key: string, value: string) => void
  resetLocalStorage: () => void
}

const useLocalStorage = (): UseLocalStorage => {
  const getLocalStorage = (key: string) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key)
    }

    return null
  }

  const setLocalStorage = (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    }
  }

  const resetLocalStorage = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear()
    }
  }

  return {
    getLocalStorage,
    setLocalStorage,
    resetLocalStorage,
  }
}

export default useLocalStorage
