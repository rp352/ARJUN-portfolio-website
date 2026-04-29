import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Arjun delivered a stunning website that exceeded all our expectations. His attention to detail and understanding of modern design is remarkable.",
      name: 'Rahul Sharma',
      role: 'Founder, TechVista',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsitsBBW-PrG7FQPOb7ljrBmJlcZUwpIx8z6pCbB2TQm9H6pjpNujmt4NykuO9aoRVxloFCoflziS0EMGgJKDtIAB8JcYZ9G6zw2sfOKtt647U9Pi3JwMtUUsA4uqaUvIDFUSN6v_8zU7PypnJGY27Mo6qggd7PZFuURfn1LA6CGL-VOnxAoW-nnGefTR2BWAoTDM_MhuJ-FWupiBCW4Vsru8iYnMkfDy9Z5YImgMb3-YFNs6ukaEwfKeWlelok31_ngpFFKoTSTiI',
    },
    {
      text: "Working with Arjun was a game-changer for our startup. He built our entire platform from scratch and it looks absolutely premium.",
      name: 'Priya Patel',
      role: 'CEO, GrowthLabs',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8r3AM2LhzC17ob0aEofeeZI031F1TKrfMndXSxnrDxLWYPZ6mGu-QDRd8CtorVTywOxTSpD_9qv7kd74ck-yGlDKIkqDQxNKaeDzT5qvLgLkjkVFLCtaZHkELnKHJkkIS-Tt1njJg3a9bc9Gux5EUISRiXZcvlVmL4e8qtPI_9RLpcoGpHpBxmKwXnZPJvxqOLVwQuxQj68gjuqQPomx1xEhKUNpxIUh7vYw2KTYz3ttB2XEbJy7pvMY7NckSo2YB1lA5xXAMWN_I',
    },
    {
      text: "Fast, reliable, and incredibly talented. Arjun turned our design concept into a fully functional web app in record time. Highly recommend!",
      name: 'Ankit Verma',
      role: 'Product Manager, Innovex',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmHi8CgloE5dG0YdJoes-NR8NnWeGXx3-90PERMxxFUKI5ewwZMk9t09Un9FAvWinmSdBSXRdC8jRtUYmjMLtVnyAfyQgSzK7AxlrvnM3CLTjZqkk2WCCaFsOO_HucFMkCumBMRW15bfMWtWTC9npKHZczDYaRF2rTWuMYmDawvSnaSUl8q9MtJWgQ3jeCFgRZVMs-LYaLiYqNXI6tiNTIQxSw13rLvwcebP6udoLW3nhFVkzATD3iUJ3LChjm2q41X6weQQJ0jNe4',
    },
  ]

  return (
    <section id="testimonials" className="bg-surface-container-highest/30 py-32 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="split-text font-['Syne'] text-[48px] font-bold text-zinc-900 mb-20 text-center leading-[1.1]">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="glass-panel p-10 rounded-2xl flex flex-col justify-between h-full reveal"
            >
              <div>
                <div className="flex text-secondary mb-6">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="font-['Inter'] text-lg text-zinc-700 italic mb-10 leading-relaxed">
                  "{t.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  className="w-12 h-12 rounded-full object-cover" 
                  alt={t.name} 
                  src={t.image}
                />
                <div>
                  <span className="block font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">{t.name}</span>
                  <span className="text-sm text-zinc-600 font-['Inter']">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
