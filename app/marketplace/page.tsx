import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Professional Illustration Services</h1>
        <p className="mt-2 text-muted-foreground">
          Transform your ideas into stunning visual art with our comprehensive illustration solutions. From character design to UI elements, 
          we offer expert services to bring your creative vision to life and enhance your digital presence with unique, eye-catching illustrations.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *All prices are in IDR. Custom illustration packages available for specific project needs. Contact our team for detailed creative consultations.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}