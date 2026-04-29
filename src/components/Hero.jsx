import React from 'react'

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative min-h-[921px] flex items-center grain-bg overflow-hidden px-6 md:px-12" id="hero">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
          <span className="text-[20vw] font-black tracking-widest text-zinc-900">ARJUN</span>
        </div>
        
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 pt-20 lg:pt-0">
          <div className="lg:col-span-7 reveal">
            <h1 className="shimmer-text font-['Epilogue'] text-5xl md:text-7xl lg:text-[88px] font-black tracking-tight text-zinc-900 mb-8 leading-[1.05]">
              We Build <br/><span className="text-secondary">Websites</span> That <br/>Actually Work.
            </h1>
            <p className="font-['Inter'] text-lg md:text-xl text-zinc-600 max-w-xl mb-12 leading-relaxed">
              A premium digital studio dedicated to crafting high-performance, editorial-grade web experiences for brands that refuse to blend in.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('portfolio')}
                className="bg-[#4745db] text-white px-10 py-5 rounded-full font-['Epilogue'] text-sm uppercase tracking-widest font-semibold shadow-[0_8px_24px_rgba(71,69,219,0.3)] transition-all"
              >
                View Showreel
              </button>
              <button 
                onClick={() => scrollTo('about')}
                className="glass-panel px-10 py-5 rounded-full font-['Epilogue'] text-sm uppercase tracking-widest font-semibold transition-all"
              >
                Our Story
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative h-[400px] md:h-[600px] hidden lg:block reveal">
            <div className="hero-float glass-panel p-4 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md shadow-2xl">
              <div className="w-full h-[500px] bg-white rounded-lg overflow-hidden relative border border-zinc-100">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Minimalist web design layout on a 3D browser mockup" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAog9eSCy2QCxWaRi0EVbqC6XOgurrWi7b1INyjRTDAKRwNmwpZD7yxWG8LbhwSVtCrdSq8ByQfTco00LMttLZzUDRm5lpbkayMi8otmjSWrjaRASEkJs3sl5ATNUMnmrWBZuKLqQ_oeNLqiqkO6yeX_pjbnPXvc66byNT0wSOprEotgl3x-dYs85VvYXoubYREr_LnWjrtNUywOw1waeSR1yyJnppEyNBAj0Z4uvMot6753_KuTYMb8y_9nG_9qv5dKcOxFdBXqfZ_"
                />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-zinc-950 py-8 overflow-hidden">
        <div className="marquee-container border-y-0 border-white/10">
          <div className="marquee-content flex gap-12 items-center">
            <span className="text-white font-['Syne'] text-[32px] uppercase tracking-wide">Web Design ✦ Development ✦ Landing Pages ✦ UI/UX ✦ React ✦</span>
            <span className="text-white font-['Syne'] text-[32px] uppercase tracking-wide">Web Design ✦ Development ✦ Landing Pages ✦ UI/UX ✦ React ✦</span>
            <span className="text-white font-['Syne'] text-[32px] uppercase tracking-wide">Web Design ✦ Development ✦ Landing Pages ✦ UI/UX ✦ React ✦</span>
            <span className="text-white font-['Syne'] text-[32px] uppercase tracking-wide">Web Design ✦ Development ✦ Landing Pages ✦ UI/UX ✦ React ✦</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
