# 🍽️ Ma Wok Nzié — Le goût de nos racines

> **Une expérience gastronomique africaine qui célèbre nos traditions, nos saveurs et l'art de partager.**

Ma Wok Nzié est un projet de plateforme web dédiée à la restauration africaine. Il met à l'honneur la richesse de la cuisine camerounaise et les spécialités culinaires d'autres pays d'Afrique, dans une expérience moderne, élégante et accessible.

Le projet associe un restaurant proposant des plats traditionnels et une cave à vins intégrée, **La Cave Goûtes de Dieu**, conçue pour suggérer des accords entre les mets et les vins.

L'objectif est de créer une plateforme complète permettant aux clients de découvrir la carte, d'explorer les spécialités par catégorie et par pays, de découvrir les vins et, à terme, de réserver une table et de gérer leurs commandes en ligne.

---

## 📑 Sommaire

- [Présentation du projet](#-présentation-du-projet)
- [Vision et objectifs](#-vision-et-objectifs)
- [Univers gastronomique](#-univers-gastronomique)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies utilisées](#-technologies-utilisées)
- [Architecture du projet](#-architecture-du-projet)
- [Installation](#-installation)
- [Lancement en développement](#-lancement-en-développement)
- [Configuration](#-configuration)
- [Conventions de développement](#-conventions-de-développement)
- [Feuille de route](#-feuille-de-route)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🌍 Présentation du projet

**Nom :** Ma Wok Nzié  
**Slogan :** Le goût de nos racines  
**Domaine :** Restauration, gastronomie africaine et expérience culinaire numérique  
**Marché initial :** Cameroun  
**Langue principale :** Français  
**Monnaie de référence :** Franc CFA d'Afrique centrale (XAF)  
**Type d'application :** Application web responsive  
**Frontend :** React, TypeScript et Vite

Ma Wok Nzié valorise les recettes traditionnelles, les produits locaux et la diversité gastronomique africaine à travers une interface numérique moderne.

Le projet est développé progressivement, en commençant par l'interface frontend et le catalogue des plats, avant l'intégration des services métier, du backend et de la base de données.

## 🎯 Vision et objectifs

### Notre vision

Faire de Ma Wok Nzié une référence de la découverte gastronomique africaine, en réunissant dans un même univers la cuisine traditionnelle, l'hospitalité et l'art des accords mets-vins.

### Nos objectifs

- Mettre en valeur la cuisine camerounaise et les spécialités d'autres pays africains.
- Proposer une carte claire, organisée par catégories et origines.
- Présenter chaque plat avec sa description et son prix en FCFA.
- Développer une expérience utilisateur agréable sur ordinateur, tablette et mobile.
- Faciliter les réservations et, à terme, les commandes en ligne.
- Intégrer une cave à vins proposant des millésimes et des suggestions d'accords culinaires.
- Préparer une architecture évolutive permettant l'ajout d'un backend et d'une base de données.
- Offrir une expérience cohérente, de la découverte des plats jusqu'à la réservation.

---

## 🍲 Univers gastronomique

### 1. Le restaurant Ma Wok Nzié

Le restaurant met en avant plusieurs catégories culinaires :

- **Entrées :** accras de morue, salade d'avocat aux crevettes, soupe de poisson épicée et beignets de haricots.
- **Plats camerounais :** ndolé aux crevettes, poulet DG, eru et water fufu, koki et plantain, sauce jaune et taro.
- **Saveurs d'Afrique :** thieboudienne, poulet yassa, jollof rice, poulet moambé et kédjenou de poulet.
- **Grillades :** soya de bœuf, poulet braisé et brochettes d'agneau.
- **Poissons :** poisson braisé, mbongo tchobi et attiéké au poisson.
- **Desserts :** puff-puff, plantains caramélisés, gâteau de manioc à la coco, chin-chin et sorbet au baobab et à la mangue.
- **Boissons :** bissap glacé, jus de gingembre, jus de folere et jus de baobab.

Les catégories et les plats sont définis dans le module de données du frontend et peuvent être enrichis au fil du développement.

### 2. Les pays représentés

La carte met notamment à l'honneur :

- 🇨🇲 Cameroun
- 🇸🇳 Sénégal
- 🇨🇮 Côte d'Ivoire
- 🇳🇬 Nigeria
- 🇨🇩 République démocratique du Congo
- 🇲🇱 Mali

Cette sélection constitue une première base pour développer progressivement une carte gastronomique africaine plus diversifiée.

### 3. La Cave Goûtes de Dieu 🍷

La cave est un univers complémentaire consacré à la découverte des vins et aux accords mets-vins.

Les catégories de vins prévues dans le catalogue comprennent :

- Vins blancs
- Vins rouges
- Vins rosés
- Vins effervescents
- Vins doux

Chaque fiche de vin peut présenter son nom, son millésime, sa région, ses caractéristiques, son prix et les plats auxquels il peut être associé.

L'objectif est de proposer des suggestions cohérentes pour accompagner les repas et enrichir l'expérience gastronomique.

### 4. L'expérience du dessert

Le concept initial prévoit également une attention particulière portée aux desserts, avec l'idée promotionnelle d'associer un dessert offert à certains plats.

Les conditions de cette offre devront être définies dans les règles commerciales de l'application avant sa mise en production.

---

## ✨ Fonctionnalités

### Fonctionnalités frontend

Les fonctionnalités identifiées dans l'interface actuelle comprennent :

- **Page d'accueil :** présentation du restaurant et de son identité.
- **Section principale :** mise en avant de la cuisine camerounaise et africaine.
- **Plats signatures :** présentation d'une sélection de plats.
- **Catalogue par catégories :** navigation entre les différentes catégories du menu.
- **Présentation des pays :** découverte des origines culinaires.
- **Aperçu de la cave :** présentation de quelques vins et millésimes.
- **Section de réservation :** accès aux parcours de réservation prévus.
- **Navigation entre les pages :** routage avec React Router.
- **Présentation responsive :** adaptation de l'interface aux différentes tailles d'écran.
- **Affichage des prix :** formatage des prix en FCFA.
- **Composants réutilisables :** conteneurs, images, éléments de navigation et sections de page.

### Fonctionnalités prévues

Les éléments suivants appartiennent à la feuille de route et ne sont pas considérés comme déjà opérationnels :

- Formulaire de réservation connecté au backend.
- Gestion des commandes en ligne.
- Gestion des clients et authentification.
- Panier et validation des commandes.
- Paiement en ligne via des prestataires adaptés au marché camerounais.
- Tableau de bord d'administration.
- Gestion dynamique des plats, catégories, prix et stocks.
- Gestion des réservations et de leurs statuts.
- Gestion des offres promotionnelles et desserts associés.
- Gestion du catalogue de vins et des accords mets-vins.
- Notifications et confirmations de réservation ou de commande.
- Connexion à une base de données persistante.

---

## 🛠️ Technologies utilisées

Le projet s'appuie sur une architecture frontend moderne. Les technologies sont présentées selon leur rôle et leur statut dans le développement.

### Technologies frontend

| Technologie | Rôle |
|---|---|
| React | Construction de l'interface utilisateur à partir de composants. |
| TypeScript | Typage statique, interfaces et meilleure fiabilité du code. |
| Vite | Serveur de développement et outil de compilation frontend. |
| React Router DOM | Navigation entre les pages et gestion des routes. |
| Tailwind CSS | Stylisation de l'interface avec des classes utilitaires. |
| Lucide React | Bibliothèque d'icônes pour les composants de l'interface. |
| HTML5 | Structure sémantique des pages. |
| CSS | Styles complémentaires et personnalisation visuelle. |
| JavaScript / ES Modules | Logique applicative et système de modules. |

### Outils de développement et configuration

| Technologie ou outil | Rôle |
|---|---|
| Node.js | Environnement d'exécution nécessaire aux outils JavaScript. |
| npm | Installation des dépendances et exécution des scripts du projet. |
| `@vitejs/plugin-react` | Intégration de React dans Vite. |
| Git | Gestion des versions du code source. |
| GitHub | Hébergement du dépôt Git, si le projet y est publié. |
| VS Code | Environnement de développement recommandé. |

### Bibliothèques et outils prévus

| Technologie | Utilisation envisagée |
|---|---|
| Zustand | Gestion centralisée de l'état partagé de l'application. |
| Zod | Validation et contrôle des données. |
| React Hook Form | Gestion des formulaires, si retenu. |
| Axios ou Fetch API | Communication avec le backend. |
| ESLint | Analyse statique et détection de problèmes dans le code. |
| Prettier | Formatage automatique du code. |

Ces outils complémentaires devront être confirmés dans les dépendances du projet et intégrés au besoin.

### Backend envisagé

Le backend sera développé séparément du frontend pour faciliter la maintenance et l'évolution de la plateforme.

| Technologie | Rôle envisagé |
|---|---|
| Node.js | Environnement d'exécution du backend. |
| Express.js | Création de l'API REST. |
| JavaScript | Langage envisagé pour le backend. |
| Prisma ORM | Accès typé aux données et gestion du schéma. |
| PostgreSQL | Base de données relationnelle. |
| Zod | Validation des données entrantes, selon l'architecture retenue. |

Le backend et la base de données ne sont pas considérés comme intégrés tant que les services correspondants n'ont pas été créés, configurés et testés.

### Sécurité et services futurs

Selon les besoins de la mise en production, l'application pourra intégrer :

- Une authentification sécurisée.
- Des mécanismes de contrôle d'accès par rôle.
- Une validation des données côté serveur.
- Une gestion sécurisée des secrets et variables d'environnement.
- Des protections contre les requêtes malveillantes.
- Une limitation du nombre de requêtes sur les endpoints sensibles.
- Un stockage externe pour les images et médias.
- Un prestataire de paiement compatible avec les moyens de paiement ciblés.

Ces éléments devront être choisis, configurés et vérifiés avant l'ouverture du service au public.

---

## 📁 Architecture du projet

L'organisation actuelle du frontend repose notamment sur les dossiers suivants :

```text
ma-wok-nzie/
├── public/                    # Ressources statiques publiques
├── src/
│   ├── components/
│   │   └── common/            # Composants réutilisables
│   ├── config/                # Configuration du site et des images
│   ├── data/
│   │   └── menu.ts            # Données du menu et de la cave
│   ├── layouts/
│   │   └── Navbar.tsx         # Navigation principale
│   ├── lib/                   # Fonctions utilitaires
│   ├── pages/
│   │   └── HomePage.tsx       # Page d'accueil
│   ├── App.tsx                # Point d'entrée de l'application
│   ├── main.tsx               # Montage de l'application React
│   └── index.css              # Styles globaux
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── .gitignore
└── README.md
```

Cette représentation est indicative : certains fichiers et dossiers peuvent varier selon l'état réel du dépôt.

### Principes d'organisation

- **`components/` :** composants génériques réutilisables.
- **`layouts/` :** éléments structurels partagés entre plusieurs pages.
- **`pages/` :** pages accessibles par les routes.
- **`data/` :** données locales de démonstration et catalogues initiaux.
- **`config/` :** paramètres centralisés, identité du site et ressources visuelles.
- **`lib/` :** fonctions utilitaires, formatage et helpers.
- **`App.tsx` :** composition générale des routes et des layouts.
- **`main.tsx` :** initialisation de React.

L'architecture pourra évoluer vers une organisation par modules métier lorsque le backend et les fonctionnalités avancées seront ajoutés.

---

## 🚀 Installation

### Prérequis

Installer les outils suivants :

- Node.js, de préférence une version LTS compatible avec les dépendances du projet.
- npm, généralement fourni avec Node.js.
- Git, si le projet est récupéré depuis un dépôt distant.
- Visual Studio Code ou un éditeur équivalent.

Vérifier les installations :

```bash
node -v
npm -v
git --version
```

### Récupération du projet

Si le dépôt est déjà cloné, ouvrir simplement son dossier :

```bash
cd ma-wok-nzie
```

Si le dépôt est hébergé sur GitHub, utiliser son URL réelle :

```bash
git clone <URL_DU_DEPOT>
cd ma-wok-nzie
```

### Installation des dépendances

```bash
npm install
```

Cette commande installe les dépendances définies dans `package.json`.

---

## 💻 Lancement en développement

Démarrer le serveur local :

```bash
npm run dev
```

Vite affiche ensuite une adresse locale, généralement :

```text
http://localhost:5173/
```

Ouvrir cette adresse dans un navigateur pour consulter l'application.

### Commandes utiles

```bash
npm run dev       # Démarrer le serveur de développement
npm run build     # Construire la version de production
npm run preview   # Prévisualiser la version compilée
```

Ces commandes supposent que les scripts correspondants sont présents dans `package.json`.

---

## ⚙️ Configuration

### Alias d'importation

Le projet utilise l'alias `@` pour désigner le dossier `src`.

Exemple de configuration Vite :

```ts
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

Cet alias permet d'utiliser des imports plus lisibles :

```tsx
import { categories } from '@/data/menu'
```

Au lieu de chemins relatifs plus longs.

La configuration TypeScript doit également déclarer cet alias dans le fichier de configuration approprié, notamment `tsconfig.app.json`.

### Configuration du site

Les paramètres de présentation du site peuvent être centralisés dans `src/config/site.ts`.

Les ressources visuelles peuvent être référencées dans `src/config/images.ts`, selon l'organisation actuelle du projet.

Les prix du catalogue sont exprimés en FCFA dans les données initiales. En production, les prix devront être gérés et validés côté serveur.

### Variables d'environnement

Aucune variable d'environnement spécifique n'est supposée obligatoire pour le frontend actuel.

Lorsque des services externes seront ajoutés, les variables pourront être définies dans des fichiers locaux ignorés par Git, par exemple `.env.local`.

Les secrets du backend, les clés privées et les identifiants de base de données ne doivent jamais être exposés dans le code frontend ni dans des variables `VITE_*` accessibles au navigateur.

---

## 🧭 Conventions de développement

Pour maintenir un code clair et évolutif :

1. Utiliser TypeScript pour les composants et les modèles de données.
2. Privilégier des composants courts et réutilisables.
3. Centraliser les données de démonstration dans les modules appropriés.
4. Éviter de dupliquer les règles de formatage et les composants communs.
5. Employer React Router pour la navigation.
6. Utiliser Tailwind CSS pour les styles utilitaires et limiter les styles globaux aux besoins réellement partagés.
7. Conserver les noms de fichiers et les imports cohérents.
8. Valider les données reçues par le backend avant leur utilisation.
9. Tester les parcours essentiels sur mobile et ordinateur.
10. Ne jamais versionner les fichiers de secrets, les dépendances installées ou les artefacts de compilation.

### Git et branches

Les modifications doivent être versionnées avec des commits explicites.

Exemples :

```bash
git status
git add .
git commit -m "feat: amélioration de la page d'accueil"
git push
```

Il est recommandé d'utiliser des branches dédiées aux nouvelles fonctionnalités et aux corrections, puis de fusionner les changements après vérification.

---

## 🗺️ Feuille de route

### Phase 1 — Socle frontend

- [x] Initialisation du projet React avec Vite.
- [x] Mise en place de TypeScript.
- [x] Création des premiers composants et pages.
- [x] Première structuration du catalogue de plats et de vins.
- [ ] Stabilisation de la navigation et des routes.
- [ ] Vérification complète de la configuration Tailwind CSS.
- [ ] Amélioration de l'accessibilité et du responsive design.

### Phase 2 — Expérience restaurant

- [ ] Finalisation de la page d'accueil.
- [ ] Navigation complète par catégories.
- [ ] Pages détaillées des plats.
- [ ] Pages détaillées des vins.
- [ ] Suggestions d'accords mets-vins.
- [ ] Formulaire de réservation fonctionnel.
- [ ] Mise en place des règles de l'offre promotionnelle sur les desserts.

### Phase 3 — Backend et base de données

- [ ] Création de l'API avec Node.js et Express.
- [ ] Configuration de PostgreSQL.
- [ ] Mise en place de Prisma ORM.
- [ ] Modélisation des utilisateurs, plats, catégories, vins et réservations.
- [ ] Création des endpoints REST.
- [ ] Validation des entrées et gestion des erreurs.
- [ ] Connexion du frontend à l'API.

### Phase 4 — Commandes et administration

- [ ] Gestion du panier.
- [ ] Création et suivi des commandes.
- [ ] Gestion des clients et authentification.
- [ ] Tableau de bord d'administration.
- [ ] Gestion des menus, prix, stocks et promotions.
- [ ] Gestion des réservations.
- [ ] Intégration des paiements selon les besoins métier.

### Phase 5 — Tests et mise en production

- [ ] Tests unitaires et tests d'intégration.
- [ ] Tests des parcours critiques.
- [ ] Vérifications de sécurité.
- [ ] Optimisation des performances.
- [ ] Configuration de l'hébergement frontend et backend.
- [ ] Configuration de la base de données de production.
- [ ] Mise en place d'un nom de domaine et du HTTPS.
- [ ] Journalisation, sauvegardes et suivi des erreurs.

---

## 🤝 Contribution

Les contributions peuvent porter sur :

- L'amélioration de l'interface utilisateur.
- L'accessibilité et le responsive design.
- La qualité et la maintenabilité du code.
- L'enrichissement du catalogue gastronomique.
- Les fonctionnalités de réservation et de commande.
- Les tests et la documentation.

Pour proposer une contribution :

1. Créer une branche dédiée.
2. Effectuer les modifications.
3. Vérifier le fonctionnement de l'application.
4. Décrire les changements dans un commit.
5. Soumettre une pull request si le dépôt utilise ce processus.

---

## 📄 Licence

La licence du projet reste à définir.

Aucune licence open source particulière n'est présumée applicable tant qu'elle n'a pas été choisie et ajoutée au dépôt.

---

## ❤️ Notre ambition

**Ma Wok Nzié — Le goût de nos racines.**

Un projet qui célèbre les cuisines africaines, rassemble les générations autour de la table et associe tradition culinaire, hospitalité et expérience numérique moderne.

La Cave Goûtes de Dieu complète cet univers en faisant de chaque repas une occasion de découvrir de nouvelles saveurs et de nouveaux accords.

*Du Cameroun aux autres terroirs d'Afrique, chaque plat raconte une histoire.*

