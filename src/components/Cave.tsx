import { useState } from 'react'
import { wines, wineTypes } from '../data.ts'
import type { WineType } from '../data.ts'

const fcfa = (n: number) => n.toLocaleString('fr-FR') + ' FCFA'

export default function Cave() {
  const [type, setType] = useState<WineType>('rouge')
  const list = wines.filter((w) => w.type === type)

  return (
    <section className="cave" id="cave">
      <div className="cave__head">
        <h2>La Cave <span>Goûtes de Dieu</span></h2>
        <p>
          Nos millésimes sont choisis pour accompagner votre repas. Chaque bouteille est
          associée aux plats qu’elle sublime.
        </p>
      </div>

      <div className="menu__tabs" role="tablist" aria-label="Types de vins">
        {wineTypes.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={t.id === type}
            className={t.id === type ? 'is-active' : ''}
            onClick={() => setType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ul className="cave__list" key={type}>
        {list.map((w) => (
          <li key={w.name + w.year} className="wine">
            <span className="wine__year" aria-label={`Millésime ${w.year}`}>{w.year}</span>
            <div className="wine__body">
              <h3>{w.name}</h3>
              <p className="wine__where">{w.region}</p>
              <p className="wine__notes">{w.notes}</p>
              <div className="wine__pair">
                <small>Accompagne :</small>
                {w.pairing.map((dish) => (
                  <span key={dish}>{dish}</span>
                ))}
              </div>
              <p className="wine__price">{fcfa(w.price)} la bouteille</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="cave__legal">L’abus d’alcool est dangereux pour la santé. À consommer avec modération.</p>
    </section>
  )
}