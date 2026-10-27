import { Link, useParams, useSearchParams } from 'react-router-dom'
import { ArrowRight, CalendarCheck } from 'lucide-react'
import Container from '../components/common/Container'
import SmartImage from '../components/common/SmartImages'
import NotFoundPage from './NotFoundPage'
import { categories } from '../data/menu'
import { categoryMeta } from '../data/categoryMeta'
import { images, photo } from '../config/images'
import { formatPrice } from '../lib/format'
import { cn } from '../lib/utils'

export default function MenuPage() {
  const { categoryId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const category = categories.find((c) => c.id === categoryId)
  if (!category) return <NotFoundPage />

  const meta = categoryMeta[category.id]
  const origins = Array.from(new Set(category.items.map((i) => i.origin)))
  const pays = searchParams.get('pays')
  const activeCountry = pays && origins.includes(pays) ? pays : null
  const items = activeCountry ? category.items.filter((i) => i.origin === activeCountry) : category.items
  const next = categories[(categories.indexOf(category) + 1) % categories.length]

  return (
    <>
      {/* Bandeau */}
      <section className="relative isolate overflow-hidden bg-night text-night-foreground">
        <SmartImage
          src={photo(meta.hero, 1600, 700)}
          alt={category.label}
          label=""
          priority
          className="absolute inset-0 -z-20 h-full w-full"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/80 to-night/30" aria-hidden="true" />
        <Container className="py-16 lg:py-24">
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl">{category.label}</h1>
          <p className="mt-4 max-w-xl text-lg text-night-foreground/85">{meta.intro}</p>
        </Container>
      </section>

      {/* Onglets des catégories */}
      <nav aria-label="Catégories du menu" className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <Container className="flex gap-2 overflow-x-auto py-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/menu/${c.id}`}
              aria-current={c.id === category.id ? 'page' : undefined}
              className={cn(
                'shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition',
                c.id === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-secondary',
              )}
            >
              {c.label}
            </Link>
          ))}
        </Container>
      </nav>

      <section className="py-12 lg:py-16">
        <Container>
          {/* Filtre par pays */}
          {origins.length > 1 && (
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-sm font-semibold text-muted-foreground">Par pays :</span>
              <button
                type="button"
                aria-pressed={activeCountry === null}
                onClick={() => setSearchParams({})}
                className={cn(
                  'rounded-full border px-3 py-1.5 text-sm font-medium transition',
                  activeCountry === null ? 'border-accent bg-accent text-accent-foreground' : 'hover:bg-muted',
                )}
              >
                Tous
              </button>
              {origins.map((o) => (
                <button
                  key={o}
                  type="button"
                  aria-pressed={activeCountry === o}
                  onClick={() => setSearchParams({ pays: o })}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-sm font-medium transition',
                    activeCountry === o ? 'border-accent bg-accent text-accent-foreground' : 'hover:bg-muted',
                  )}
                >
                  {o}
                </button>
              ))}
            </div>
          )}

          {/* Plats */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SmartImage
                    src={images.dishes[item.name]}
                    alt={item.name}
                    label={item.name}
                    className="h-full w-full transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-accent/25 px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                    {item.origin}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-tight">{item.name}</h2>
                  <p className="mt-1.5 flex-1 text-sm text-muted-foreground">{item.desc}</p>
                  <p className="mt-4 font-display text-lg font-bold text-primary">{formatPrice(item.price)}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Galerie */}
      <section className="bg-muted/60 py-12 lg:py-16">
        <Container>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Dans l’assiette et sur le feu</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {meta.gallery.map((key, i) => (
              <div key={key + i} className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border sm:aspect-[4/5]">
                <SmartImage
                  src={photo(key, 700, 875)}
                  alt={`Ambiance ${category.label.toLowerCase()}`}
                  label=""
                  className="h-full w-full transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Suite */}
      <section className="py-12">
        <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            to={`/menu/${next.id}`}
            className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Ensuite : {next.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Réserver une table
          </Link>
        </Container>
      </section>
    </>
  )
}