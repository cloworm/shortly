import { ReactElement, ReactNode } from 'react'

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export enum Width {
  FULL = 'full'
}

const Button = ({
  children,
  size,
  rounded,
  width,
}: {
  children: ReactNode,
  size: Size,
  rounded?: boolean,
  width?: Width,
}): ReactElement => {
  return (
    <button className={`
      tracking-wide
      bg-theme_cyan
      font-bold
      text-white
      px-6
      ${rounded ? 'rounded-full py-2.5' : 'rounded py-3'}
      ${size === Size.SMALL ? 'text-sm py-2.5' : ''}
      ${width === Width.FULL ? 'w-full' : ''}
    `}>
      {children}
    </button>
  )
}

export default Button
