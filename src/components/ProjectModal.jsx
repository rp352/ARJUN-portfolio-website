import React, { useEffect, useState } from 'react'
import { FiX, FiExternalLink, FiMessageCircle, FiCheck } from 'react-icons/fi'

const ProjectModal = ({ project, onClose }) => {
  const [closing, setClosing] = useState(false)

  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 300)
  }

  // Close on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [])

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  if (!project) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-zinc-900/40 backdrop-blur-sm transition-opacity duration-300 ${closing ? 'opacity-0' : 'opacity-100'}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project details: ${project.title}`}
    >
      <div 
        className={`glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col md:flex-row relative transition-all duration-300 transform ${closing ? 'scale-95 translate-y-4' : 'scale-100 translate-y-0'}`}
      >
        <button 
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md text-zinc-900 rounded-full hover:bg-white transition-colors" 
          onClick={handleClose} 
          aria-label="Close modal"
        >
          <FiX className="text-xl" />
        </button>

        <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="p-8 md:p-12 flex flex-col w-full">
          <div className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-secondary uppercase mb-2">
            {project.category}
          </div>
          <h2 className="font-['Syne'] text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
            {project.title}
          </h2>
          <p className="font-['Inter'] text-base text-zinc-600 mb-8 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-zinc-200/50">
            <div>
              <div className="font-['Space_Grotesk'] text-xs text-zinc-400 uppercase tracking-wider mb-1">Timeline</div>
              <div className="font-['Inter'] font-semibold text-sm text-zinc-800">{project.timeline || '4-6 Weeks'}</div>
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-xs text-zinc-400 uppercase tracking-wider mb-1">Role</div>
              <div className="font-['Inter'] font-semibold text-sm text-zinc-800">{project.role || 'Design & Dev'}</div>
            </div>
            <div>
              <div className="font-['Space_Grotesk'] text-xs text-zinc-400 uppercase tracking-wider mb-1">Status</div>
              <div className="font-['Inter'] font-semibold text-sm text-zinc-800">{project.status || 'Completed'}</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="font-['Space_Grotesk'] text-xs text-zinc-400 uppercase tracking-wider mb-3">Tech Stack</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/50 border border-zinc-200/50 rounded-full text-xs font-['Inter'] text-zinc-600">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.features && (
            <div className="mb-10">
              <div className="font-['Space_Grotesk'] text-xs text-zinc-400 uppercase tracking-wider mb-3">Key Features</div>
              <div className="flex flex-col gap-2">
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 font-['Inter'] text-sm text-zinc-700">
                    <span className="text-secondary mt-0.5"><FiCheck /></span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#4745db] text-white px-6 py-3 rounded-full font-['Epilogue'] font-bold text-xs tracking-widest uppercase hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(71,69,219,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                handleClose()
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 350)
              }}
            >
              <FiMessageCircle /> Start Similar Project
            </a>
            <button 
              className="glass-panel px-6 py-3 rounded-full font-['Epilogue'] font-bold text-xs tracking-widest uppercase text-zinc-700 hover:text-zinc-900 transition-colors flex items-center justify-center gap-2" 
              onClick={handleClose}
            >
              <FiExternalLink /> Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
