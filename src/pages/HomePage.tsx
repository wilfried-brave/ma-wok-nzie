import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, ChefHat, Clock, Flame, Users } from 'lucide-react'
import Container from '../components/common/Container'
import Marquee from '../components/common/Marquee'
import SmartImage from '../components/common/SmartImages'
import { categories, countries, wines } from '@/data/menu'
import type { Dish, Wine } from '@/data/menu'
import { images } from '../config/images'
import { siteConfig } from '../config/site'
import { formatPrice } from '../lib/format'

const allDishes: Dish[] = categories.flatMap((c) => c.items)

const signatureNames = [
  'Ndolé aux crevettes',
  'Poulet DG',
  'Poisson braisé et bâton de manioc',
  'Puff-puff',
]
const signature = signatureNames
  .map((name) => allDishes.find((d) => d.name === name))
  .filter((d): d is Dish => d !== undefined)

const teaserWines = (['rouge', 'blanc', 'bulles'] as const)
  .map((type) => wines.find((w) => w.type === type))
  .filter((w): w is Wine => w !== undefined)

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

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-night-foreground">
      <div className="bg-diamonds absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-highlight/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />

      <Container className="grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
            <Flame className="h-4 w-4" aria-hidden="true" />
            Cuisine du Cameroun et d’Afrique
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Ça sent la maison, du Cameroun jusqu’au <span className="text-accent">Sénégal</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-night-foreground/80">
            Ndolé mijoté, poulet DG, poisson braisé au feu de bois. Nous cuisinons les plats de
            chez nous, et ceux de nos voisins d’Afrique, comme à la maison.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/reservation"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground shadow-lg shadow-accent/20 transition hover:-translate-y-0.5"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1/4 animate-shimmer bg-white/50 blur-md motion-reduce:hidden"
              />
              <CalendarCheck className="relative h-5 w-5" aria-hidden="true" />
              <span className="relative">Réserver une table</span>
            </Link>
            <Link
              to="/menu/plats"
              className="inline-flex items-center gap-2 rounded-full border border-night-foreground/40 px-6 py-3 font-semibold transition hover:bg-night-foreground hover:text-night"
            >
              Voir le menu
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div>
              <dt className="text-sm text-night-foreground/60">Pays à notre table</dt>
              <dd className="font-display text-3xl font-extrabold text-accent">{countries.length}</dd>
            </div>
            <div>
              <dt className="text-sm text-night-foreground/60">Plats et boissons</dt>
              <dd className="font-display text-3xl font-extrabold text-accent">{allDishes.length}</dd>
            </div>
            <div>
              <dt className="text-sm text-night-foreground/60">Millésimes à la cave</dt>
              <dd className="font-display text-3xl font-extrabold text-accent">{wines.length}</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-accent/80 shadow-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <SmartImage
              src={images.hero}
              alt="Un plat camerounais servi à table"
              label="Ma Wok Nzie"
              priority
              className="h-full w-full"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 text-card-foreground shadow-xl ring-1 ring-border sm:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold">Ouvert tous les jours</p>
              <p className="text-xs text-muted-foreground">{siteConfig.hours.replace('Tous les jours, ', '')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CountriesStrip() {
  return (
    <section aria-label="Pays et saveurs" className="bg-accent py-3 text-accent-foreground">
      <Marquee>
        {countries.map((c) => (
          <span key={c.name} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-display text-lg font-bold">{c.name}</span>
            <span className="text-sm font-medium opacity-80">{c.dish}</span>
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  )
}

function Signature() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Nos plats signatures</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Les plats que nos clients commandent le plus souvent.
            </p>
          </div>
          <Link to="/menu/plats" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            Tout le menu <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signature.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <SmartImage
                  src={images.dishes[dish.name] ?? ''}
                  alt={dish.name}
                  className="h-full w-full transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="rounded-full bg-accent/25 px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                  {dish.origin}
                </span>
                <h3 className="mt-3 text-lg font-bold leading-tight">{dish.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{dish.desc}</p>
                <p className="mt-3 font-display font-bold text-primary">{formatPrice(dish.price)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Categories() {
  return (
    <section className="bg-muted/60 py-16 lg:py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Explorez notre carte</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Des entrées aux desserts, choisissez une catégorie.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              to={`/menu/${c.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-border"
            >
              <SmartImage
                src={images.categories[c.id] ?? ''}
                alt={c.label}
                className="absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/30 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-night-foreground">
                <h3 className="text-lg font-bold leading-tight">{c.label}</h3>
                <p className="text-sm text-night-foreground/75">{c.items.length} propositions</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CaveTeaser() {
  return (
    <section className="bg-primary py-16 text-primary-foreground lg:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            La Cave <span className="text-accent">Goûtes de Dieu</span>
          </h2>
          <p className="mt-4 max-w-lg text-primary-foreground/85">
            Des millésimes choisis pour accompagner votre repas. Chaque bouteille est associée aux
            plats qu’elle sublime.
          </p>
          <Link
            to="/cave"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-bold text-accent-foreground transition hover:-translate-y-0.5"
          >
            Découvrir la cave <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {teaserWines.map((w) => (
            <li key={w.name + w.year} className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="font-display text-4xl font-extrabold text-accent">{w.year}</p>
              <h3 className="mt-2 font-bold leading-tight">{w.name}</h3>
              <p className="mt-1 text-sm text-primary-foreground/75">{w.region}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Values() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Pourquoi Ma Wok Nzie</h2>
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
  )
}

function ReservationCta() {
  return (
    <section className="bg-secondary py-14">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-secondary-foreground">
            Une table vous attend
          </h2>
          <p className="mt-2 text-secondary-foreground/80">
            Réservez en ligne ou appelez-nous au{' '}
            <a href={siteConfig.phoneHref} className="font-semibold underline">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
        <Link
          to="/reservation"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition hover:-translate-y-0.5"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Réserver maintenant
        </Link>
      </Container>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <CountriesStrip />
      <Signature />
      <Categories />
      <CaveTeaser />
      <Values />
      <ReservationCta />
    </>
  )
}