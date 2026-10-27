import type { PhotoKey } from '../config/images'

interface CategoryMeta {
  intro: string
  hero: PhotoKey
  gallery: PhotoKey[]
}

// Texte d'introduction et photos de chaque catégorie du menu.
export const categoryMeta: Record<string, CategoryMeta> = {
  entrees: {
    intro: 'Pour ouvrir l’appétit : beignets croustillants, soupes parfumées et salades fraîches.',
    hero: 'fishPlate',
    gallery: ['dish', 'market', 'fishGrill'],
  },
  plats: {
    intro: 'Le cœur de notre cuisine : ndolé, poulet DG, eru, koki… les grands plats du Cameroun, mijotés lentement.',
    hero: 'market',
    gallery: ['dish', 'grilledFish', 'skewers'],
  },
  afrique: {
    intro: 'Le voyage continue : Sénégal, Nigeria, RD Congo, Côte d’Ivoire… les grands classiques de nos voisins.',
    hero: 'dish',
    gallery: ['market', 'grilledFish', 'skewers'],
  },
  grillades: {
    intro: 'Le feu de bois, les épices et la patience : brochettes, soya et poulet braisé.',
    hero: 'skewers',
    gallery: ['fishGrill', 'skewers', 'market'],
  },
  poissons: {
    intro: 'Braisés, mijotés ou fumés : les poissons de nos côtes et de nos rivières.',
    hero: 'grilledFish',
    gallery: ['fishGrill', 'fishPlate', 'market'],
  },
  desserts: {
    intro: 'Une fin de repas gourmande : beignets dorés, plantains caramélisés et douceurs au baobab.',
    hero: 'doughnuts',
    gallery: ['doughnuts', 'redDrink', 'wine'],
  },
  boissons: {
    intro: 'Bissap, gingembre, folere, baobab : des boissons fraîches et naturelles pour accompagner les plats.',
    hero: 'redDrink',
    gallery: ['redDrink', 'wine', 'doughnuts'],
  },
}