"use client"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Button } from "@/components/ui/button"
import { ChevronRight, Paintbrush, Palette, Layers, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { formatPrice } from "@/lib/data"
import { useRef, useState } from "react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 480px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 3000)
      }
      
      slider.on("created", nextTimeout)
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  // Add ref for services section
  const servicesRef = useRef<HTMLDivElement>(null)
  
  // Scroll handler function
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Featured categories
  const categories = [
    { name: "Character Design", icon: <Paintbrush className="h-5 w-5" /> },
    { name: "UI Illustration", icon: <Layers className="h-5 w-5" /> },
    { name: "Portrait Art", icon: <Palette className="h-5 w-5" /> },
    { name: "Brand Identity", icon: <Sparkles className="h-5 w-5" /> },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section - Illustration themed */}
      <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-background to-background" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20" />
          
          {/* Creative animation elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              >
                <div className={`w-2 h-2 ${i % 3 === 0 ? 'bg-purple-500/30' : i % 3 === 1 ? 'bg-blue-500/30' : 'bg-pink-500/30'} rounded-full blur-sm`} />
              </div>
            ))}
          </div>
          
          {/* Hero background image */}
          <div className="absolute inset-0 opacity-20">
            <Image 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064" 
              alt="Illustration background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="mb-8 flex justify-center">
            <div className="p-3 rounded-full bg-purple-500/10 animate-pulse">
              <Palette className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Bring Your Ideas to Life
          </h1>
          <p className="mt-8 text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            Professional illustration services to transform your concepts into stunning visual art
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/marketplace">
              <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition-all duration-300">
                Explore Our Gallery
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToServices}
              className="border-purple-500/30 hover:bg-purple-500/10"
            >
              View Illustration Services
            </Button>
          </div>
          
          {/* Category Pills */}
          <div className="mt-16 flex flex-wrap justify-center gap-3 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            {categories.map((category) => (
              <Link href={`/marketplace`} key={category.name}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                  {category.icon}
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Visual Showcase */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/5 to-background" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Illustrations</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Browse our latest work and discover the possibilities for your next project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product) => (
              <Link href={`/marketplace`} key={product.id}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-black">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="inline-block px-2 py-1 bg-purple-600 text-xs text-white rounded mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{formatPrice(product.price)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/marketplace">
              <Button variant="outline" className="border-purple-500/30 hover:bg-purple-500/10 group">
                View All Artwork
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Showcase - Illustration focused */}
      <div ref={servicesRef} className="py-32 relative bg-black/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Illustration Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Custom visual solutions to enhance your brand, products, and digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(6, 12).map((product) => (
              <Link href={`/marketplace`} key={product.id}>
                <Card className="group hover:shadow-xl transition-all duration-300 border border-purple-900/10 bg-gradient-to-b from-background to-black/5 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="inline-block px-2 py-1 bg-purple-600/10 text-xs text-purple-600 rounded mb-2">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="font-medium">{formatPrice(product.price)}</p>
                        <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                          <ArrowRight className="h-4 w-4 text-purple-500 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/marketplace">
              <Button className="bg-purple-600 hover:bg-purple-700 group">
                View All Illustration Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Our Creative Process</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to bring your illustration projects to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={step.name}
                className="group p-6 rounded-2xl bg-gradient-to-b from-black/5 to-transparent border border-purple-900/10 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl font-bold text-purple-500">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.name}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Illustration focused */}
      <section className="py-32 relative bg-black/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Why Choose Our Illustration Services</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We combine artistic talent with professional service to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group p-6 rounded-2xl bg-gradient-to-b from-black/5 to-transparent border border-purple-900/10 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear from clients who have transformed their projects with our illustration services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-black/5 to-transparent border border-purple-900/10 hover:border-purple-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-500">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Ideas into Art?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our team of talented illustrators is ready to bring your creative vision to life.
          </p>
          <Link href="mailto:admin@illustranova.com">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Expert Illustrators',
    description: 'Our talented artists have years of experience creating stunning illustrations across various styles, mediums, and industries.',
    icon: <Paintbrush className="h-5 w-5 text-purple-500" />,
  },
  {
    name: 'Tailored Creative Process',
    description: 'We work closely with you throughout the design process, ensuring your vision is captured perfectly in every illustration we create.',
    icon: <Palette className="h-5 w-5 text-purple-500" />,
  },
  {
    name: 'Versatile Illustration Styles',
    description: 'From character design to UI elements, we offer a wide range of illustration styles to perfectly match your brand and project requirements.',
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
  },
]

const process = [
  {
    name: 'Discovery',
    description: 'We start by understanding your vision, goals, and requirements through detailed consultation.'
  },
  {
    name: 'Concept Sketches',
    description: 'Our artists create initial sketches and concepts for your review and feedback.'
  },
  {
    name: 'Refinement',
    description: 'We refine the chosen concept, adding details, colors, and style elements based on your input.'
  },
  {
    name: 'Final Delivery',
    description: 'You receive the completed illustration in multiple formats, ready for your intended use.'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'Bright Apps Inc.',
    quote: 'The character illustrations created for our mobile app exceeded our expectations. They perfectly captured our brand personality and helped increase user engagement by 40%.'
  },
  {
    name: 'Michael Chen',
    company: 'Storyteller Publishing',
    quote: 'Working with this team on our children\'s book illustrations was a dream. Their creativity and attention to detail brought our stories to life in ways we couldn\'t have imagined.'
  },
  {
    name: 'Emma Rodriguez',
    company: 'Pixel Perfect Design',
    quote: 'The custom icon set they designed for our website has received countless compliments. Clean, consistent, and perfectly aligned with our brand guidelines.'
  },
  {
    name: 'David Kim',
    company: 'GameWorld Studios',
    quote: 'Their concept art and character designs were instrumental in helping us secure funding for our indie game. Professional, unique, and delivered on schedule.'
  }
]