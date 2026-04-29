import React, { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 40) {
          navRef.current.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
          navRef.current.style.borderBottomColor = 'rgba(0,0,0,0.08)';
        } else {
          navRef.current.style.boxShadow = '0 8px 32px rgba(0,0,0,0.04)';
          navRef.current.style.borderBottomColor = 'rgba(255,255,255,0.2)';
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMobileOpen(false)
    }
  }

  const navLinks = [
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Process', id: 'process' },
    { label: 'About', id: 'about' },
  ]

  return (
    <nav ref={navRef} className="sticky top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/20">
      <div className="flex justify-between items-center max-w-[1440px] mx-auto px-6 md:px-12 h-20">
        <div 
          className="text-2xl font-bold tracking-tighter text-zinc-900 cursor-pointer"
          onClick={() => scrollTo('hero')}
        >
          ARJUN
        </div>
        
        <div className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.id)}
              className="nav-link text-zinc-600 hover:text-zinc-900 transition-colors font-['Epilogue'] tracking-widest text-sm uppercase font-semibold"
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => scrollTo('contact')}
          className="hidden md:block bg-[#4745db] text-white px-8 py-3 rounded-full font-['Epilogue'] tracking-widest text-sm uppercase font-semibold"
        >
          Start Project
        </button>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center gap-8`}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.id)}
            className="text-3xl font-['Epilogue'] font-bold text-zinc-900 uppercase tracking-widest"
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => scrollTo('contact')}
          className="mt-8 bg-[#4745db] text-white px-10 py-4 rounded-full font-['Epilogue'] tracking-widest text-lg uppercase font-semibold"
        >
          Start Project
        </button>
      </div>
    </nav>
  )
}

export default Navbar
