import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - PT RISET TEKNOLOGI INTERNET',
  description: 'Privacy Policy for illustranova services and customer data protection',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Information We Collect
              </h2>
              <p className="text-muted-foreground">
                illustranova collects personal information including but not limited to: name, email address, phone number, shipping address, project requirements, design preferences, reference images, purchase history, and payment information when you commission artwork or create an account on our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-muted-foreground">
                We use your information to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Process your illustration orders and provide creative support</li>
                <li>Send project updates and delivery notifications</li>
                <li>Notify you about new illustration services and portfolio updates</li>
                <li>Personalize your experience based on your artistic preferences</li>
                <li>Maintain records of your commissioned artwork and transactions</li>
                <li>Send promotional offers and creative newsletters (with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Data Security
              </h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data and creative assets against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Data Retention
              </h2>
              <p className="text-muted-foreground">
                We retain your personal information and project details for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or requested for portfolio purposes with your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Your Rights
              </h2>
              <p className="text-muted-foreground">
                Under Indonesian data protection laws, you have the right to:
              </p>
              <ul className="list-disc ml-6 mt-2 text-muted-foreground space-y-1">
                <li>Access your personal data and project information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Request removal of your commissioned artwork from our portfolio</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience on our illustration platform, remember your preferences, maintain your login status, analyze site traffic, and provide personalized artwork recommendations based on your browsing history.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                Unless otherwise specified in a written agreement, clients receive full ownership rights to the final artwork delivered. However, illustranova retains the right to display commissioned work in our portfolio, website, and social media for promotional purposes unless a confidentiality agreement is in place.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                8. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about this Privacy Policy, your commissioned artwork, or our data practices, please contact us at:</p>
                <div className="mt-2">
                  <p>PT RISET TEKNOLOGI INTERNET</p>
                  <p>Gedung Is Plaza Lt. 5</p>
                  <p>Jl Pramuka Kav 150, Utan Kayu Utara</p>
                  <p>Matraman, Jakarta Timur</p>
                  <p>DKI Jakarta, Indonesia</p>
                  <p>Email: studio@illustranova.com</p>
                  <p>Phone: (021) 52067542</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 