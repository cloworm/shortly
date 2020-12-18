import { ReactElement } from 'react'

const Button = ({
  label,
  rounded
}: {
  label: string,
  rounded?: boolean
}): ReactElement => {
  return (
    <button className={`bg-theme_cyan ${rounded ? 'rounded-full' : 'rounded'} font-bold text-white px-6 py-2.5`} id="signup">
      { label }
    </button>
  )
}

export default Button
