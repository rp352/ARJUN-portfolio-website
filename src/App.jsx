import React, { useState, useEffect, useRef } from 'react'
import { ToastContainer } from './components/Toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FiArrowUp } from 'react-icons/fi'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const cursorRef = useRef(null)

  // Page loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cursor glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Scroll Reveal & Interactions
  useEffect(() => {
    // 1. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.15 });

    // 4. Magnetic Buttons
    const handleMagneticMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };
    
    const handleMagneticLeave = (e) => {
      const btn = e.currentTarget;
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s ease';
    };

    // 8. Stat Counter Animation
    function animateCounter(el) {
      const target = parseInt(el.innerText);
      if (isNaN(target)) return;
      const suffix = el.dataset.suffix || '';
      let count = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          el.innerText = target + suffix;
          clearInterval(timer);
        } else {
          el.innerText = Math.floor(count) + suffix;
        }
      }, 16);
    }

    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animateCounter(e.target);
          statObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    // 9. Tilt Card Effect
    const handleTiltMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientY - rect.top) / rect.height - 0.5;
      const y = (e.clientX - rect.left) / rect.width - 0.5;
      card.style.transform = `perspective(600px) rotateX(${x * -8}deg) rotateY(${y * 8}deg) translateY(-4px)`;
    };
    
    const handleTiltLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateY(0)';
      card.style.transition = 'transform 0.5s ease';
    };

    // 10. Cursor Spotlight on Hero
    const hero = document.querySelector('.grain-bg');
    const handleSpotlightMove = (e) => {
      if (!hero) return;
      const x = e.clientX - hero.getBoundingClientRect().left;
      const y = e.clientY - hero.getBoundingClientRect().top;
      hero.style.background = `
        radial-gradient(600px circle at ${x}px ${y}px, 
        rgba(71,69,219,0.07), transparent 60%),
        #F5F5F3`;
    };
    const handleSpotlightLeave = () => {
      if (!hero) return;
      hero.style.background = '#F5F5F3';
    };

    // 11. Staggered Word Reveal on Headlines
    document.querySelectorAll('.split-text').forEach(el => {
      if (el.dataset.splitted) return; // prevent double split
      const words = el.innerText.split(' ');
      el.innerHTML = words.map((w, i) =>
        `<span style="display:inline-block; opacity:0; transform:translateY(20px); transition: opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s" class="split-word">${w}&nbsp;</span>`
      ).join('');
      el.dataset.splitted = "true";
    });

    const splitObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.split-word').forEach(word => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
          });
        }
      });
    }, { threshold: 0.3 });

    // 13. Page Transition Overlay
    const overlay = document.getElementById('page-overlay');
    if (overlay) {
      window.addEventListener('load', () => {
        overlay.style.transform = 'translateY(100%)';
      });

      document.querySelectorAll('a[href]:not([target="_blank"])').forEach(link => {
        link.addEventListener('click', (e) => {
          const href = link.href;
          if (!href || href === window.location.href || href.includes('#')) return;
          e.preventDefault();
          overlay.style.pointerEvents = 'all';
          overlay.style.transform = 'translateY(0)';
          setTimeout(() => window.location = href, 420);
        });
      });
    }

    // 14. Scroll Progress Bar
    const handleProgressScroll = () => {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      const progressBar = document.getElementById('progress-bar');
      if (progressBar) progressBar.style.width = progress + '%';
    };
    window.addEventListener('scroll', handleProgressScroll);

    // Initialization with a slight timeout to ensure DOM readiness
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      
      document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mousemove', handleMagneticMove);
        btn.addEventListener('mouseleave', handleMagneticLeave);
      });

      document.querySelectorAll('.stat-number').forEach(el => statObserver.observe(el));

      document.querySelectorAll('.glass-panel').forEach(card => {
        card.addEventListener('mousemove', handleTiltMove);
        card.addEventListener('mouseleave', handleTiltLeave);
      });

      if (hero) {
        hero.addEventListener('mousemove', handleSpotlightMove);
        hero.addEventListener('mouseleave', handleSpotlightLeave);
      }

      document.querySelectorAll('.split-text').forEach(el => splitObserver.observe(el));
    }, 200);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleProgressScroll);
      document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
      document.querySelectorAll('button').forEach(btn => {
        btn.removeEventListener('mousemove', handleMagneticMove);
        btn.removeEventListener('mouseleave', handleMagneticLeave);
      });
      document.querySelectorAll('.stat-number').forEach(el => statObserver.unobserve(el));
      document.querySelectorAll('.glass-panel').forEach(card => {
        card.removeEventListener('mousemove', handleTiltMove);
        card.removeEventListener('mouseleave', handleTiltLeave);
      });
      if (hero) {
        hero.removeEventListener('mousemove', handleSpotlightMove);
        hero.removeEventListener('mouseleave', handleSpotlightLeave);
      }
      document.querySelectorAll('.split-text').forEach(el => splitObserver.unobserve(el));
    };
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Toast notifications - rendered via portal */}
      <ToastContainer />

      {/* Page Loader */}
      <div className={`page-loader ${!loading ? 'hidden' : ''}`}>
        <div className="page-loader-inner">
          <div className="page-loader-logo">A</div>
          <div className="page-loader-bar"></div>
        </div>
      </div>

      {/* Cursor Glow */}
      <div ref={cursorRef} className="cursor-glow" />

      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Process />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />

        {/* Scroll to Top */}
        <button
          className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          id="scroll-to-top-btn"
        >
          <FiArrowUp />
        </button>
      </div>
    </>
  )
}

export default App
