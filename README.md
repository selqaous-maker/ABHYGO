# ABHYGO

Site vitrine bilingue français / arabe pour les produits d’hygiène professionnelle et les équipements de protection individuelle.

## Développement

Node.js 22.12+ ou 24 est recommandé.

```sh
npm ci
npm run dev
```

Le site est entièrement côté client. Aucune clé Gemini ni variable secrète n’est nécessaire.

## Vérification

```sh
npm run lint
npm test
npm run build
npm run preview
```

Les tests vérifient la couverture des dictionnaires, les 24 fiches produits, la conservation des contenus français, la traduction de la sélection et des messages WhatsApp / email, les pluriels arabes et la recherche avec accents ou signes diacritiques.

## Langues et contenu

- Français par défaut ; préférence conservée dans le navigateur.
- `?lang=ar` et `?lang=fr` permettent de partager une langue précise.
- Le changement de langue conserve la page, le panier et les données saisies.
- Dictionnaires typés : `src/i18n/fr.ts`, `src/i18n/ar.ts`, contrat commun dans `src/i18n/types.ts`.
- Pour ajouter un produit, renseigner son identifiant dans les deux dictionnaires en plus du catalogue concerné.
- L’arabe utilise une mise en page RTL et IBM Plex Sans Arabic. Les logos, photos, références, téléphones et adresses email gardent leur orientation.

## Demandes de devis

Le panier conserve les identifiants des produits et les saisies de l’utilisateur ; les noms affichés et les messages préparés suivent la langue courante. La validation prépare le devis, puis le visiteur ouvre WhatsApp ou son application email et confirme l’envoi. Le site n’envoie aucun message automatiquement et ne traite aucun paiement.

Les produits de démonstration restent clairement identifiés. Le site ne confirme ni le stock ni les certifications des modèles présentés.

## Vercel

Configuration : Vite, commande `npm run build`, dossier de sortie `dist`. Le fichier `vercel.json` permet d’ouvrir et de recharger directement les cinq pages, avec leurs paramètres de langue. Le projet GitHub associé peut publier automatiquement la branche de production après un push.
