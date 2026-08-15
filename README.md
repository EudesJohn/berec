# BEREC SARL — Site officiel

Site de présentation de **BEREC SARL** (Bénin Rent A Car), spécialiste de la
fourniture, l'installation et la maintenance d'équipements hospitaliers en
Afrique de l'Ouest.

## Structure

| Dossier | Contenu |
|---|---|
| `site-v2/` | **Application active** — React 19 + Vite + Tailwind 4 (déployée sur Vercel) |
| `site/` | Ancienne version statique HTML (archivée) |
| `design-system/` | Document du design system (MASTER.md) |

## Développement

```bash
cd site-v2
npm install
npm run dev      # serveur de dev sur http://localhost:5173
npm run build    # build de production (dist/)
npm run lint     # oxlint
```

## Déploiement

Le projet Vercel `berec-sarl` est connecté à ce dépôt
(<https://github.com/EudesJohn/berec>) : chaque push sur `main` déclenche
un déploiement automatique en production (<https://berec-sarl-cyan.vercel.app>),
avec `site-v2` comme répertoire racine du build.

Redéploiement manuel possible avec :

```bash
cd site-v2 && npx vercel --prod
```
