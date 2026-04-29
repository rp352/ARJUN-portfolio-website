import React, { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { useToast } from './Toast'

const Contact = () => {
  const toast = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { id, value } = e.target
    const field = id.replace('contact-', '')
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.budget) newErrors.budget = 'Please select a budget range'
    if (!formData.message.trim()) {
      newErrors.message = 'Please describe your project'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide more detail (at least 10 characters)'
    }
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstErrorField = Object.keys(newErrors)[0]
      document.getElementById(`contact-${firstErrorField}`)?.focus()
      toast.error('Form Incomplete', 'Please fill in all required fields.')
      return
    }

    setSubmitting(true)
    setErrors({})

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      toast.success(
        'Message Sent! 🎉',
        `Thanks ${formData.name}! I'll review your project details and get back within 24 hours.`
      )
      setTimeout(() => {
        setFormData({ name: '', email: '', budget: '', message: '' })
        setSubmitted(false)
      }, 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="bg-[#111111] text-white py-32 md:py-40 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Content */}
        {/* Left Content */}
        <div className="flex flex-col justify-center reveal">
          <h2 className="split-text font-['Syne'] text-5xl md:text-[64px] mb-8 leading-[1.1] font-bold">
            Ready to Build <br/>Something Iconic?
          </h2>
          <p className="font-['Inter'] text-lg text-white/60 max-w-lg mb-16 leading-relaxed">
            Join the ranks of premium brands that have leveled up their digital presence. Let's discuss how I can help bring your digital vision to life.
          </p>
          
          <div className="flex flex-wrap gap-12 font-['Space_Grotesk'] text-sm text-white/40 tracking-[0.1em] uppercase">
            <span>INDIA (REMOTE) / 24/7</span>
            <span>hello@arjun.dev</span>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl reveal">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="font-['Inter'] text-white/60">
                Thanks, {formData.name || 'friend'}! I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 uppercase" htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    className={`bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary'} rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors font-['Inter']`}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                  {errors.name && <span className="text-red-400 text-xs font-['Inter']">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 uppercase" htmlFor="contact-email">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email"
                    className={`bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary'} rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors font-['Inter']`}
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                  {errors.email && <span className="text-red-400 text-xs font-['Inter']">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 uppercase" htmlFor="contact-budget">Budget Range *</label>
                <select
                  id="contact-budget"
                  className={`bg-white/5 border ${errors.budget ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary'} rounded-lg px-4 py-3 text-white outline-none transition-colors font-['Inter'] appearance-none`}
                  value={formData.budget}
                  onChange={handleChange}
                  disabled={submitting}
                >
                  <option value="" className="bg-[#1a1a1a]">Select a range</option>
                  <option value="5k-15k" className="bg-[#1a1a1a]">₹5,000 – ₹15,000</option>
                  <option value="15k-30k" className="bg-[#1a1a1a]">₹15,000 – ₹30,000</option>
                  <option value="30k-50k" className="bg-[#1a1a1a]">₹30,000 – ₹50,000</option>
                  <option value="50k+" className="bg-[#1a1a1a]">₹50,000+</option>
                </select>
                {errors.budget && <span className="text-red-400 text-xs font-['Inter']">{errors.budget}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.1em] text-white/70 uppercase" htmlFor="contact-message">Project Details *</label>
                <textarea
                  id="contact-message"
                  className={`bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-secondary'} rounded-lg px-4 py-3 text-white placeholder-white/20 outline-none transition-colors font-['Inter'] resize-y min-h-[120px]`}
                  placeholder="Tell me about your project — goals, timeline, features you need..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={submitting}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                     <span className="text-red-400 text-xs font-['Inter']">{errors.message}</span>
                  ) : <span></span>}
                  <span className="text-white/30 text-xs font-['Space_Grotesk']">
                    {formData.message.length} chars
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className={`mt-4 bg-[#4745db] text-white px-8 py-4 rounded-full font-['Epilogue'] font-bold text-sm tracking-widest uppercase hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(71,69,219,0.3)] transition-all duration-300 flex items-center justify-center gap-2 w-full ${submitting ? 'opacity-70 pointer-events-none' : ''}`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <FiSend />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
