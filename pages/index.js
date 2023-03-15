import About from '@/components/About'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'


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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}
