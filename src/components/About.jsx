import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-surface-container-low py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Image */}
        <div className="order-2 lg:order-1 reveal">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              alt="Arjun Developer Portrait" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjUkccs78fKfNAJjXwKl7ZbTSYJsox1pfpedAArLIDEEZmjip4dI5IV4dm5PpQgnVfZp3slxHIvBEk4xNACuL1A2tsoiMVhRtZ9SG8uFG4i2NcjM2wN9xmvXBy1smHCMuAK7g7vrlgtVINH7uTmbc_TntAwzcA0Hmn3fL4N86nal4eXHs2PIpPeSUqmFowQ69sY1PVwf0BlBgcmLlWG09cOsYTigib-RkWu1lV3UNZtwvKlOyiBfsK7A72lDFILFUx_NKROqixOud5"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="order-1 lg:order-2 reveal">
          <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-secondary mb-6 block uppercase">
            03 / ABOUT US
          </span>
          <h2 className="split-text font-['Syne'] text-5xl md:text-[64px] font-bold text-zinc-900 mb-10 leading-[1.1]">
            Crafting Digital <br/>Fine Art.
          </h2>
          <p className="font-['Inter'] text-lg text-zinc-600 mb-12 max-w-xl leading-relaxed">
            I am a full-stack developer founded on the principle that the web should be as beautiful as a high-fashion editorial. I don't just build sites; I curate digital journeys that elevate brands to their highest potential.
          </p>
          
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            <div>
              <span className="stat-number text-[48px] md:text-[56px] font-bold text-zinc-900 block mb-2 font-['Plus_Jakarta_Sans']" data-suffix="+">40</span>
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-zinc-500 uppercase">PROJECTS COMPLETED</span>
            </div>
            <div>
              <span className="stat-number text-[48px] md:text-[56px] font-bold text-zinc-900 block mb-2 font-['Plus_Jakarta_Sans']" data-suffix="+">2</span>
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-zinc-500 uppercase">YEARS EXPERIENCE</span>
            </div>
            <div>
              <span className="stat-number text-[48px] md:text-[56px] font-bold text-zinc-900 block mb-2 font-['Plus_Jakarta_Sans']" data-suffix="%">100</span>
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-zinc-500 uppercase">CLIENT SATISFACTION</span>
            </div>
            <div>
              <span className="stat-number text-[48px] md:text-[56px] font-bold text-zinc-900 block mb-2 font-['Plus_Jakarta_Sans']" data-suffix="/7">24</span>
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-zinc-500 uppercase">DEDICATED SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
