import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - PT RISET TEKNOLOGI INTERNET',
  description: 'Terms of Service and conditions for using illustranova services',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen py-12 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground italic mb-8">
            Last Updated: {new Date().toLocaleDateString()}
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing and using the services provided by PT RISET TEKNOLOGI INTERNET (hereinafter referred to as &quot;illustranova&quot;), you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                2. Products and Services
              </h2>
              <p className="text-muted-foreground">
                illustranova provides professional illustration and design services including character design, vector portraits, UI illustrations, brand mascots, and other visual art solutions. All service listings, including prices, availability, and specifications, are subject to change without prior notice. We guarantee the quality and originality of all artwork created through our platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                3. Revisions and Satisfaction
              </h2>
              <p className="text-muted-foreground">
                All illustration services include a specified number of revision rounds as detailed in each service description. Additional revisions beyond the included amount may incur extra charges. Clients must provide clear feedback within 7 days of receiving draft artwork. We strive for complete client satisfaction and will work with you to ensure the final artwork meets your expectations within the agreed scope.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                4. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground">
                Upon full payment, clients receive the agreed-upon usage rights to the final artwork as specified in the service contract. Unless explicitly stated otherwise, illustranova retains the right to display the created artwork in our portfolio, website, and promotional materials. Clients are responsible for ensuring they have proper rights to any reference materials provided for the illustration process.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                5. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                While we guarantee the originality and quality of our artwork, illustranova shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services, including but not limited to business losses, missed opportunities, or subjective artistic preferences beyond the agreed-upon project scope.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                6. Governing Law
              </h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws of the Republic of Indonesia. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jakarta, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                7. Contact Information
              </h2>
              <div className="text-muted-foreground">
                <p>For any questions about these Terms of Service, please contact us at:</p>
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