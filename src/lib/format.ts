/** 6500 -> "6 500 FCFA" */
export const formatPrice = (n: number) => n.toLocaleString('fr-FR') + ' FCFA'