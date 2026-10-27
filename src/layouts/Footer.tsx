import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../config/site'

export default function Footer() {
  return (
    <footer className="shrink-0 bg-night text-night-foreground">
      <div className="kente-bar" aria-hidden="true" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 text-xs sm:flex-row sm:justify-between sm:px-6">
        <p className="text-night-foreground/70">
          © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
        </p>

        <ul className="hidden items-center gap-5 text-night-foreground/80 lg:flex">
          <li className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {siteConfig.address}
          </li>
          <li className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            <a href={siteConfig.phoneHref} className="hover:text-accent">
              {siteConfig.phone}
            </a>
          </li>
          <li className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {siteConfig.hours}
          </li>
        </ul>

        <nav aria-label="Liens du pied de page" className="flex items-center gap-4 font-medium">
          <Link to="/menu/plats" className="hover:text-accent">Menu</Link>
          <Link to="/cave" className="hover:text-accent">La Cave</Link>
          <Link to="/reservation" className="hover:text-accent">Réservation</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </nav>
      </div>
    </footer>
  )
}