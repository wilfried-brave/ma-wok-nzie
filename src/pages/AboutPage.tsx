import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, ChefHat, Flame, Mail, Users } from 'lucide-react'
import Container from '../components/common/Container'
import SmartImage from '../components/common/SmartImages'
import { categories, countries, wines } from '../data/menu'
import { photo, photoCredits } from '../config/images'

const dishCount = categories.reduce((total, c) => total + c.items.length, 0)

const values = [
  {
    icon: Flame,
    title: 'Des saveurs de chez nous',
    text: 'Piment, plantain, manioc, arachide, huile de palme : les ingrédients qui font le goût du Cameroun et de l’Afrique.',
  },
  {
    icon: ChefHat,
    title: 'Une cuisine faite maison',
    text: 'Nos sauces mijotent lentement et nos plats sont préparés à la commande, comme à la maison.',
  },
  {
    icon: Users,
    title: 'Une table qui rassemble',
    text: 'Chez nous, on partage. Venez en famille ou entre amis, et goûtez à tout.',
  },
]

// Catégorie du menu contenant le premier plat d'un pays
const categoryFor = (country: string) =>
  categories.find((c) => c.items.some((i) => i.origin === country))?.id ?? 'plats'

export default function AboutPage() {
  return (
    <>
      {/* Bandeau */}
      <section className="relative isolate overflow-hidden bg-night text-night-foreground">
        <SmartImage src={photo('market', 1600, 700)} alt="Marché africain" label="" priority className="absolute inset-0 -z-20 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/80 to-night/30" aria-hidden="true" />
        <Container className="py-16 lg:py-24">
          <h1 className="animate-fade-up text-4xl font-extrabold tracking-tight sm:text-5xl">À propos de nous</h1>
          <p className="mt-4 max-w-xl text-lg text-night-foreground/85">
            Une cuisine camerounaise généreuse, ouverte sur toute l’Afrique.
          </p>
        </Container>
      </section>

      {/* Histoire */}
      <section className="py-16 lg:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Notre histoire</h2>
            <p className="mt-5 text-muted-foreground">
              Ma Wok Nzie est né d’une idée simple : faire goûter la cuisine camerounaise telle
              qu’on la mange chez nous, avec ses sauces profondes, ses feux de bois et sa générosité.
            </p>
            <p className="mt-4 text-muted-foreground">
              Du ndolé au poulet DG, du poisson braisé aux desserts de plantain, notre carte part du
              Cameroun puis voyage chez ses voisins. À la cave, nous avons choisi des millésimes qui
              accompagnent chaque repas, pour que chaque plat trouve son vin.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
              <div>
                <dt className="text-sm text-muted-foreground">Pays</dt>
                <dd className="font-display text-3xl font-extrabold text-primary">{countries.length}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Plats et boissons</dt>
                <dd className="font-display text-3xl font-extrabold text-primary">{dishCount}</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Millésimes</dt>
                <dd className="font-display text-3xl font-extrabold text-primary">{wines.length}</dd>
              </div>
            </dl>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border">
              <SmartImage src={photo('fishGrill', 600, 800)} alt="Poisson grillé sur la braise" label="" className="h-full w-full" />
            </div>
            <div className="mt-8 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-border">
              <SmartImage src={photo('dish', 600, 800)} alt="Un plat africain" label="" className="h-full w-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* Valeurs */}
      <section className="bg-muted/60 py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ce qui nous guide</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-card p-6 ring-1 ring-border">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pays */}
      <section className="py-16 lg:py-20">
        <Container>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Un voyage dans {countries.length} pays</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">Choisissez un pays pour découvrir ses plats.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <Link
                key={c.name}
                to={`/menu/${categoryFor(c.name)}?pays=${encodeURIComponent(c.name)}`}
                className="group rounded-2xl bg-card p-5 ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lg"
                style={{ borderLeft: `8px solid ${c.color}` }}
              >
                <h3 className="font-display text-xl font-bold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.dish}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Voir les plats <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Galerie */}
      <section className="bg-night py-12 text-night-foreground">
        <Container>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {(['skewers', 'redDrink', 'doughnuts', 'wine'] as const).map((key) => (
              <div key={key} className="aspect-square overflow-hidden rounded-2xl">
                <SmartImage src={photo(key, 600, 600)} alt="Ambiance Ma Wok Nzie" label="" className="h-full w-full transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Appel */}
      <section className="bg-secondary py-14">
        <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-secondary-foreground">Venez nous rencontrer</h2>
            <p className="mt-2 text-secondary-foreground/80">Une table vous attend, ou écrivez-nous.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/reservation" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5">
              <CalendarCheck className="h-5 w-5" aria-hidden="true" /> Réserver
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
              <Mail className="h-5 w-5" aria-hidden="true" /> Nous contacter
            </Link>
          </div>
        </Container>
      </section>

      <p className="px-4 py-4 text-center text-xs text-muted-foreground">
        Photos : Unsplash — {photoCredits.join(', ')}.
      </p>
    </>
  )
}