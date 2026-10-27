// Catégories du menu. Modifiez librement les plats et les prix (en FCFA).
export interface Dish {
  name: string
  origin: string
  desc: string
  price: number
}

export interface Category {
  id: string
  label: string
  items: Dish[]
}

export interface Country {
  name: string
  dish: string
  color: string
}

export const categories: Category[] = [
  {
    id: 'entrees',
    label: 'Entrées',
    items: [
      { name: 'Accras de morue', origin: 'Côte d’Ivoire', desc: 'Beignets croustillants de poisson, sauce pimentée maison.', price: 2500 },
      { name: 'Salade d’avocat et crevettes', origin: 'Cameroun', desc: 'Avocat du marché, crevettes, citron vert et oignon rouge.', price: 3000 },
      { name: 'Soupe de poisson épicée', origin: 'Sénégal', desc: 'Bouillon parfumé au gingembre et au piment doux.', price: 2800 },
      { name: 'Beignets de haricots', origin: 'Cameroun', desc: 'Croustillants dehors, moelleux dedans, avec bouillie de maïs.', price: 1500 },
    ],
  },
  {
    id: 'plats',
    label: 'Plats du Cameroun',
    items: [
      { name: 'Ndolé aux crevettes', origin: 'Cameroun', desc: 'Feuilles amères, arachides, crevettes et viande, servi avec plantain mûr.', price: 6500 },
      { name: 'Poulet DG', origin: 'Cameroun', desc: 'Poulet mijoté, plantains dorés, carottes et haricots verts.', price: 7000 },
      { name: 'Eru et water fufu', origin: 'Cameroun', desc: 'Feuilles d’eru, huile de palme, viande fumée et fufu maison.', price: 6000 },
      { name: 'Koki et plantain', origin: 'Cameroun', desc: 'Gâteau de haricots à l’huile de palme, cuit en feuille de bananier.', price: 4500 },
      { name: 'Sauce jaune et taro', origin: 'Cameroun', desc: 'Sauce au curcuma et au citron, taro râpé, poisson ou viande.', price: 6500 },
    ],
  },
  {
    id: 'afrique',
    label: 'Saveurs d’Afrique',
    items: [
      { name: 'Thieboudienne', origin: 'Sénégal', desc: 'Riz au poisson, légumes racines et sauce tomate parfumée.', price: 7000 },
      { name: 'Poulet yassa', origin: 'Sénégal', desc: 'Poulet mariné aux oignons confits et au citron.', price: 6500 },
      { name: 'Jollof rice', origin: 'Nigeria', desc: 'Riz rouge fumé, poulet grillé et plantain frit.', price: 5500 },
      { name: 'Poulet moambé', origin: 'RD Congo', desc: 'Poulet à la sauce de noix de palme, riz ou chikwangue.', price: 7000 },
      { name: 'Kédjenou de poulet', origin: 'Côte d’Ivoire', desc: 'Poulet étouffé aux légumes, cuit lentement en cocotte.', price: 6800 },
    ],
  },
  {
    id: 'grillades',
    label: 'Grillades',
    items: [
      { name: 'Soya de bœuf', origin: 'Cameroun', desc: 'Brochettes épicées au yaji, oignons et piment frais.', price: 3500 },
      { name: 'Poulet braisé', origin: 'Cameroun', desc: 'Mariné toute la nuit, grillé au feu de bois, avec miondo.', price: 6000 },
      { name: 'Brochettes d’agneau', origin: 'Mali', desc: 'Agneau tendre, épices du Sahel et sauce arachide.', price: 5500 },
    ],
  },
  {
    id: 'poissons',
    label: 'Poissons',
    items: [
      { name: 'Poisson braisé et bâton de manioc', origin: 'Cameroun', desc: 'Capitaine ou bar grillé, sauce pimentée et oignons.', price: 8000 },
      { name: 'Mbongo tchobi', origin: 'Cameroun', desc: 'Sauce noire aux épices de la côte, poisson fumé ou frais.', price: 7500 },
      { name: 'Attiéké au poisson', origin: 'Côte d’Ivoire', desc: 'Semoule de manioc, poisson grillé, tomates et oignons.', price: 6500 },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      { name: 'Puff-puff', origin: 'Cameroun', desc: 'Beignets dorés et moelleux, saupoudrés de sucre.', price: 1500 },
      { name: 'Bananes plantains caramélisées', origin: 'Cameroun', desc: 'Plantain mûr, caramel au beurre et glace vanille.', price: 2500 },
      { name: 'Gâteau de manioc à la coco', origin: 'Côte d’Ivoire', desc: 'Dense et parfumé, avec un coulis de mangue.', price: 2800 },
      { name: 'Chin-chin', origin: 'Nigeria', desc: 'Petits biscuits croquants à la noix de muscade.', price: 1800 },
      { name: 'Sorbet baobab et mangue', origin: 'Sénégal', desc: 'Fruit du baobab et mangue mûre, frais et acidulé.', price: 2500 },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    items: [
      { name: 'Bissap glacé', origin: 'Sénégal', desc: 'Fleurs d’hibiscus, menthe et un peu de sucre.', price: 1500 },
      { name: 'Jus de gingembre', origin: 'Cameroun', desc: 'Gingembre frais pressé, citron, piment en option.', price: 1500 },
      { name: 'Jus de folere', origin: 'Cameroun', desc: 'Oseille rouge infusée, parfumée à l’ananas.', price: 1500 },
      { name: 'Jus de baobab', origin: 'Mali', desc: 'Onctueux, légèrement acidulé, servi bien frais.', price: 2000 },
    ],
  },
]

export const countries: Country[] = [
  { name: 'Cameroun', dish: 'Ndolé, poulet DG, koki', color: '#0f6b3f' },
  { name: 'Sénégal', dish: 'Thieboudienne, yassa', color: '#f4b41a' },
  { name: 'Côte d’Ivoire', dish: 'Kédjenou, attiéké', color: '#d9541e' },
  { name: 'Nigeria', dish: 'Jollof rice, chin-chin', color: '#0f6b3f' },
  { name: 'RD Congo', dish: 'Poulet moambé', color: '#c0281d' },
  { name: 'Mali', dish: 'Brochettes, jus de baobab', color: '#f4b41a' },
]


// ---------- La Cave Goûtes de Dieu ----------
export type WineType = 'blanc' | 'rouge' | 'rose' | 'bulles' | 'doux'

export interface Wine {
  name: string
  year: number
  region: string
  type: WineType
  notes: string
  pairing: string[]
  price: number
}

export const wineTypes: { id: WineType; label: string }[] = [
  { id: 'blanc', label: 'Blancs' },
  { id: 'rouge', label: 'Rouges' },
  { id: 'rose', label: 'Rosés' },
  { id: 'bulles', label: 'Effervescents' },
  { id: 'doux', label: 'Vins doux' },
]

// Prix à la bouteille, en FCFA. Modifiez les vins et les millésimes selon votre cave.
export const wines: Wine[] = [
  { name: 'Sancerre', year: 2022, region: 'Loire, France', type: 'blanc', notes: 'Vif et frais, agrumes et pierre à fusil.', pairing: ['Poisson braisé', 'Accras de morue', 'Salade d’avocat et crevettes'], price: 28000 },
  { name: 'Chablis', year: 2021, region: 'Bourgogne, France', type: 'blanc', notes: 'Tendu et minéral, notes de citron.', pairing: ['Attiéké au poisson', 'Soupe de poisson épicée'], price: 32000 },
  { name: 'Chenin Blanc', year: 2022, region: 'Stellenbosch, Afrique du Sud', type: 'blanc', notes: 'Fruité, pomme mûre et miel léger.', pairing: ['Poulet yassa', 'Sauce jaune et taro'], price: 18000 },

  { name: 'Côtes du Rhône', year: 2021, region: 'Vallée du Rhône, France', type: 'rouge', notes: 'Épicé et gourmand, fruits rouges.', pairing: ['Soya de bœuf', 'Poulet braisé'], price: 16000 },
  { name: 'Saint-Émilion Grand Cru', year: 2018, region: 'Bordeaux, France', type: 'rouge', notes: 'Rond et soyeux, tanins fondus.', pairing: ['Poulet DG', 'Brochettes d’agneau'], price: 45000 },
  { name: 'Pinotage', year: 2020, region: 'Paarl, Afrique du Sud', type: 'rouge', notes: 'Fumé, mûre et poivre.', pairing: ['Poulet moambé', 'Jollof rice'], price: 20000 },

  { name: 'Côtes de Provence', year: 2023, region: 'Provence, France', type: 'rose', notes: 'Frais et fruité, fraise et pêche blanche.', pairing: ['Beignets de haricots', 'Poulet yassa'], price: 17000 },
  { name: 'Tavel', year: 2022, region: 'Vallée du Rhône, France', type: 'rose', notes: 'Rosé de repas, charnu et structuré.', pairing: ['Kédjenou de poulet', 'Poulet braisé'], price: 19000 },

  { name: 'Champagne Brut', year: 2015, region: 'Champagne, France', type: 'bulles', notes: 'Bulles fines, brioche et agrumes.', pairing: ['Accras de morue', 'Puff-puff'], price: 65000 },
  { name: 'Crémant de Loire', year: 2021, region: 'Loire, France', type: 'bulles', notes: 'Léger et vif, pomme verte.', pairing: ['Beignets de haricots', 'Soya de bœuf'], price: 22000 },

  { name: 'Moscato d’Asti', year: 2023, region: 'Piémont, Italie', type: 'doux', notes: 'Léger, pêche et fleur d’oranger.', pairing: ['Puff-puff', 'Chin-chin', 'Sorbet baobab et mangue'], price: 15000 },
  { name: 'Sauternes', year: 2017, region: 'Bordeaux, France', type: 'doux', notes: 'Onctueux, miel et abricot.', pairing: ['Bananes plantains caramélisées', 'Gâteau de manioc à la coco'], price: 38000 },
]