import type { CSSProperties } from 'react'
import { countries } from '../data.ts'

export default function Origins() {
  return (
    <section className="origins" id="origines">
      <div className="origins__intro">
        <h2>Né au Cameroun, ouvert sur le continent</h2>
        <p>
          Notre cuisine part du Cameroun, de ses marchés, de ses feux de bois et de ses sauces
          lentes. Elle fait ensuite escale chez ses voisins, pour que la table soit à l’image de
          l’Afrique : variée, généreuse et partagée.
        </p>
      </div>
      <ul className="origins__list">
        {countries.map((c) => (
          <li key={c.name} style={{ '--tone': c.color } as CSSProperties}>
            <span className="origins__name">{c.name}</span>
            <span className="origins__dish">{c.dish}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
