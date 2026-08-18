# Consultant Premium — Camille Renaud Conseil

Template commercial fictif pour une consultante indépendante en stratégie et transformation auprès de dirigeants de PME. Le design adopte une direction Minimal Premium éditoriale, sans photographie ni ressource externe soumise à licence.

> **Important :** Camille Renaud Conseil, ses coordonnées, ses références, ses cas, ses témoignages et ses résultats sont fictifs. Ils doivent tous être remplacés et vérifiés avant une utilisation réelle.

L’URL configurée utilise volontairement le domaine réservé `.example` et doit elle aussi être remplacée avant publication.

## Technologies

- Next.js 16 avec App Router
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Organisation du template

- `src/config/site.ts` : identité, coordonnées, navigation et appels à l’action.
- `src/content/content.ts` : tous les textes et contenus métier.
- `src/styles/themes.css` : palette, typographies système et variables visuelles.
- `src/components/ui` : briques d’interface réutilisables.
- `src/components/sections` : sections éditoriales assemblées sur la page d’accueil.
- `src/app/opengraph-image.tsx` : visuel social généré par Next.js.

## Formulaire de contact

Le formulaire n’utilise ni API, ni base de données, ni service tiers. Lors de la validation, il construit une URL `mailto:` et ouvre le logiciel de messagerie de l’utilisateur avec un sujet et un corps préremplis.

- aucune donnée n’est envoyée ou stockée par le site ;
- aucun message de succès n’est simulé ;
- l’utilisateur relit et envoie lui-même son e-mail ;
- aucune réservation ou prise de rendez-vous automatique n’est créée.

L’adresse destinataire et le sujet sont configurés dans `src/config/site.ts`.

## Développement

```bash
pnpm install
pnpm dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

## Contrôles qualité

```bash
pnpm lint
pnpm build
```

Le template prévoit une navigation clavier, des focus visibles, un contraste renforcé, des sections sémantiques, une FAQ native accessible et la désactivation des animations via `prefers-reduced-motion`.

## Avant publication

1. Remplacer tous les contenus fictifs, y compris les mentions légales et les statistiques.
2. Vérifier l’adresse e-mail, le téléphone et les modalités de contact.
3. Renseigner les informations juridiques et l’hébergeur.
4. Adapter les métadonnées à l’activité et au domaine réels.
5. Tester le lien `mailto:` sur les environnements cibles.
6. Rejouer `pnpm lint` et `pnpm build`.
