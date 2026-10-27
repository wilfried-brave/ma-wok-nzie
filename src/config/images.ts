// Chemins des photos. Déposez vos images dans le dossier public/images/
// (voir la liste des noms de fichiers dans le guide). Si une image est
// absente, un visuel de remplacement s'affiche automatiquement.
export const images = {
  hero: '/images/hero.jpg',
  cave: '/images/cave.jpg',
  dishes: {
    'Ndolé aux crevettes': '/images/dishes/ndole.jpg',
    'Poulet DG': '/images/dishes/poulet-dg.jpg',
    'Poisson braisé et bâton de manioc': '/images/dishes/poisson-braise.jpg',
    'Puff-puff': '/images/dishes/puff-puff.jpg',
  } as Record<string, string>,
  categories: {
    entrees: '/images/categories/entrees.jpg',
    plats: '/images/categories/plats.jpg',
    afrique: '/images/categories/afrique.jpg',
    grillades: '/images/categories/grillades.jpg',
    poissons: '/images/categories/poissons.jpg',
    desserts: '/images/categories/desserts.jpg',
    boissons: '/images/categories/boissons.jpg',
  } as Record<string, string>,
}