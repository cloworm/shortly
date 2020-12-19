import { ReactElement } from 'react'

import { Size } from '../types/size.type'

const Button = ({
  label,
  size,
  rounded
}: {
  label: string,
  size: Size,
  rounded?: boolean
}): ReactElement => {
  if (size === 'small') {
    return (
      <button className={`tracking-wide bg-theme_cyan ${rounded ? 'rounded-full py-2.5' : 'rounded py-3'} font-bold text-white text-sm px-6 py-2.5`} id="signup">
        { label }
      </button>
    )
  }

  return (
    <button className={`tracking-wide bg-theme_cyan ${rounded ? 'rounded-full py-2.5' : 'rounded py-3 w-full'} font-bold text-white px-6`} id="signup">
      { label }
    </button>
  )
}

export default Button
