import Main from './components/Hero'
import { StickyCards } from './components/StickyCards'

import { Nav } from './components/ui/CornerNav'
import { RevealBento } from './components/Bento'
import { Footer } from './components/Footer'


function App() {

  return (
    <div>
      <Nav />
      <Main /> 
      <RevealBento  id="about"/>
      <Footer />
    </div>
  )
}

export default App
