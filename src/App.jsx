import { useState } from 'react'
import Main from './components/Main'
// import Example from './components/Hero'
import { AuroraBackground } from './components/ui/aurora-background'
// import SphereBG from './components/spline-bg'
// import ThreeTest from './components/threeTest'
// import Topnav from './components/Topnav'


function App() {

  return (
    <div>
      <Main />   
      {/* <Example /> */}
      <AuroraBackground showRadialGradient={true}>
      </AuroraBackground>
      {/* <SphereBG /> */}
    </div>
  )
}

export default App
