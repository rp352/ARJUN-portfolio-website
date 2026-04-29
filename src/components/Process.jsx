import React from 'react'

const Process = () => {
  const steps = [
    {
      id: "1",
      title: "Discovery",
      desc: "Uncovering the DNA of your brand and defining clear objectives."
    },
    {
      id: "2",
      title: "Design",
      desc: "Iterative creative direction to find the perfect visual language."
    },
    {
      id: "3",
      title: "Build",
      desc: "Translating designs into high-performance, functional code."
    },
    {
      id: "4",
      title: "Launch",
      desc: "Rigorous testing and deployment for a seamless debut."
    }
  ]

  return (
    <section id="process" className="w-full relative py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-6 mb-16 reveal">
          <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-secondary uppercase">
            04 / PROCESS
          </span>
          <div className="editorial-divider flex-1 max-w-[200px] !my-0"></div>
        </div>

        <h2 className="split-text font-['Syne'] text-5xl md:text-[64px] font-bold text-zinc-900 mb-32 text-center leading-[1.1]">
          How We Work
        </h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dashed border-zinc-300 -translate-y-1/2 hidden md:block z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div 
                key={step.id}
                className="flex flex-col items-center text-center bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-6 md:p-0 rounded-2xl md:rounded-none reveal"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mb-8 shadow-[0_0_20px_rgba(71,69,219,0.4)] relative">
                  {step.id}
                  {i === 0 && (
                    <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20"></div>
                  )}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] text-2xl font-semibold text-zinc-900 mb-4">
                  {step.title}
                </h4>
                <p className="font-['Inter'] text-base text-zinc-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
