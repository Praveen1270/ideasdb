"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Users, TrendingUp, Globe, Search, Plus, Minus, ArrowRight, Menu, BarChart3, Target, ExternalLink, ChevronDown, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const faqData = [
  {
    question: "Can I just find this info myself?",
    answer:
      "Sure. If you want to spend 200+ hours digging, verifying, and organizing. I already did the work for you.",
  },
  {
    question: "How do I search the database?",
    answer:
      "Filter by niche, revenue, business model, or marketing channel. Two clicks and you’ve got the exact type of founder you want.",
  },
  {
    question: "Do I get updates?",
    answer:
      "Yes. Weekly. Forever. No extra cost.",
  },
  {
    question: "Refunds?",
    answer:
      "No. Instant‑access digital product. All sales are final.",
  },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const exampleSlides = [
    {
      src: "/marc%20lou1.png",
      name: "Marc Lou",
      subtitle: "making $20K+ MRR with CodeFast.",
    },
    {
      src: "/jackfriks.jpg",
      name: "Jackfriks",
      subtitle: "making $20K+ MRR with PostBridge.",
    },
    {
      src: "/Paulius.jpg",
      name: "Paulius",
      subtitle: "making $10K+ MRR with Vibe Agents.",
    },
  ]

  // Auto-advance slides (every 4s)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % exampleSlides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % exampleSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + exampleSlides.length) % exampleSlides.length)

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-center gap-2 my-3 text-center w-full">
      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FF5722' }} />
      <h2 className="font-bold text-black text-[18px]">{children}</h2>
    </div>
  )

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ideasdb logo" className="w-8 h-8" />
            <span className="font-bold text-xl text-gray-900 font-inter-display">IdeasDB</span>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Features
            </a>
            <a href="#examples" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Examples
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-500 font-medium transition-colors">
              FAQ
            </a>
            </div>
            <button className="md:hidden text-gray-900 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-lg">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Features</a>
              <a href="#examples" className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Examples</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors">FAQ</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-14 max-w-6xl mx-auto text-center relative">
        <h1 className="mb-4 text-balance title-display text-gray-900">
          Find out how 1000+ founders scaled to $10K+/month
        </h1>

        <p className="subtitle-text text-gray-600 mb-6 max-w-3xl mx-auto">
          Copy strategies and growth moves from 1,000+ successful
          <br />
          solo builders earning thousands.
        </p>

        <div className="flex items-center justify-center gap-3 mb-2">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
            Get lifetime access for $49
          </Button>
        </div>
        

        {/* Database preview */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
          <img 
            src="/demo .png" 
            alt="Database preview screenshot" 
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* What's Inside */}
      <section id="features" className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center">
            <SectionTitle>What's Inside</SectionTitle>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">1,000+ Verified Founders</div>
              <p className="text-sm text-gray-600">Every single one making at least $10K/month.</p>
            </div>
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Revenue & Business Models</div>
              <p className="text-sm text-gray-600">See how they actually make money.</p>
            </div>
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <Target className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Growth Tactics</div>
              <p className="text-sm text-gray-600">The exact marketing playbooks they used.</p>
            </div>
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <Globe className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Direct Links</div>
              <p className="text-sm text-gray-600">Twitter, websites, Discords—study them live.</p>
            </div>
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <Search className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Weekly Updates</div>
              <p className="text-sm text-gray-600">New founders added every single week.</p>
            </div>
            <div className="text-center p-6 rounded-xl">
              <div className="w-8 h-8 rounded-md bg-orange-100 mx-auto mb-3 flex items-center justify-center">
                <ChevronDown className="w-4 h-4 text-orange-600" />
              </div>
              <div className="font-semibold mb-1">Lifetime Access</div>
              <p className="text-sm text-gray-600">Pay once, own it forever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Profiles */}
      <section id="examples" className="px-6 py-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center">
            <SectionTitle>See Who's Making $10K+ & How</SectionTitle>
          </div>
          <div className="relative max-w-md sm:max-w-xl lg:max-w-3xl mx-auto">
            {/* Slides container */}
            <div
              className="relative h-72 sm:h-96"
              onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchStartX === null) return
                const delta = e.changedTouches[0].clientX - touchStartX
                if (Math.abs(delta) > 40) {
                  if (delta < 0) nextSlide()
                  else prevSlide()
                }
                setTouchStartX(null)
              }}
            >
              {exampleSlides.map((s, i) => (
                <div
                  key={s.name}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                >
                  {/* Rounded image wrapper only */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900">
                    <img src={s.src} alt={s.name} className="w-full h-full object-contain" />
                    {/* Progress bars */}
                    <div className="absolute top-3 left-4 right-4 flex gap-1 opacity-90">
                      {exampleSlides.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 rounded-full flex-1 ${idx <= currentSlide ? "bg-white" : "bg-white/50"}`}
                        />
                      ))}
                    </div>
                    {/* Gradient overlay + text */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                      <div className="relative text-white">
                        <div className="text-2xl font-bold drop-shadow-sm">{s.name}</div>
                        <div className="text-sm sm:text-base opacity-95">{s.subtitle}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Nav arrows */}
              <button
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full"
                onClick={nextSlide}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-6">Now imagine having 1,000+ of these.</div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>One-Time Payment. Lifetime Access.</SectionTitle>
          <div className="rounded-2xl border border-gray-200 shadow-sm bg-white p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left side */}
              <div>
                <div className="text-sm font-semibold text-gray-900 mb-1">For Ambitious Founders & Creators</div>
                <p className="text-sm text-gray-600 mb-6">Ideal for solopreneurs, indie hackers, and freelancers targeting $10K+/month.</p>
                <div className="flex items-end gap-2 mb-2">
                  <div className="text-4xl font-bold tracking-tight text-gray-900">$49</div>
                  <div className="text-sm text-gray-600">One-Time Access</div>
                </div>
                <div className="text-xs text-red-600 mb-6">Hurry! Only 3 spots left before price rises to $79.</div>
                <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Get Instant Access</Button>
              </div>

              {/* Right side */}
              <div>
                <div className="font-semibold text-gray-900 mb-3">What You Get:</div>
                <ul className="space-y-3 text-sm text-gray-800">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> 1,000+ Verified Entrepreneurs</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Proven Business Models & Revenue Insights</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Growth & Marketing Strategies</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Direct Twitter & Website Links</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Multiple Niches Covered</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Lifetime Updates</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-green-600 mt-0.5" /> Full Lifetime Access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>FAQs</SectionTitle>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900 text-base pr-4">{faq.question}</span>
                  <div className="flex items-center justify-center flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-gray-900" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-900" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 px-4 md:mx-20">
        <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-3xl p-6 md:p-20 relative overflow-hidden max-w-7xl mx-auto">
          {/* Footer Content */}
          <div className="flex flex-row justify-start items-start relative z-10 mb-12 md:mb-16">
            {/* Links Section - Same layout for mobile and desktop */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-30">
              {/* Quick Links */}
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6">Quick Links</h3>
                <ul className="space-y-3 md:space-y-4">
                  <li><a href="#faq" className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition-opacity">Faq</a></li>
                  <li><a href="#features" className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition-opacity">Features</a></li>
                  <li><a href="#examples" className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition-opacity">Examples</a></li>
                  <li><a href="#pricing" className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition-opacity">Pricing</a></li>
                </ul>
              </div>
              
              {/* Follow us */}
              <div>
                <h3 className="text-white text-lg md:text-xl font-semibold mb-4 md:mb-6">Follow us</h3>
                <ul>
                  <li>
                    <a href="https://twitter.com/Praveenthotakur" target="_blank" rel="noopener noreferrer" className="text-white text-sm md:text-base opacity-95 hover:opacity-100 transition-opacity flex items-center">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}