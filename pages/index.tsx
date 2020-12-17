import Head from 'next/head'
import { ReactElement } from 'react'

import Navbar from '../components/Navbar'

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </Head>


      <main className="px-24 py-8">
        <Navbar />

      </main>

      <footer>

      </footer>
    </div>
  )
}
