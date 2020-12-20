import { ReactElement, useCallback, useState } from 'react'
import { nanoid } from 'nanoid'

import Button, { Size, Width } from './Button'
import linksState from '../recoil/atoms/links'
import { useRecoilState } from 'recoil'
import { replaceItemAtIndex } from './utils/array'
import useLocalStorage from './hooks/useLocalStorage'

interface ShrtcodeResult {
  code: string
  short_link: string
  full_short_link: string
}

interface ShrtcodeResponse {
  ok: boolean
  result: ShrtcodeResult
}

const Shortener = (): ReactElement => {
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    hasError: false,
    message: null
  })
  const [links, setLinks] = useRecoilState(linksState)
  const { setLocalStorage } = useLocalStorage()

  const addLink = useCallback(async () => {
    // Check that input has a value
    if (!inputValue || inputValue.trim()?.length === 0) {
      setError({ hasError: true, message: 'Please add a link' })
      return
    }

    const value = inputValue

    // Check that input is a valid url
    if (!validURL(value)) {
      setError({ hasError: true, message: 'Please enter a valid link' })
      return
    }

    setError({ hasError: false, message: null })

    setLoading(true)
    setInputValue('')
    const newLink = {
      id: nanoid(),
      original: value,
      shortened: null,
      copied: false
    }
    let newLinks = [
      newLink,
      ...links
    ]
    setLinks(newLinks)

    const response = await createShortenedLink(value)
    newLinks = replaceItemAtIndex(newLinks, 0, {
      ...newLink,
      shortened: response.result.full_short_link,
    })

    setLinks(newLinks)
    setLocalStorage('links', JSON.stringify(newLinks))
    setLoading(false)
  }, [inputValue, links, setLinks, setLocalStorage])

  const createShortenedLink = async (value: string): Promise<ShrtcodeResponse> => {
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
    return response.json()
  }

  const onChange = ({ target: { value }}) => {
    setInputValue(value)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    addLink()
  }, [addLink])

  const validURL = (str: string): boolean => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i') // fragment locator
    return !!pattern.test(str)
  }

  return (
    <div className="bg-half px-6 lg:px-28 w-full mt-14">
      <form onSubmit={handleSubmit}>
        <div className="relative bg-theme_darkViolet bg-shorten_mobile bg-right-top lg:bg-left-top lg:bg-shorten lg:bg-105-100 py-5 px-5 lg:py-10 lg:px-14 rounded-lg flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 flex items-center">
            <input
              autoComplete="off"
              type="text"
              name="url"
              className={`
                w-full
                mb-4
                lg:mb-0
                lg:mr-6
                rounded
                px-6
                py-2
                text-theme_gray
                focus:outline-none
                box-border
                border-4
                ${error.hasError ? 'border-theme_red' : 'border-white'}
              `}
              placeholder="Shorten a link here..."
              value={inputValue}
              onChange={onChange}
            />
          </div>
          <div className={`absolute text-theme_red italic top-23 ${error.hasError ? 'block' : 'hidden'}`}>
            {error.message}
          </div>
          <div>
            <Button
              size={Size.MEDIUM}
              width={Width.FULL}
              onClick={addLink}
              disabled={loading}
            >
              Shorten it!
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Shortener
