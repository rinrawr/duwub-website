import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faYoutube, faLastfm } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
  return (
    <div class="text-center fixed bottom-1 w-full left-0 pointer-events-none">
        <a href="#" class="flex items-center justify-center mb-2 text-2xl font-semibold text-text-50 pointer-events-auto">
                         <img src="https://cdn.duwub.dev/assets/jellyfish.jpg" class="transition duration-100 ease-in-out w-12 h-12 hover:scale-125 hover:shadow-lg object-cover rounded-full" alt="duwub Logo" />
                    </a>

        <ul class="flex justify-center mb-2 mt-2 space-x-5">
            <li>
                <a href="https://www.youtube.com/@drawrb" target="_blank" class="pointer-events-auto text-text-50 hover:text-primary-500 transition ease-in-out duration-300">
                    <FontAwesomeIcon icon={faYoutube} size='xl' className='hover:scale-110'/>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/DUWUBrawr" target="_blank" class="pointer-events-auto text-text-50 hover:text-primary-500 transition ease-in-out duration-300">
                    <FontAwesomeIcon icon={faTwitter} size='xl' className='hover:scale-110'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/dwsnb" target="_blank" class="pointer-events-auto text-text-50 hover:text-primary-500 transition ease-in-out duration-300">
                    <FontAwesomeIcon icon={faLinkedinIn} size='xl' className='hover:scale-110'/>
                </a>
            </li>
            <li>
                <a href="https://www.last.fm/user/duwub" target="_blank" class="pointer-events-auto text-text-50 hover:text-primary-500 transition ease-in-out duration-300">
                    <FontAwesomeIcon icon={faLastfm} size='xl' className='hover:scale-110'/>
                </a>
            </li>
            <li>
                <a href="mailto:dawson@imaginary-labs.com" target="_blank" class="pointer-events-auto text-text-50 hover:text-primary-500 transition ease-in-out duration-300"> 
                    <FontAwesomeIcon icon={faEnvelope} size='xl' className='hover:scale-110'/>
                </a>
            </li>
        </ul>
        <span class="block text-sm text-center text-text-200 dark:text-slate-600">© duwub 2024 - All Rights Reserved.
            Built with {' '} 
            <a href="https://vitejs.dev/" target='_blank'
                class="text-purple-600 hover:underline pointer-events-auto">vite.js</a> and {' '}
                <a
                href="https://tailwindcss.com" target='_blank' class="text-purple-600 hover:underline pointer-events-auto">Tailwind
                CSS
            </a>.
        </span>
    </div>
  )
}
