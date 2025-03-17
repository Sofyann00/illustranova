import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-x-2">
              <img 
                src="/app_icon.png" 
                alt="illustranova Logo"
                width={32}
                height={32}
                className="brightness-0 invert"
              />
              <span className="text-xl font-bold">illustranova</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your creative partner for stunning digital illustrations. 
              We specialize in character design, vector art, UI illustrations, 
              and custom visual content to bring your ideas to life with style and imagination.
            </p>
          </div>


          {/* Help section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Creative Support</p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:studio@illustranova.com"
                    className="hover:text-foreground transition-colors"
                  >
                    studio@illustranova.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:021-52067542"
                    className="hover:text-foreground transition-colors"
                  >
                    021-52067542
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Office Location section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-6">Studio Location</h3>
            <div className="text-sm text-muted-foreground">
              <p className="leading-relaxed">
                Gedung Is Plaza Lt. 5,<br />
                Jl Pramuka Kav 150,<br />
                Utan Kayu Utara,<br />
                Matraman,<br />
                Jakarta Timur 13120
              </p>
            </div>
          </div>

          {/* Copyright section */}
          <div className="col-span-1 md:col-span-4 mt-16 pt-8 border-t">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} PT RISET TEKNOLOGI INTERNET.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
