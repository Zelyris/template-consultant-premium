# Site Factory — Modèle maître neutre

Ce repository est la fondation technique de la Site Factory. Il ne représente aucune entreprise et ne doit jamais être transformé directement en site client.

## Règle principale

Avant toute personnalisation, utilisez **Use this template** sur GitHub pour créer un nouveau repository. Le modèle maître doit toujours rester neutre.

## Technologies

- Next.js 16 avec App Router
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Zones de personnalisation

- `src/config/site.ts` : identité, coordonnées, navigation et thème actif.
- `src/content/content.ts` : textes et contenus fréquemment modifiés.
- `src/styles/themes.css` : couleurs et variables visuelles des thèmes.
- `src/components` : sections et briques réutilisables.

## Procédure pour un nouveau template

1. Créer un repository depuis ce modèle.
2. Cloner le nouveau repository sur l’ordinateur.
3. Ouvrir son dossier dans une nouvelle tâche Codex.
4. Construire et vérifier le template.
5. Commit et push avec GitHub Desktop.
6. Importer le repository dans Vercel.

## Vérifications

```bash
pnpm lint
pnpm build
```

Le serveur local se lance avec `pnpm dev` et s’affiche sur `http://localhost:3000`.
