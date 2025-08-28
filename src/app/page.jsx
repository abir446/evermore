import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QrCode, Upload, Users, Shield, Clock, Camera, Heart, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-900"> {/* Soft gray background, dark gray text */}
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50"> {/* Gray border, off-white background */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" /> {/* Slightly desaturated pink heart */}
            <h1 className="text-2xl font-bold text-gray-800">Evermore</h1> {/* Darker gray text */}
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors"> {/* Gray navigation links */}
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">Get Started</Button> {/* Pink button */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-fuchsia-100-100 to-white"> {/* Subtle gray gradient */}
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-pink-100 text-pink-700 border-pink-200"> {/* Lighter pink badge */}
            Perfect for Indian Weddings
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Capture Every <span className="text-pink-500">Precious Moment</span> from Every Guest {/* Slightly desaturated pink highlight */}
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-pretty max-w-2xl mx-auto"> {/* Gray text */}
            Evermore is a seamless photo-sharing platform that ensures no wedding memory is lost. Guests simply scan a
            QR code to instantly share their candid photos and videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white"> {/* Pink button */}
              <QrCode className="mr-2 h-5 w-5" />
              Try Demo QR Code
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-50 bg-transparent" // Pink outline button, light pink hover
            >
              Watch How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Evermore?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto"> {/* Gray text */}
              Modern technology meets traditional celebrations. Get all your wedding photos instantly, without the wait
              or the hefty photographer fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow"> {/* Gray card border */}
              <CardHeader>
                <QrCode className="h-12 w-12 text-pink-500 mb-4" /> {/* Pink icon */}
                <CardTitle className="text-gray-900">QR Code Instant Access</CardTitle> {/* Darker gray title */}
                <CardDescription className="text-gray-700"> {/* Gray description */}
                  Guests scan a unique QR code to access the private album instantly - no app downloads or account
                  creation needed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Upload className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-gray-900">Mass Uploads</CardTitle>
                <CardDescription className="text-gray-700">
                  Support for bulk uploads allows multiple photos and videos to be shared at once, perfect for those
                  "photo dumps."
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-gray-900">Real-time Sharing</CardTitle>
                <CardDescription className="text-gray-700">
                  Watch as moments are shared live, creating a communal and celebratory atmosphere throughout your
                  event.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-gray-900">Privacy & Security</CardTitle>
                <CardDescription className="text-gray-700">
                  Each wedding album is private and password-protected, ensuring only invited guests and the couple have
                  access.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-gray-900">No Waiting Time</CardTitle>
                <CardDescription className="text-gray-700">
                  Get real-time access to photos as they're taken. No more waiting months for photographers to deliver.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="h-12 w-12 text-pink-500 mb-4" />
                <CardTitle className="text-gray-900">Cost Effective</CardTitle>
                <CardDescription className="text-gray-700">
                  Save thousands on photography costs. Professional photographers charge ₹50-60k, we offer a minimal
                  rate solution.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Comparison Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-200"> {/* White background, gray border */}
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Traditional Photography vs Evermore</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Traditional Photography</h4> {/* Gray text */}
                <ul className="space-y-2 text-gray-600">
                  <li>• ₹50,000 - ₹60,000 cost</li>
                  <li>• Wait 2-3 months for photos</li>
                  <li>• Limited photographer perspective</li>
                  <li>• Miss candid guest moments</li>
                  <li>• Additional costs for extras</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-pink-500">Evermore Platform</h4> {/* Pink highlight */}
                <ul className="space-y-2 text-gray-900">
                  <li>• Minimal cost solution</li>
                  <li>• Instant real-time access</li>
                  <li>• Every guest's unique perspective</li>
                  <li>• Capture all candid moments</li>
                  <li>• Complete memory collection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-100"> {/* Light gray background */}
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">What Couples Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200"> {/* Gray card border */}
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-pink-500 text-pink-500" /> // Pink stars
                  ))}
                </div>
                <p className="text-gray-700 mb-4"> {/* Gray text */}
                  "Evermore captured moments we never would have seen otherwise. Our guests loved how easy it was to
                  share photos, and we got to see our wedding from everyone's perspective!"
                </p>
                <div className="font-semibold text-gray-900">Priya & Arjun</div> {/* Darker gray text */}
                <div className="text-sm text-gray-700">Mumbai Wedding, 2024</div> {/* Gray text */}
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-pink-500 text-pink-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The real-time sharing was magical! We could see photos being uploaded during the ceremony. It saved
                  us so much money compared to hiring multiple photographers."
                </p>
                <div className="font-semibold text-gray-900">Kavya & Rohit</div>
                <div className="text-sm text-gray-700">Delhi Wedding, 2024</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Capture Every Moment?</h2>
          <p className="text-xl text-gray-700 mb-8"> {/* Gray text */}
            Join hundreds of couples who chose Evermore for their special day. Start collecting memories from every
            guest's perspective.
          </p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white"> {/* Pink button */}
            <Heart className="mr-2 h-5 w-5" />
            Start Your Wedding Album
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 py-12 px-4"> {/* Gray border, off-white background */}
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-pink-500" /> {/* Pink heart */}
                <span className="text-lg font-bold text-gray-800">Evermore</span> {/* Darker gray text */}
              </div>
              <p className="text-gray-700 text-sm"> {/* Gray text */}
                Capturing every precious moment from every guest's perspective.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Product</h4> {/* Darker gray text */}
              <ul className="space-y-2 text-sm text-gray-700"> {/* Gray links */}
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Demo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Support</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-700"> {/* Gray border and text */}
            <p>&copy; 2025 Evermore. All rights reserved. Made with ❤️ for Indian weddings.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}