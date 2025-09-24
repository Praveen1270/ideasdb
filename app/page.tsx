import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckIcon, Zap, Users, TrendingUp, Link, Globe, CreditCard } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">DB</span>
          </div>
          <span className="font-semibold text-xl text-gray-900">IdeaDB</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
            Features
          </a>
          <a href="#examples" className="text-gray-600 hover:text-gray-900 font-medium">
            Examples
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
            Pricing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">
            FAQ
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <Badge variant="secondary" className="mb-8 bg-orange-50 text-orange-600 border-orange-200">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
          Trusted by 50+ Founders
        </Badge>

        <h1 className="mb-6 text-balance leading-tight text-5xl font-medium tabular-nums text-secondary-foreground">
          Discover How 1,000+ Founders
          <br />
          Built $10K+/Month Businesses
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-pretty">
          Unlock verified ideas, strategies, and growth secrets from solopreneurs making real money.
        </p>

        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full mb-6"
        >
          Get Lifetime Access – $49
        </Button>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <div className="flex -space-x-2">
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/founder1.jpg" />
              <AvatarFallback>F1</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/founder2.jpg" />
              <AvatarFallback>F2</AvatarFallback>
            </Avatar>
            <Avatar className="w-8 h-8 border-2 border-white">
              <AvatarImage src="/founder3.jpg" />
              <AvatarFallback>F3</AvatarFallback>
            </Avatar>
          </div>
          <span className="font-medium">50+ founders already joined</span>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Find Proven Startup Ideas</h3>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Actionable Growth Tactics, No Fluff</h3>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Networking & Collaboration Opportunities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-50 text-orange-600 border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Features
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Inside IdeaDB</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">1,000+ Verified Entrepreneurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Handpicked founders making $10K+ per month. Learn from real success stories.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business & Revenue Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Know what they sell, how they earn, and their revenue streams.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth & Marketing Strategies</h3>
              <p className="text-gray-600 leading-relaxed">Explore tactics to scale your ideas fast.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Link className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Direct Founder Links</h3>
              <p className="text-gray-600 leading-relaxed">Follow, contact, and learn from top founders directly.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diverse Niches & Models</h3>
              <p className="text-gray-600 leading-relaxed">
                SaaS, eCommerce, content, agencies – inspiration across industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">One-Time Payment</h3>
              <p className="text-gray-600 leading-relaxed">Lifetime access, no subscriptions, no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-50 text-orange-600 border-orange-200">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Examples
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See Who's Making $10K+ & How</h2>
          </div>

          <div className="space-y-8">
            <Card className="p-8 border-0 shadow-lg">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/paulius-founder.jpg" />
                  <AvatarFallback className="text-xl font-bold">P</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Paulius</h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    $30K+ revenue in 100 days using IdeaDB insights
                  </p>
                  <ul className="text-gray-600 leading-relaxed space-y-1">
                    <li>• Found his first SaaS idea and hit $10K MRR</li>
                    <li>• Built CreatorHunter.io ($40K+)</li>
                    <li>• Freedom project: Clockout.gg</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <div className="flex items-start gap-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/founder2.jpg" />
                  <AvatarFallback className="text-xl font-bold">S</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Sophia</h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">$12K MRR in 3 months</p>
                  <ul className="text-gray-600 leading-relaxed space-y-1">
                    <li>• E-commerce dropshipping success</li>
                    <li>• Applied growth hacks directly from IdeaDB</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-8 bg-orange-50 text-orange-600 border-orange-200">
            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Lifetime Access – Only $49</h2>

          <Card className="max-w-4xl mx-auto p-8 border-0 shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Founders & Builders</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfect for aspiring entrepreneurs, solopreneurs, and side hustlers looking for real startup ideas.
                </p>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold text-gray-900">$49</span>
                  <span className="text-gray-600">One Time Payment</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-full"
                >
                  Get Access Now
                </Button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  No monthly fees. Cancel anytime. One-time payment for lifetime learning.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Access 1,000+ verified founders",
                  "Discover proven business models",
                  "Lifetime updates and new entries",
                  "Business Models & Revenue Insights",
                  "Growth & Marketing Strategies",
                  "Twitter & Website Links",
                  "Diverse Niches",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Who is this for?</h3>
              <p className="text-gray-600 leading-relaxed">
                Aspiring entrepreneurs, solopreneurs, and side hustlers looking for real startup ideas.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do I need prior experience?</h3>
              <p className="text-gray-600 leading-relaxed">
                No. IdeaDB works for beginners and experienced founders alike.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How often is the database updated?</h3>
              <p className="text-gray-600 leading-relaxed">Monthly updates with new founders and insights.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Is it really a one-time payment?</h3>
              <p className="text-gray-600 leading-relaxed">Yes! Lifetime access with no hidden fees.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Building Your $10K+ Idea Today</h2>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full"
          >
            Get Lifetime Access – $49
          </Button>
          <p className="text-gray-600 mt-4">
            Connect with like-minded founders and get actionable insights to launch your next big idea.
          </p>
        </div>
      </section>
    </div>
  )
}
