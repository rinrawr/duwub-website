import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faYoutube, faLastfm } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
  return (
    <div class="text-center bottom-0 py-5 w-full left-0 bg-background-50 dark:bg-background-950">
        <span class="block text-sm text-center text-text-200 dark:text-slate-600">     <p className="text-center text-text-950 dark:text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-primary-500 hover:underline">
          @duwub
        </a> - 2024
      </p> Built using {''}
            <a href="https://vitejs.dev/" target='_blank'
                className="text-purple-600 pointer-events-auto hover:underline">vite.js</a> and {' '}
                <a
                href="https://tailwindcss.com" target='_blank' class="text-purple-600 hover:underline pointer-events-auto">Tailwind
                CSS
            </a>.
        </span>
    </div>
  )
}
