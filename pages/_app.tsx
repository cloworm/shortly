import { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
