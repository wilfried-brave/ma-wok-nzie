// Assiette décorative : motifs géométriques aux couleurs du Cameroun
function Plate() {
  const teeth = Array.from({ length: 28 }, (_, i) => (
    <polygon
      key={i}
      points="190,14 210,14 200,54"
      transform={`rotate(${(i * 360) / 28} 200 200)`}
      fill={i % 2 ? '#f4b41a' : '#c0281d'}
    />
  ))
  const star = Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 ? 24 : 58
    const a = (Math.PI / 5) * i - Math.PI / 2
    return `${200 + r * Math.cos(a)},${200 + r * Math.sin(a)}`
  }).join(' ')

  return (
    <svg className="plate" viewBox="0 0 400 400" role="img" aria-label="Assiette décorative aux motifs africains">
      <circle cx="200" cy="200" r="196" fill="#f4b41a" />
      <circle cx="200" cy="200" r="186" fill="#0a1f15" />
      {teeth}
      <circle cx="200" cy="200" r="140" fill="#c0281d" />
      <circle cx="200" cy="200" r="122" fill="#0f6b3f" />
      <circle cx="200" cy="200" r="104" fill="none" stroke="#efe6d2" strokeWidth="2" strokeDasharray="3 9" strokeLinecap="round" />
      <circle cx="200" cy="200" r="86" fill="#0a1f15" />
      <polygon points={star} fill="#f4b41a" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__text">
        <p className="hero__kicker">Restaurant africain, cuisine du Cameroun</p>
        <h1 className="hero__title">Ça sent la maison, du Cameroun jusqu’au Sénégal.</h1>
        <p className="hero__lead">
          Ndolé mijoté, poulet DG, poisson braisé au feu de bois. Nous cuisinons les plats de
          chez nous, et ceux de nos voisins d’Afrique, comme à la maison.
        </p>
        <div className="hero__actions">
          <a href="#reservation" className="btn btn--yellow">Réserver une table</a>
          <a href="#menu" className="btn btn--ghost">Voir le menu</a>
        </div>
        <dl className="hero__facts">
          <div>
            <dt>Ouvert</dt>
            <dd>Tous les jours, 11h à 23h</dd>
          </div>
          <div>
            <dt>Cuisine</dt>
            <dd>Cameroun et 5 pays d’Afrique</dd>
          </div>
        </dl>
      </div>
      <div className="hero__art">
        <Plate />
      </div>
    </section>
  )
}
