"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Users, TrendingUp, Globe, Search, Plus, Minus, ArrowRight, Menu } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = [
    {
      question: "What is IdeaDB's primary function?",
      answer:
        "IdeaDB is a comprehensive database of verified founder profiles, business metrics, and growth strategies designed to help entrepreneurs learn from successful $10K+/month businesses.",
    },
    {
      question: "How does IdeaDB help with business growth?",
      answer:
        "By providing detailed tables of founder data including revenue metrics, marketing strategies, tech stacks, and business models from 1,000+ verified successful entrepreneurs.",
    },
    {
      question: "Can I access IdeaDB offline?",
      answer:
        "Yes, once you purchase access, you can download the complete database in various formats for offline use and reference.",
    },
    {
      question: "Is IdeaDB available on mobile devices?",
      answer:
        "The database is accessible through any web browser on mobile devices, and we provide mobile-optimized table views for easy browsing.",
    },
    {
      question: "What security features does IdeaDB offer?",
      answer:
        "All founder data is verified and anonymized where necessary. We use secure payment processing and encrypted data storage to protect your information.",
    },
    {
      question: "How can I search through the database?",
      answer:
        "The database includes advanced search and filtering capabilities, allowing you to find founders by industry, revenue range, business model, and more.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Dark rounded style like Clever */}
      <nav className="px-4 sm:px-6 py-4 max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-semibold text-lg sm:text-xl text-white">IdeaDB</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white font-medium">
              Features
            </a>
            <a href="#database" className="text-gray-300 hover:text-white font-medium">
              Database
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white font-medium">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base">
              Access Database
            </Button>
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-gray-900 rounded-2xl px-4 py-4">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-white font-medium py-2">
                Features
              </a>
              <a href="#database" className="text-gray-300 hover:text-white font-medium py-2">
                Database
              </a>
              <a href="#faq" className="text-gray-300 hover:text-white font-medium py-2">
                FAQ
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Clever style */}
      <section className="px-4 sm:px-6 py-8 sm:py-16 max-w-6xl mx-auto text-center">
        {/* Member avatars */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              C
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              S
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
          </div>
          <span className="text-gray-600 font-medium ml-2 text-sm sm:text-base">Join 1000+ Members</span>
        </div>

        <h1 className="mb-4 sm:mb-6 text-balance leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Discover How 1,000+ Founders
          <br />
          Built $10K+/Month Businesses
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
          Comprehensive database of verified founder data, business metrics, and growth strategies all with one clean,
          searchable platform.
        </p>

        <div className="relative inline-block">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-base sm:text-lg"
          >
            Access Database
          </Button>
          {/* Arrow pointing to button */}
          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <ArrowRight className="w-8 h-8 text-orange-400" />
          </div>
        </div>

        <p className="text-gray-500 mt-4 flex items-center justify-center gap-2 text-sm sm:text-base">
          <Database className="w-4 h-4" />
          Join a growing community of 10k+ users
        </p>
      </section>

      {/* Features Section - 4 column grid like Clever */}
      <section id="features" className="px-4 sm:px-6 py-8 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Database className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Verified Database</h3>
              <p className="text-gray-600 text-xs sm:text-sm">All founder data is verified and up-to-date</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Revenue Insights</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Detailed revenue and growth metrics</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Advanced Search</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Filter by industry, revenue, and business model</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">Founder Profiles</h3>
              <p className="text-gray-600 text-xs sm:text-sm">Complete profiles with contact information</p>
            </div>
          </div>

          {/* Stats section */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 px-4">
              Unlock Your Business Potential with
              <br />
              IdeaDB's Comprehensive Data
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">1,000+</div>
                <div className="w-8 h-1 bg-orange-500 mx-auto mb-2"></div>
                <div className="text-gray-600 font-medium">Verified Founders</div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">$10K+</div>
                <div className="w-8 h-1 bg-orange-500 mx-auto mb-2"></div>
                <div className="text-gray-600 font-medium">Monthly Revenue</div>
              </div>

              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">50+</div>
                <div className="w-8 h-1 bg-orange-500 mx-auto mb-2"></div>
                <div className="text-gray-600 font-medium">Business Models</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="database" className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Founder Database</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Detailed founder profiles with verified business data organized in structured tables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Founder Profile Section */}
            <Card className="p-4 sm:p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Users className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Founder Profile</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Name
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-sm sm:text-base">Christian Konnerth</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Product
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-sm sm:text-base">Wishlists</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Website
                      </td>
                      <td className="py-2 sm:py-3">
                        <a
                          href="https://www.wishlists-app.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline text-xs sm:text-sm break-all"
                        >
                          wishlists-app.com
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        LinkedIn
                      </td>
                      <td className="py-2 sm:py-3">
                        <a
                          href="https://www.linkedin.com/in/christian-konnerth-9a3432200/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline text-xs sm:text-sm"
                        >
                          View Profile
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Main Idea
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Turned Excel wish list into mobile/web app
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Business Metrics Section */}
            <Card className="p-4 sm:p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Business Metrics</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Low Season Revenue
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 font-semibold text-sm sm:text-base">$6,000/month</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        High Season Revenue
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 font-semibold text-sm sm:text-base">$30,000+/month</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Total Users
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 font-semibold text-sm sm:text-base">1.1 million</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Monthly Active
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 font-semibold text-sm sm:text-base">110,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Paying Customers
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 font-semibold text-sm sm:text-base">4,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Business Model Section */}
            <Card className="p-4 sm:p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Globe className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Business Model</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        How it Works
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Users create and share wish lists, monetize with in-app purchases and affiliate links
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Tech Stack
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Flutter, Firebase, Cursor IDE, ChatGPT, RevenueKit
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Main Advice
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Start small, solve problems you have, monetize later, do not overcomplicate
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Marketing Strategy Section */}
            <Card className="p-4 sm:p-6 border-0 shadow-lg">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Search className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Marketing Strategy</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Primary Strategy
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Reviews from friends/family, in-app requests after user achievements
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Customer Support
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        Strong customer support, focused on user happiness
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 sm:py-3 pr-4 font-medium text-gray-900 whitespace-nowrap text-sm sm:text-base">
                        Growth Focus
                      </td>
                      <td className="py-2 sm:py-3 text-gray-700 text-xs sm:text-sm">
                        User satisfaction and organic growth
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clever style */}
      <section id="faq" className="px-4 sm:px-6 py-8 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-white">
              FAQ
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Frequently Asked <span className="underline">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4 text-sm sm:text-base">{faq.question}</span>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-white" />
                    ) : (
                      <Plus className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark theme like Clever */}
      <section className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 text-white p-6 sm:p-12 text-center border-0 rounded-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Access Database Today</h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Take the first step towards enhanced business knowledge—get access now and start your journey with IdeaDB.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Verified Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Lifetime Updates</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-full text-base sm:text-lg"
            >
              Get Database Access
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-semibold text-lg sm:text-xl text-gray-900">IdeaDB</span>
          </div>

          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Empowering your business growth with comprehensive
            <br />
            founder data and proven strategies.
          </p>

          <p className="text-gray-500 text-sm mb-6">hello@ideadb.com</p>

          <div className="bg-gray-900 rounded-full px-4 sm:px-6 py-3 inline-flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="#features" className="text-gray-300 hover:text-white text-xs sm:text-sm">
              Features
            </a>
            <a href="#database" className="text-gray-300 hover:text-white text-xs sm:text-sm">
              Database
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white text-xs sm:text-sm">
              FAQ
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-white text-xs sm:text-sm">
              Pricing
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
