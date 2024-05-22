import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function button({ children, onClick }: ButtonProps) {
    return (
      <button
        className={`
          px-4 py-2 rounded-full 
          flex items-center gap-2 
          dark:text-text-50 text-text-950
          dark:shadow-[-5px_-5px_10px_rgba(13,_255,_206,_0.2),_5px_5px_10px_rgba(255,_255,_255,_0.25)]
          shadow-[-5px_-5px_10px_rgba(13,_255,_206,_0.2),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
          
          transition-all duration-300 ease-out
  
          hover:shadow-[-1px_-1px_5px_rgba(200,_255,_255,_0.3),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(226,_47,_216,_0.8),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
          dark:hover:text-secondary-300 hover:text-secondary-600
      `} onClick={onClick}
      >
        <span>{children}</span>
      </button>
    );
  };


