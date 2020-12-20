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
  disabled,
  onClick,
  rounded,
  size,
  width,
}: {
  children: ReactNode,
  disabled?: boolean,
  onClick?: () => void,
  rounded?: boolean,
  size: Size,
  width?: Width,
}): ReactElement => {
  return (
    <button
      className={`
        tracking-wide
        bg-theme_cyan
        font-bold
        text-white
        px-6
        hover:bg-theme_lightCyan
        focus:outline-none
        active:outline-none
        transition-all
        ease-in-out
        ${rounded ? 'rounded-full py-2.5' : 'rounded py-3'}
        ${size === Size.SMALL ? 'text-sm py-2.5' : ''}
        ${width === Width.FULL ? 'w-full' : ''}
      `}
      onClick={onClick}
      type={onClick ? 'submit' : 'button'}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
