import react, { useEffect } from 'react'

import Hero from './sections/Hero'
import { Projects }   from './sections/Projects'

// import { Nav } from './components/ui/CornerNav'
import { GlassNavigation } from './components/ui/GlassNavigation'
import { About } from './sections/About'
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
    <div>
      {/* <Nav /> */}

      <GlassNavigation />
      <Reveal>
        <Hero/> 
      </Reveal>

      <About/>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </div>

  )
}

export default App