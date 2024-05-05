import React from 'react'

const Main = () => {
  return (
    <div id='main'>
        <img className='relative z-10 object-cover object-center w-full h-screen opacity-50 blur-sm' src="https://cdn.duwub.dev/assets/jellyfish.jpg" alt="background" />
        <div className='absolute top-0 left-0 z-0 w-full h-screen bg-background'></div>
    </div>
  )
}

export default Main