import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import ProjectModal from './ProjectModal'
import portfolioEcommerce from '../assets/portfolio_ecommerce.png'
import portfolioSaas from '../assets/portfolio_saas.png'
import portfolioFintech from '../assets/portfolio_fintech.png'
import portfolioRealestate from '../assets/portfolio_realestate.png'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      image: portfolioEcommerce,
      category: 'E-commerce',
      title: 'ShopVault Dashboard',
      description: 'A premium e-commerce admin dashboard with analytics, inventory management, and dark-mode UI.',
      fullDescription: 'ShopVault is a comprehensive e-commerce admin dashboard built from the ground up. It features real-time analytics with interactive charts, inventory management with bulk actions, order tracking with status updates, and a beautiful dark-mode UI that makes data easy to read. The dashboard handles over 1,000 products and processes 200+ daily orders seamlessly.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express'],
      timeline: '6 Weeks',
      role: 'Full-Stack Developer',
      status: 'Completed',
      features: [
        'Real-time sales analytics with interactive charts',
        'Inventory management with bulk import/export',
        'Order tracking with automated email notifications',
        'Role-based admin access control',
        'Responsive design for tablet management',
      ],
    },
    {
      image: portfolioSaas,
      category: 'SaaS Landing',
      title: 'CloudSync',
      description: 'High-converting SaaS landing page with 3D elements, glassmorphism cards, and smooth animations.',
      fullDescription: 'CloudSync needed a landing page that would convert visitors into trial users. I designed and built a visually stunning page with 3D floating elements, glassmorphism UI components, and buttery smooth scroll animations. The page achieved a 12% conversion rate — 3x higher than their previous design.',
      tech: ['Next.js', 'Framer Motion', 'Vercel', 'Three.js'],
      timeline: '3 Weeks',
      role: 'Designer & Developer',
      status: 'Completed',
      features: [
        '3D interactive hero section with Three.js',
        'Glassmorphism pricing cards with hover effects',
        'Animated testimonial carousel',
        'A/B tested CTA placement for maximum conversion',
        'SEO optimized with 98+ Lighthouse score',
      ],
    },
    {
      image: portfolioFintech,
      category: 'FinTech',
      title: 'CryptoTrack App',
      description: 'Real-time crypto tracking dashboard with portfolio analytics, wallet integration, and price alerts.',
      fullDescription: 'CryptoTrack is a comprehensive cryptocurrency portfolio tracker that provides real-time price data, portfolio analytics, and customizable alerts. Built with a focus on performance, it handles live data streams from multiple exchanges and renders complex chart visualizations without lag.',
      tech: ['React', 'TypeScript', 'Firebase', 'WebSocket', 'D3.js'],
      timeline: '8 Weeks',
      role: 'Frontend Developer',
      status: 'Completed',
      features: [
        'Real-time price tracking via WebSocket connections',
        'Portfolio performance analytics with P&L tracking',
        'Customizable price alerts with push notifications',
        'Multi-exchange wallet integration',
        'Interactive candlestick charts with D3.js',
      ],
    },
    {
      image: portfolioRealestate,
      category: 'Real Estate',
      title: 'EstateX Platform',
      description: 'Modern real estate platform with property listings, virtual tours, and appointment scheduling.',
      fullDescription: 'EstateX is a full-featured real estate platform that modernizes property browsing. It features an advanced search with map integration, 360° virtual property tours, an appointment scheduling system, and a CMS for agents to manage listings. The platform handles 500+ active listings with optimized image loading.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Mapbox', 'Cloudinary'],
      timeline: '10 Weeks',
      role: 'Full-Stack Developer',
      status: 'Completed',
      features: [
        'Advanced property search with map integration',
        '360° virtual property tour viewer',
        'Appointment scheduling with calendar sync',
        'Agent CMS for listing management',
        'Optimized image loading with Cloudinary CDN',
      ],
    },
  ]

  return (
    <section id="portfolio" className="w-full bg-background pt-8 pb-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-6 mb-16 reveal">
          <div className="flex items-center gap-6">
            <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-secondary uppercase">
              02 / PORTFOLIO
            </span>
            <div className="editorial-divider flex-1 max-w-[200px] !my-0"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2 className="split-text font-['Syne'] text-5xl md:text-[80px] font-bold text-zinc-900 leading-[1.1] tracking-[-0.04em]">
              Selected Work
            </h2>
            <a
              href="#contact"
              className="flex items-center gap-2 font-['Epilogue'] text-sm uppercase font-bold text-secondary hover:text-primary transition-colors pb-2 border-b border-transparent hover:border-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Start a Project <FiArrowRight />
            </a>
          </div>
        </div>

        {/* First 3 Projects in Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto mb-8">
          <div 
            className="lg:col-span-7 min-h-[400px] lg:min-h-[800px] cursor-pointer reveal"
            onClick={() => setSelectedProject(projects[0])}
          >
            <div className="glass-panel w-full h-full rounded-2xl relative work-card">
              <img 
                className="w-full h-full object-cover" 
                alt={projects[0].title} 
                src={projects[0].image}
              />
              <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
                <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 mb-2 block uppercase">
                  {projects[0].category}
                </span>
                <h4 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">{projects[0].title}</h4>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 grid grid-rows-2 gap-8 h-auto">
            {[projects[1], projects[2]].map((project, i) => (
              <div 
                key={i}
                className="cursor-pointer reveal min-h-[384px]"
                onClick={() => setSelectedProject(project)}
              >
                <div className="glass-panel w-full h-full rounded-2xl relative work-card">
                  <img 
                    className="w-full h-full object-cover" 
                    alt={project.title} 
                    src={project.image}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
                    <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 mb-1 block uppercase">
                      {project.category}
                    </span>
                    <h4 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4th Project Full Width */}
        <div 
          className="w-full h-[400px] cursor-pointer reveal"
          onClick={() => setSelectedProject(projects[3])}
        >
          <div className="glass-panel w-full h-full rounded-2xl relative work-card">
            <img 
              className="w-full h-full object-cover" 
              alt={projects[3].title} 
              src={projects[3].image}
            />
            <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
              <span className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 mb-2 block uppercase">
                {projects[3].category}
              </span>
              <h4 className="text-3xl font-bold text-white font-['Plus_Jakarta_Sans']">{projects[3].title}</h4>
            </div>
          </div>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Portfolio
