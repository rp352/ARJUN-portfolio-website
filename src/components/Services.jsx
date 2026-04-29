import React from 'react'
import { useToast } from './Toast'

const Services = () => {
  const toast = useToast()

  const services = [
    {
      id: "01",
      icon: "brush",
      title: "UI/UX & Web Design",
      desc: "Editorial-driven aesthetics focused on typography, whitespace, and immersive motion. I don't just build websites; I curate digital identities.",
      features: ["Visual Identity System", "UX/UI Architecture", "Interactive Prototyping"],
      bgImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuARLklgkHmF7Vwjom2Zvg-s8xogxt8SPl9JpqQooAN3cSorrwGhZ8eoN-_EuUbzFLmOEPpLqlA9Lrwh-yZQi6nG6WJW0Sh7wCmLKctjGnYef7oOW-dM4KGCRlO79kb5A7ZkxxZ9Aa2YyoxjIvgcSuHdYTtMbh4iV38vwT_jGym1gZc5_D3MhS9vr6UH5ro8OnHwh-UCnHZWBXeb2W8eg_rf4flGwyMXhk3e11iQ8Df80BN3iUu76xuLE60Y1Vr6hla5HwrC5puQwE7S"
    },
    {
      id: "02",
      icon: "code",
      title: "Technical Rigor",
      desc: "Performant, scalable codebases built with modern stacks. I ensure your digital presence is as fast as it is beautiful.",
      features: ["React & Next.js Mastery", "API & CMS Integration", "Micro-interactions"],
      bgImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZYr66NdartEiFPqUhRQ6Kf-bNSsvj9NtlibkQdWWSXdOoV05Ewfkgg7IhnNBiAQAmohdgpBbxPNumb38c5DRxAn7LzQHlOQnSj54eXZkBTd7REGF_xk9sGzEQL5B0x5FxuDGoB53GR3APAVleyw6a9fI9gLUaPFFFoKYSdT99ggyombQyiQPAHlQbzbJTrh6l_kSSjkqfj_-XQhFH4GLRAasXSsMeukSraep0riaAzG2tFgcq5zHyDL8r75k2Sb7z4lP0OfnwHt2"
    },
    {
      id: "03",
      icon: "lightbulb",
      title: "Digital Strategy",
      desc: "Roadmapping that aligns business goals with user desires. I find the intersection of commercial success and artistic integrity.",
      features: ["Competitive Analysis", "Content Orchestration", "Conversion Optimization"],
      bgImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3jA8lmUYzKd0Y3RgKvTANDLayBHC00Ua0fpcc9SpEZ0V1jXlIukjBeoOxtu15TgPVAeW7yHw8CWqkCDX2z-SJAYVGpsZg1JaU13iU-weE-6CU75Fw8TskgAMlGM4nAjOKSj4fke-CztPgAlRCbhx5ci52emS0Hk6eO4VX5yRa3xTymdA6cUCYuYAGDzHcZLWXZ5rjcPm6ZuzIyk6Bd3qoF0BsQYD9yPrrB7tD9LO0V3GGqH_Xes41SMmFcVo_enxcoqugPnSXiGEP"
    }
  ]

  const handleServiceClick = (service) => {
    toast.info(`${service.title}`, `Excellent choice. Scrolling to contact...`)
    
    // Pre-fill the contact form message
    setTimeout(() => {
      const messageEl = document.getElementById('contact-message')
      if (messageEl) {
        messageEl.value = `Hi Arjun, I'm interested in your ${service.title} service. I'd like to discuss my project requirements.`
        messageEl.focus()
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
        if (nativeInputValueSetter) {
          nativeInputValueSetter.call(messageEl, `Hi Arjun, I'm interested in your ${service.title} service. I'd like to discuss my project requirements.`)
          messageEl.dispatchEvent(new Event('input', { bubbles: true }))
        }
      }
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  return (
    <section id="services" className="w-full relative py-32 bg-background">
      <div className="max-w-[1440px] mx-auto">
        <div className="px-6 md:px-12 mb-16 reveal">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-secondary uppercase">
                Expertise & Method
              </span>
              <div className="editorial-divider flex-1 max-w-[200px] !my-0"></div>
            </div>
            <h2 className="split-text font-['Syne'] text-5xl md:text-[64px] font-bold text-zinc-900 leading-[1.1] max-w-2xl">
              Our Expertise
            </h2>
            <p className="font-['Inter'] text-lg text-zinc-600 max-w-xl">
              We blend artistic direction with technical precision to build digital experiences that redefine industry standards.
            </p>
          </div>
        </div>

        <div className="px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div 
                key={service.id} 
                className="glass-panel rounded-2xl p-10 flex flex-col gap-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 cursor-pointer reveal"
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service)}
              >
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>
                    {service.icon}
                  </span>
                  <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] opacity-40">
                    {service.id}
                  </span>
                </div>
                
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="font-['Plus_Jakarta_Sans'] text-[32px] font-semibold leading-[1.3] text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="font-['Inter'] text-base text-zinc-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <ul className="flex flex-col gap-3 font-['Inter'] text-sm text-zinc-800 relative z-10">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs text-secondary">check</span> 
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <img 
                  className="absolute -bottom-12 -right-12 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rounded-full object-cover pointer-events-none" 
                  alt="" 
                  src={service.bgImg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
