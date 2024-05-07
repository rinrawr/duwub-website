import react, { useEffect } from 'react'

import Hero from './components/Hero'
import { StickyCards } from './components/StickyCards'

// import { Nav } from './components/ui/CornerNav'
import { GlassNavigation } from './components/ui/GlassNavigation'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Reveal } from './utility/Reveal'


function App() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='overflow-scroll '>
      {/* <Nav /> */}

      <GlassNavigation />
      <Reveal>
        <Hero id="home"/> 
      </Reveal>

      <About/>

      <Reveal>
        <Footer />
      </Reveal>

      {/* <Reveal>
        <StickyCards />
      </Reveal> */}
    </div>
  )
}

export default App
