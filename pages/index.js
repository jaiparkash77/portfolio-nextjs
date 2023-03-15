import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jai Parkash | Full Stack Developer</title>
        <meta name="description" content="I am a full stack developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      
    </>
  )
}
