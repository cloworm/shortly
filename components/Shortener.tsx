import { ReactElement, useCallback, useState } from 'react'

import Button, { Size, Width } from './Button'
import linksState from '../recoil/atoms/links'
import { useSetRecoilState } from 'recoil'

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
  const setLinks = useSetRecoilState(linksState)

  const addLink = useCallback(async () => {
    console.log('value', inputValue)
    if (!inputValue || inputValue.trim()?.length === 0) return
    setLoading(true)

    createShortenedLink(inputValue).then((response) => {
      console.log('response', response)
      setLinks((oldLinks) => [
        {
          original: inputValue,
          shortened: response.result.full_short_link,
          copied: false,
        },
        ...oldLinks,
      ])
      setInputValue('')
      setLoading(false)
    })
  }, [])

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

  return (
    <div className="bg-half px-6 lg:px-28 w-full mt-14">
      <form onSubmit={handleSubmit}>
        <div className="bg-theme_darkViolet bg-shorten_mobile bg-right-top lg:bg-left-top lg:bg-shorten lg:bg-105-100 py-5 px-5 lg:py-10 lg:px-14 rounded-lg flex flex-col lg:flex-row items-stretch">
          <div className="flex-1 flex items-center">
            <input
              autoComplete="off"
              type="text"
              name="url"
              className="w-full mb-4 lg:mb-0 lg:mr-6 rounded px-6 py-3 text-theme_gray focus:outline-none"
              placeholder="Shorten a link here..."
              value={inputValue}
              onChange={onChange}
            />
          </div>
          <div>
            <Button size={Size.MEDIUM} width={Width.FULL} onClick={addLink} disabled={loading}>Shorten it!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Shortener
