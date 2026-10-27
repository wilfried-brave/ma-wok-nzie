import { categories, countries, wines } from '../data.ts'

const dishCount = categories.reduce((total, c) => total + c.items.length, 0)

const values = [
  {
    title: 'Des saveurs de chez nous',
    text: 'Piment, plantain, manioc, arachide, huile de palme : nous cuisinons avec les ingrédients qui font le goût du Cameroun et de l’Afrique.',
  },
  {
    title: 'Une cuisine faite maison',
    text: 'Nos sauces mijotent lentement et nos plats sont préparés à la commande, comme on le fait à la maison.',
  },
  {
    title: 'Une table qui rassemble',
    text: 'Chez nous, on partage. Venez en famille ou entre amis, et goûtez à tout.',
  },
]

export default function About() {
  return (
    <section className="about" id="apropos">
      <div className="about__text">
        <h2>À propos de nous</h2>
        <p>
          Ma Wok Nzie est né d’une idée simple : faire goûter la cuisine camerounaise telle
          qu’on la mange chez nous, avec ses sauces profondes, ses feux de bois et sa générosité.
        </p>
        <p>
          Du ndolé au poulet DG, du poisson braisé aux desserts de plantain, notre carte part du
          Cameroun puis voyage chez ses voisins. À la cave, nous avons choisi des millésimes qui
          accompagnent chaque repas, pour que chaque plat trouve son vin.
        </p>
      </div>

      <ul className="about__stats">
        <li><strong>{countries.length}</strong><span>pays à notre table</span></li>
        <li><strong>{dishCount}</strong><span>plats, desserts et boissons</span></li>
        <li><strong>{wines.length}</strong><span>millésimes à la cave</span></li>
      </ul>

      <ul className="about__values">
        {values.map((v) => (
          <li key={v.title}>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}