import { ReactElement, useCallback, useState } from 'react'
import { nanoid } from 'nanoid'

import Button, { Size, Width } from './Button'
import { replaceItemAtIndex } from './utils/array'
import useLocalStorageLinks from './hooks/useLinks'

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
  const [links, setLinks] = useLocalStorageLinks()

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
    setLoading(false)
  }, [inputValue, links, setLinks])

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
                px-3.5
                lg:px-6
                py-2
                focus:outline-none
                box-border
                border-4
                ${error.hasError ? 'border-theme_red text-theme_red placeholder-theme_red placeholder-opacity-40' : 'border-white text-theme_gray'}
              `}
              placeholder="Shorten a link here..."
              value={inputValue}
              onChange={onChange}
            />
          </div>
          <div className={`relative -mt-4 lg:mt-0 pt-1.5 lg:pt-0 pb-4 lg:pb-0 lg:absolute text-sm lg:text-base text-theme_red italic lg:top-23 ${error.hasError ? 'block' : 'hidden'}`}>
            {error.message}
          </div>
          <div>
            <Button
              size={Size.MEDIUM}
              width={Width.FULL}
              onClick={addLink}
              disabled={loading}
            >
              Shorten It!
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Shortener
