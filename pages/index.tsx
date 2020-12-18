import Head from 'next/head'
import { ReactElement } from 'react'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Shortener from '../components/Shortener'
import Features from '../components/Features'
import Boost from '../components/Boost'

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="py-8 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Shortener />
        <Features />
        <Boost />
      </main>

      <footer>

      </footer>
    </div>
  )
}
