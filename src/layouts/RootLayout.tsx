import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Structure de l'application : la navbar (haut) et le footer (bas) restent
 * fixes, seule la zone centrale défile.
 */
export default function RootLayout() {
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)

  // Revenir en haut de la zone centrale à chaque changement de page
  useEffect(() => {
    mainRef.current?.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex h-dvh flex-col bg-background text-foreground">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main ref={mainRef} id="contenu" className="flex-1 overflow-y-auto overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}