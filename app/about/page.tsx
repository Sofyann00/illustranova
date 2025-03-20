import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - illustranova',
  description: 'Learn about illustranova, your creative illustration partner in Indonesia',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            About illustranova
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Your Creative Illustration Partner in Indonesia
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Story
              </h2>
              <p className="text-muted-foreground">
                Founded with a passion for visual storytelling, illustranova has emerged as a leading illustration studio in Indonesia. Our journey began with a clear vision: to help businesses and individuals bring their ideas to life through stunning visual art. What started as a small team of passionate artists has grown into a creative powerhouse delivering exceptional illustration services across various industries.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Why Choose Us
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Talented Team of Professional Illustrators</li>
                <li>Diverse Illustration Styles and Techniques</li>
                <li>Collaborative Creative Process</li>
                <li>Attention to Detail and Quality</li>
                <li>Timely Delivery and Clear Communication</li>
                <li>Portfolio of Successful Projects</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Commitment
              </h2>
              <p className="text-muted-foreground">
                At illustranova, we are committed to delivering exceptional visual art that captures your vision and exceeds your expectations. Our team of skilled illustrators and designers works tirelessly to understand your unique needs and create tailored illustrations that communicate your message effectively. We pride ourselves on building long-term creative partnerships and ensuring client satisfaction through artistic excellence and technical precision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Our Services
              </h2>
              <ul className="text-muted-foreground list-disc pl-5 space-y-2">
                <li>Character Design and Illustration</li>
                <li>Vector Portrait Illustration</li>
                <li>UI/UX Illustration for Digital Products</li>
                <li>Brand Mascot and Identity Design</li>
                <li>Children's Book Illustration</li>
                <li>Custom Digital Artwork</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Studio Location
              </h2>
              <div className="text-muted-foreground">
                <p>Visit our creative studio:</p>
                <div className="mt-2">
                  <p>illustranova</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Kode Pos: 13120</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Studio Hours
              </h2>
              <div className="text-muted-foreground grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Weekdays:</p>
                  <p>Monday - Friday</p>
                  <p>09:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">Weekends:</p>
                  <p>Closed</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>Get in touch with our creative team:</p>
                <div className="mt-2 space-y-1">
                  <p>Phone: (021) 52067542</p>
                  <p>Email: studio@illustranova.com</p>
                  <p>WhatsApp: +62 812-8845-8953</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 