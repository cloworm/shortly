import { ReactElement } from 'react'

const Loading = ({ color = 'theme_cyan' }: { color?: string }): ReactElement => {
  return (
    <div>
      <span className={`animate-pulse text-${color} inline-block w-4 h-4 mr-2.5`}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
        </svg>
      </span>
      <span className={`animate-pulse animation-delay-500 text-${color} inline-block w-4 h-4 mr-2.5`}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
        </svg>
      </span>
      <span className={`animate-pulse animation-delay-1000 text-${color} inline-block w-4 h-4 mr-2.5`}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="currentColor" />
        </svg>
      </span>
    </div>
  )
}

export default Loading
