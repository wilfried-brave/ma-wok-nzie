import { categories } from '../data.ts'

interface MenuProps {
  active: string
  onChange: (id: string) => void
}

const fcfa = (n: number) => n.toLocaleString('fr-FR') + ' FCFA'

export default function Menu({ active, onChange }: MenuProps) {
  const current = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section className="menu" id="menu">
      <div className="menu__head">
        <h2>Notre menu</h2>
        <p>Choisissez une catégorie. Tous les plats sont préparés à la commande.</p>
      </div>

      <div className="menu__tabs" role="tablist" aria-label="Catégories du menu">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === current.id}
            className={c.id === current.id ? 'is-active' : ''}
            onClick={() => onChange(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="menu__list" key={current.id}>
        {current.items.map((item) => (
          <li key={item.name} className="dish">
            <div className="dish__main">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="dish__origin">{item.origin}</span>
            </div>
            <span className="dish__price">{fcfa(item.price)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
