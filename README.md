# MonAS Collège - Site Web

Site vitrine pour l'application **MonAS Collège**, une solution mobile de gestion d'Association Sportive (AS) pour les collèges français.

## 🎯 Objectif du projet

Ce site web est la vitrine marketing de l'application mobile MonAS Collège. Il présente les fonctionnalités de l'application, propose des tarifs et permet aux établissements scolaires de découvrir et s'abonner au service.

**URL de production** : https://monascollege.fr/

## 🏗️ Structure du projet

```
monascollegewebsite/
├── hugo.toml                 # Configuration principale du site Hugo
├── README.md                 # Ce fichier
├── TODO.md                   # Liste des tâches à effectuer
│
├── archetypes/               # Templates pour la création de contenu
│   └── default.md
│
├── content/                  # Contenu des pages du site
│   ├── contact.md           # Page de contact
│   └── tarifs.md            # Page des tarifs
│
├── data/                     # Données structurées pour le contenu dynamique
│   ├── carousel/            # Slides du carousel de la page d'accueil (6 items)
│   │   ├── intro.yaml
│   │   ├── presentation.yaml
│   │   ├── calendrier.yaml
│   │   ├── activite.yaml
│   │   ├── calendprof.yaml
│   │   └── backoffice.yaml
│   │
│   ├── features/            # Fonctionnalités affichées en grille (17 items)
│   │   ├── calendrier.yaml
│   │   ├── activites.yaml
│   │   ├── appel.yaml
│   │   ├── profil.yaml
│   │   ├── groupes.yaml
│   │   ├── suivi.yaml
│   │   ├── communication.yaml
│   │   ├── archives.yaml
│   │   ├── notification.yaml
│   │   ├── code.yaml
│   │   ├── inscrits.yaml
│   │   ├── cat_college.yaml
│   │   ├── connexion.yaml
│   │   ├── next.yaml
│   │   ├── results.yaml
│   │   ├── team.yaml
│   │   ├── presentation.yaml
│   │   ├── information.yaml
│   │   └── reactivite.yaml
│   │
│   └── testimonials/        # Section FAQ/Témoignages (4 items)
│       ├── 1.yaml
│       ├── 2.yaml
│       ├── 3.yaml
│       └── 4.yaml
│
├── static/                  # Fichiers statiques (images, CSS, etc.)
│   ├── img/                # Images et logos
│   │   ├── favicon.ico
│   │   ├── icon_lyc1_large.png      # TODO: À remplacer
│   │   ├── icon_lyc_small.png       # TODO: À remplacer
│   │   ├── Accueil2.png
│   │   ├── activite3.png
│   │   ├── backoffice3.png
│   │   ├── calendprof3.png
│   │   ├── calendrier3.png
│   │   ├── homescreen3.png
│   │   └── sharing-default.png
│   │
│   ├── css/
│   │   └── custom.css      # Styles CSS personnalisés
│   │
│   ├── robots.txt          # Directives pour les moteurs de recherche
│   ├── _redirects          # Redirections (www → non-www)
│   └── googlef05589b024c922fb.html  # Vérification Google Search Console (TODO: à remplacer)
│
└── themes/                  # Thème Hugo (hugo-universal-theme)
    └── hugo-universal-theme/
```

## 🛠️ Technologies utilisées

### Framework et thème
- **Hugo** : Générateur de site statique (version >= 0.15)
- **hugo-universal-theme** : Thème Bootstrap responsive et moderne
  - Licence : MIT
  - Original : bootstrapious
  - Port Hugo : devcows

### Technologies front-end
- **Bootstrap** : Framework CSS (intégré au thème)
- **Owl Carousel** : Carousel d'images
- **jQuery** : Bibliothèque JavaScript (dépendance des plugins)
- **Font Awesome** : Icônes

### Services externes intégrés

1. **Google Analytics** : Suivi des statistiques
   - ID : `G-G5Y5M1HHHG`

2. **Formspree** : Formulaire de contact
   - URL actuelle : `https://formspree.io/f/mwpbelgk` (TODO: à créer)

3. **Google Search Console** : Vérification et SEO
   - Fichier de vérification à remplacer

4. **Liens vers applications mobiles**
   - Google Play Store (TODO: à changer)
   - Apple App Store (TODO: à changer)

5. **Interface web d'administration**
   - URL : `monascollege.bhdev.org`

## 📋 Configuration (hugo.toml)

### Paramètres principaux

```toml
baseURL = "https://monascollege.fr/"
title = 'MonAS Collège | Gérez votre AS en toute sérénité'
theme = "hugo-universal-theme"
defaultContentLanguage = "fr"
```

### Personnalisation visuelle
- **Thème de couleur** : Bleu
- **Logos** :
  - Large : `img/icon_lyc1_large.png`
  - Petit : `img/icon_lyc_small.png`

### Menu de navigation
1. Accueil (/)
2. Tarifs (/tarifs)
3. Contact (/contact)
4. Se connecter (lien externe)
5. Créer un compte (lien externe)

### Fonctionnalités activées
- ✅ Carousel de la page d'accueil (autoplay, 2s par slide)
- ✅ Grille de fonctionnalités (3 colonnes)
- ✅ Section témoignages/FAQ
- ✅ Barre supérieure avec liens vers les apps mobiles
- ❌ Google Maps (désactivé)
- ❌ reCAPTCHA (désactivé)
- ❌ Blog (non utilisé)

## 📝 Système de contenu

### Pages markdown (content/)

Les pages sont créées au format Markdown avec front matter YAML :

```markdown
---
title: "Titre de la page"
date: 2025-05-30
draft: false
tags: ["tag1", "tag2"]
---

# Contenu de la page
```

### Fichiers de données (data/)

Le site utilise massivement les fichiers de données YAML pour un contenu modulaire :

**Structure d'un élément de carousel** :
```yaml
weight: 1
title: "Titre du slide"
description: "Description"
image: "img/image.png"
```

**Structure d'une fonctionnalité** :
```yaml
weight: 1
name: "Nom de la fonctionnalité"
icon: "fa-solid fa-icon"
description: "Description"
```

**Structure d'un témoignage/FAQ** :
```yaml
text: "Contenu de la question/réponse"
name: "TITRE DE LA SECTION"
position: "Sous-titre"
avatar: "img/testimonials/avatar.jpg"
```

### Modification du contenu

Pour modifier le contenu du site sans toucher au code :

1. **Modifier le carousel** : Éditer les fichiers dans `data/carousel/`
2. **Modifier les fonctionnalités** : Éditer les fichiers dans `data/features/`
3. **Modifier la FAQ** : Éditer les fichiers dans `data/testimonials/`
4. **Modifier les pages** : Éditer les fichiers dans `content/`

## 🚀 Développement local

### Prérequis
- Hugo installé (version >= 0.15)
- Git (pour le contrôle de version)

### Installation

```bash
# Cloner le dépôt
cd monascollegewebsite

# Le thème est déjà inclus dans le dossier themes/

# Lancer le serveur de développement
hugo server

# Ou avec les brouillons et rafraîchissement auto
hugo server -D --watch
```

Le site sera accessible sur http://localhost:1313

### Commandes Hugo utiles

```bash
# Générer le site dans le dossier public/
hugo

# Lancer le serveur avec live reload
hugo server

# Créer une nouvelle page
hugo new content/nom-de-la-page.md

# Vérifier la configuration
hugo config

# Nettoyer le dossier public/
rm -rf public/
```

## 📦 Build et déploiement

### Build de production

```bash
# Générer le site statique
hugo

# Le site généré se trouve dans le dossier public/
```

### Déploiement

Le site peut être déployé sur n'importe quel hébergeur de sites statiques :
- **Netlify** (recommandé)
- **Vercel**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **OVH, Ionos, etc.**

#### Configuration Netlify (exemple)

Le fichier `static/_redirects` contient déjà la redirection www → non-www :
```
https://www.monascollege.fr/* https://monascollege.fr/:splat 301!
```

**Build settings** :
- Build command : `hugo`
- Publish directory : `public`
- Hugo version : 0.15 ou supérieur

### DNS et domaine

Configurer le domaine `monascollege.fr` pour pointer vers l'hébergement :
- Type A ou CNAME selon l'hébergeur
- Activer le SSL/HTTPS
- Configurer les redirections www si nécessaire

## 🔧 Maintenance et mises à jour

### Mettre à jour le thème

```bash
cd themes/hugo-universal-theme
git pull origin master
```

### Mettre à jour Hugo

```bash
# Sur macOS avec Homebrew
brew update
brew upgrade hugo

# Sur Linux
sudo snap refresh hugo
```

### Vérifier la santé du site

- **Google Analytics** : Vérifier le trafic
- **Google Search Console** : Vérifier l'indexation et les erreurs
- **Lighthouse** : Tester les performances
- **Wave** : Tester l'accessibilité

## 📚 Ressources

- [Documentation Hugo](https://gohugo.io/documentation/)
- [Hugo Universal Theme](https://github.com/devcows/hugo-universal-theme)
- [Bootstrap Documentation](https://getbootstrap.com/docs/)
- [Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/)

## 📧 Contact

- **Email** : monascollege@bhdev.org
- **Développeur** : BHDev
- **Localisation** : 25580 Les Premiers Sapins, France

## 📄 Licence

Copyright (c) 2025, BHDev - Tous droits réservés.

Le thème hugo-universal-theme est sous licence MIT.
