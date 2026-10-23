# SoliBox, site vitrine

Site de présentation de **SoliBox**, la startup qui permet aux foyers équipés de panneaux solaires de vendre leur surplus d'énergie à leurs voisins, grâce à un boîtier connecté et une application mobile.

**En ligne : [soliboxgn.com](https://www.soliboxgn.com)**

SoliBox a remporté le 1er prix national POESAM 2026, le 1er prix du SADEN Fulbright Innovation Challenge 2026 et le 1er prix du Salon des Étudiants Entrepreneurs 2026. La startup est incubée à Orange Fab Guinée.

## Ce que contient le site

Le site suit le parcours d'un visiteur, du problème jusqu'au contact :

1. **Le problème** : des voisins sans accès fiable à l'électricité, à côté de foyers qui produisent plus qu'ils ne consomment.
2. **La solution**, avec un schéma animé du flux d'énergie et de paiement entre le producteur et son voisin.
3. **Le produit**, les avantages, puis un **simulateur de revenus** : on règle la puissance des panneaux, l'ensoleillement et la part d'énergie partagée, et le site estime ce que le foyer peut gagner.
4. L'impact, l'équipe, la feuille de route, les partenaires, une FAQ et un formulaire de contact.

## Stack

- **React 18**, **TypeScript** et **Vite**
- **Tailwind CSS**, avec un thème clair et un thème sombre
- **lucide-react** pour les icônes
- Déploiement sur **Vercel**

## Choix techniques

- **Un seul domaine.** Le site répond sur `soliboxgn.com`. L'adresse Vercel par défaut redirige vers le domaine (redirection permanente dans `vercel.json`), pour que Google ne voie qu'une seule version du site.
- **Référencement.** Balises canonical, Open Graph et Twitter, `sitemap.xml` et `robots.txt`.
- **Schémas dessinés en SVG.** Le schéma du flux d'énergie utilise `currentColor` : il suit automatiquement le thème clair ou sombre.
- **Apparitions au défilement** avec `IntersectionObserver`, sans bibliothèque d'animation.

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173.

| Commande | Rôle |
|---|---|
| `npm run build` | Construit le site dans `dist/` |
| `npm run preview` | Sert la version construite en local |
| `npm run lint` | Vérifie le code avec ESLint |
| `npm run typecheck` | Vérifie les types TypeScript |

## Structure

```
src/
  components/   une section du site par fichier (Hero, Problem, Solution, Earnings…)
  contexts/     thème clair ou sombre
  utils/        défilement vers les sections
public/         images, polices, image de partage, sitemap
```

## Auteur

Développé par **[Foula Fofana](https://foula-portfolio.vercel.app)**, cofondateur et CEO de SoliBox.
