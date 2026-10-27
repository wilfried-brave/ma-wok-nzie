import { Link } from 'react-router-dom'
import Container from '../components/common/Container'

export default function NotFoundPage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="font-display text-7xl font-extrabold text-accent">404</p>
      <h1 className="mt-2 text-3xl font-extrabold">Cette page n’existe pas</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        Le lien est peut-être incorrect, ou la page a été déplacée.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110"
      >
        Retour à l’accueil
      </Link>
    </Container>
  )
}