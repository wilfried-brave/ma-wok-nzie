import { Link, useParams } from 'react-router-dom'
import Container from '../components/common/Container'

interface ComingSoonPageProps {
  title: string
  step: number
}

export default function ComingSoonPage({ title, step }: ComingSoonPageProps) {
  const { categoryId } = useParams()

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
      {categoryId && <p className="mt-2 text-muted-foreground">Catégorie : {categoryId}</p>}
      <p className="mt-4 max-w-md text-muted-foreground">
        Cette page sera construite à l’étape {step} du plan.
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