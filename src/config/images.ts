// Photos libres de droits (Unsplash). Pour utiliser vos propres photos,
// remplacez simplement une adresse par '/images/mon-fichier.jpg'
// (fichier placé dans public/images/).
const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}${h ? `&h=${h}` : ''}`

const ids = {
  fishGrill: '1761950190821-970680100a22', // poisson grillé sur braise
  grilledFish: '1725393325387-07f0d4951528', // poissons grillés, oignons et poivrons
  fishPlate: '1519708227418-c8fd9a32b7a2', // poisson grillé et légumes
  skewers: '1623253458786-eac05e77be2b', // brochettes sur le feu
  doughnuts: '1519915495817-684cdf876a1c', // beignets
  redDrink: '1600332098294-2e6fefaa6d66', // boisson rouge glacée
  wine: '1600673177531-46749442aa63', // verre de vin rouge
  market: '1734255026082-82fdc81991f0', // marché : tomates et piments
  dish: '1591188611600-cf65b0e1aed2', // plat dans un bol
}

export type PhotoKey = keyof typeof ids

export const photo = (key: PhotoKey, w = 800, h?: number) => unsplash(ids[key], w, h)

/** Auteurs des photos (la licence Unsplash ne l'impose pas, mais c'est une bonne pratique). */
export const photoCredits = [
  'Mihály Köles',
  'Francisca Dzise',
  'Caroline Attwood',
  'Keji Gao',
  'Courtney Cook',
  'Riccardo Andolfo',
  'the blowup',
  'Tunde Buremo',
  'Isaiah Wilfred',
]

export const images = {
  hero: photo('grilledFish', 1000, 1200),
  cave: photo('wine', 1000, 700),
  // Photos de plats (illustratives : remplacez-les par vos vraies photos)
  dishes: {
    'Salade d’avocat et crevettes': photo('dish', 700, 525),
    'Poisson braisé et bâton de manioc': photo('grilledFish', 700, 525),
    'Attiéké au poisson': photo('fishPlate', 700, 525),
    'Soya de bœuf': photo('skewers', 700, 525),
    'Poulet braisé': photo('skewers', 700, 525),
    'Brochettes d’agneau': photo('skewers', 700, 525),
    'Puff-puff': photo('doughnuts', 700, 525),
    'Bissap glacé': photo('redDrink', 700, 525),
    'Jus de folere': photo('redDrink', 700, 525),
  } as Record<string, string>,
  categories: {
    entrees: photo('fishPlate', 700, 525),
    plats: photo('market', 700, 525),
    afrique: photo('dish', 700, 525),
    grillades: photo('skewers', 700, 525),
    poissons: photo('grilledFish', 700, 525),
    desserts: photo('doughnuts', 700, 525),
    boissons: photo('redDrink', 700, 525),
  } as Record<string, string>,
}