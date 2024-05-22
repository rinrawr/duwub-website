import react, { useEffect } from 'react'

import Hero from './sections/Hero'
import { Projects }   from './components/Projects/Projects' 

// import { Nav } from './components/ui/CornerNav'
import { GlassNavigation } from './components/ui/GlassNavigation'
import { About } from './sections/About'
import { Footer } from './components/Footer'
import { Reveal } from './utils/Reveal'


function App() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className=''>
      {/* <Nav /> */}

      <GlassNavigation />
      <Reveal>
        <Hero/> 
      </Reveal>

      <About/>

      <Reveal>
        <div className='w-full dark:bg-accent-950 bg-purple-200 transition-colors duration-1000'>
          <div className='mx-auto max-w-5xl px-4 py-8 md:px-8 space-y-32 pb-24'><Projects/></div>
        </div>
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </div>

  )
}

export default App