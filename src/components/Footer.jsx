import React from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openExternal = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="bg-[#111111] text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div 
          className="font-['Syne'] text-2xl font-bold tracking-tight cursor-pointer"
          onClick={scrollToTop}
        >
          STUDIO<span className="text-secondary">EXC.</span>
        </div>
        
        <div className="flex gap-8 font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] uppercase text-white/60">
          <button className="hover:text-white transition-colors" onClick={() => openExternal('https://twitter.com')}>Twitter</button>
          <button className="hover:text-white transition-colors" onClick={() => openExternal('https://linkedin.com')}>LinkedIn</button>
          <button className="hover:text-white transition-colors" onClick={() => openExternal('https://github.com')}>GitHub</button>
        </div>
        
        <div className="font-['Inter'] text-sm text-white/40">
          © {new Date().getFullYear()} Studio Excellence. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
