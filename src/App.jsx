import Hero from './components/Hero'
import { StickyCards } from './components/StickyCards'

import { Nav } from './components/ui/CornerNav'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Reveal } from './utility/Reveal'


function App() {

  return (
    <div>
      {/* <Nav /> */}
      <Reveal>
        <Hero /> 
      </Reveal>

      <About  id="about"/>

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
