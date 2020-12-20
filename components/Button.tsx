import { ReactElement, ReactNode } from 'react'

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium'
}

export enum Width {
  FIXED='fixed',
  FULL = 'full'
}

const Button = ({
  backgroundColor,
  children,
  disabled,
  onClick,
  rounded,
  size,
  width,
}: {
  backgroundColor?: string,
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
        font-bold
        text-white
        px-6
        focus:outline-none
        active:outline-none
        transition-all
        ease-in-out
        ${backgroundColor ? 'bg-' + backgroundColor : 'bg-theme_cyan hover:bg-theme_lightCyan'}
        ${rounded ? 'rounded-full py-2.5' : 'rounded py-3'}
        ${size === Size.SMALL ? 'text-sm py-2.5' : ''}
        ${width === Width.FULL ? 'w-full' : (width === Width.FIXED ? 'w-32' : '' )}
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
