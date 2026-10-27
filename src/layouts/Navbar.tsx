import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react'
import { categories } from '../data/menu'
import { siteConfig } from '../config/site'
import { cn } from '../lib/utils'

const linkBase = 'rounded-md px-2 py-2 text-sm font-medium transition-colors hover:text-accent'
const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(linkBase, isActive ? 'text-accent' : 'text-night-foreground/85')

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(false)

  const close = () => {
    setOpen(false)
    setSub(false)
  }

  const menuActive = pathname.startsWith('/menu') && !pathname.endsWith('/desserts')

  return (
    <header className="relative z-50 shrink-0 bg-night text-night-foreground">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" onClick={close} className="flex items-center gap-2.5 font-display text-xl font-extrabold">
          <span
            aria-hidden="true"
            className="h-7 w-7 rounded-full bg-[conic-gradient(hsl(var(--highlight))_0_33%,hsl(var(--accent))_0_66%,hsl(var(--primary))_0)] ring-2 ring-accent ring-offset-2 ring-offset-night"
          />
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="rounded-md p-2 lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        <nav
          aria-label="Navigation principale"
          className={cn(
            'absolute inset-x-0 top-full max-h-[calc(100dvh-8rem)] flex-col overflow-y-auto border-t border-white/10 bg-night px-4 pb-5 pt-2 shadow-xl',
            'lg:static lg:max-h-none lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none',
            open ? 'flex' : 'hidden lg:flex',
          )}
        >
          <NavLink to="/" end onClick={close} className={linkClass}>
            Accueil
          </NavLink>

          <div className="group relative">
            <button
              type="button"
              aria-expanded={sub}
              onClick={() => setSub(!sub)}
              className={cn(
                linkBase,
                'flex w-full items-center gap-1',
                menuActive ? 'text-accent' : 'text-night-foreground/85',
              )}
            >
              Menu
              <ChevronDown className={cn('h-4 w-4 transition-transform', sub && 'rotate-180')} />
            </button>
            <div
              className={cn(
                sub ? 'block' : 'hidden',
                'ml-2 border-l-4 border-accent pl-2',
                'lg:absolute lg:left-0 lg:top-full lg:z-50 lg:ml-0 lg:w-60 lg:rounded-b-xl lg:border-l-0 lg:border-t-4 lg:bg-night lg:p-2 lg:shadow-2xl',
                'lg:group-focus-within:block lg:group-hover:block',
              )}
            >
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={`/menu/${c.id}`}
                  onClick={close}
                  className="block rounded-md px-3 py-2 text-sm text-night-foreground/90 transition hover:bg-primary hover:text-primary-foreground"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/menu/desserts" onClick={close} className={linkClass}>
            Desserts
          </NavLink>
          <NavLink to="/cave" onClick={close} className={linkClass}>
            La Cave
          </NavLink>
          <NavLink to="/a-propos" onClick={close} className={linkClass}>
            À propos
          </NavLink>
          <NavLink to="/reservation" onClick={close} className={linkClass}>
            Réservation
          </NavLink>
          <NavLink to="/contact" onClick={close} className={linkClass}>
            Contact
          </NavLink>

          <Link
            to="/connexion"
            onClick={close}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-sm font-bold text-accent-foreground transition hover:brightness-110 lg:ml-2 lg:mt-0"
          >
            Authentification
          </Link>
        </nav>
      </div>
      <div className="kente-bar" aria-hidden="true" />
    </header>
  )
}