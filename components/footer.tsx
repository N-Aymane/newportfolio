import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full py-8 border-t bg-muted/30">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Portfolio</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">Designed and built with passion</p>
        </div>
      </div>
    </footer>
  )
}

