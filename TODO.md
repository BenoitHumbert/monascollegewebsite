# TODO - MonAS Collège Website

Liste des tâches à effectuer pour finaliser le site MonAS Collège.

## 🔴 Priorité HAUTE - Identifiants et services

### Google Analytics
- [x] Créer un nouveau compte Google Analytics pour monascollege.fr
- [x] Obtenir le nouvel ID de suivi (format : G-XXXXXXXXXX)
- [x] Remplacer l'ID dans `hugo.toml` ligne 12 → `G-G5Y5M1HHHG`

### Email de contact
- [x] Créer une adresse email dédiée → `monascollege@bhdev.org`
- [x] Remplacer dans `hugo.toml` ligne 29 → `monascollege@bhdev.org`

### Formspree (formulaire de contact)
- [ ] Créer un nouveau formulaire Formspree pour le site collège
- [ ] Obtenir la nouvelle URL Formspree (format : https://formspree.io/f/XXXXXXXX)
- [ ] Remplacer l'URL dans `hugo.toml` ligne 32
- [ ] Tester le formulaire de contact après déploiement

### Domaine et DNS
- [ ] Acheter/configurer le domaine monascollege.fr
- [ ] Configurer les enregistrements DNS (A ou CNAME)
- [ ] Activer le SSL/HTTPS
- [x] Configurer la redirection www → non-www dans `static/_redirects`

### Google Search Console
- [ ] Créer une propriété dans Google Search Console pour monascollege.fr
- [ ] Générer un nouveau fichier de vérification HTML
- [ ] Remplacer `static/googlef05589b024c922fb.html` par le nouveau fichier
- [ ] Soumettre le sitemap.xml à Google Search Console

## 🟠 Priorité MOYENNE - Assets graphiques

### Logos et favicons
- [ ] Créer le logo "MonAS Collège" (version large)
- [ ] Remplacer `static/img/icon_lyc1_large.png` par le nouveau logo
- [ ] Créer le logo "MonAS Collège" (version petite)
- [ ] Remplacer `static/img/icon_lyc_small.png` par le nouveau logo petit
- [ ] Créer un favicon.ico spécifique au collège
- [ ] Remplacer `static/img/favicon.ico`
- [ ] Créer une image de partage social (Open Graph)
- [ ] Remplacer `static/img/sharing-default.png`

### Screenshots de l'application
- [ ] Prendre des screenshots de l'application mobile collège
- [ ] Remplacer `static/img/Accueil2.png` (écran d'accueil)
- [ ] Remplacer `static/img/activite3.png` (écran activités)
- [ ] Remplacer `static/img/backoffice3.png` (interface admin)
- [ ] Remplacer `static/img/calendprof3.png` (calendrier prof)
- [ ] Remplacer `static/img/calendrier3.png` (calendrier)
- [ ] Remplacer `static/img/homescreen3.png` (home screen)
- [ ] Vérifier que toutes les images sont optimisées (compression, taille)

### Autres images
- [ ] Revoir `static/img/icon.png`, `icon2.png`, `icon3.png`, `iconsmall.png`
- [ ] Supprimer les images inutilisées

## 🟡 Priorité MOYENNE - Configuration des liens externes

### Application mobile
- [ ] Publier l'application MonAS Collège sur Google Play Store
- [ ] Obtenir le lien Google Play (format : https://play.google.com/store/apps/details?id=...)
- [ ] Remplacer le lien Android dans `hugo.toml` ligne 88
- [ ] Publier l'application MonAS Collège sur Apple App Store
- [ ] Obtenir le lien App Store (format : https://apps.apple.com/...)
- [ ] Remplacer le lien iOS dans `hugo.toml` ligne 88

### Interface web d'administration
- [x] Déployer l'interface web MonAS Collège Office
- [x] Configurer le domaine → `monascollege.bhdev.org`
- [x] Remplacer l'URL dans `hugo.toml` ligne 68 → `https://monascollege.bhdev.org`
- [x] Remplacer l'URL dans `hugo.toml` ligne 74 → `https://monascollege.bhdev.org/#registrations`

## 🟢 Contenu - Adaptation spécifique collège

### Vérification du contenu
- [ ] Relire `content/tarifs.md` et adapter si nécessaire pour le public collège
- [ ] Vérifier que tous les textes sont adaptés au contexte "collège" (vs "lycée")
- [ ] Vérifier les fichiers dans `data/carousel/` (descriptions, pertinence)
- [ ] Vérifier les fichiers dans `data/features/` (descriptions adaptées)
- [ ] Vérifier les fichiers dans `data/testimonials/` (FAQ adaptée au collège)

### Nom du fichier cat_lycee.yaml
- [x] Renommer `data/features/cat_lycee.yaml` en `cat_college.yaml` ✓
- [x] Vérifier le contenu de ce fichier

### Texte de présentation
- [ ] Revoir le texte dans `hugo.toml` ligne 35 (about_us)
- [ ] Revoir le texte dans `hugo.toml` lignes 108-113 (testimonials subtitle)
- [ ] Personnaliser si besoin pour différencier collège/lycée

## 🔵 Optimisations techniques

### SEO
- [ ] Vérifier et optimiser les balises meta (title, description)
- [ ] Vérifier les mots-clés dans `hugo.toml` ligne 23
- [x] Créer un sitemap.xml (Hugo le génère automatiquement)
- [x] Corriger `robots.txt` avec la bonne URL du sitemap (monascollege.fr)
- [ ] Ajouter des balises Open Graph pour le partage social
- [ ] Ajouter des données structurées (Schema.org) si pertinent

### Performance
- [ ] Optimiser la taille des images (compression WebP si possible)
- [ ] Activer la minification CSS/JS dans Hugo
- [ ] Vérifier le score Lighthouse (Performance, Accessibility, SEO)
- [ ] Configurer la mise en cache des assets statiques
- [ ] Activer la compression gzip/brotli sur le serveur

### Accessibilité
- [ ] Vérifier que toutes les images ont des attributs alt
- [ ] Tester la navigation au clavier
- [ ] Vérifier le contraste des couleurs (thème bleu)
- [ ] Tester avec un lecteur d'écran
- [ ] Vérifier la sémantique HTML
- [ ] Passer le test WAVE (Web Accessibility Evaluation Tool)

### Responsive design
- [ ] Tester sur mobile (iOS et Android)
- [ ] Tester sur tablette
- [ ] Tester sur différents navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Vérifier que le carousel est bien responsive
- [ ] Vérifier que la grille de features s'adapte bien

## ✅ Tests avant mise en production

### Tests fonctionnels
- [ ] Tester la navigation dans tous les menus
- [ ] Tester le formulaire de contact (envoi et réception)
- [ ] Vérifier tous les liens externes (apps, interface web)
- [ ] Vérifier que Google Analytics track bien les pages
- [ ] Tester le carousel (navigation, autoplay)
- [ ] Vérifier l'affichage de toutes les fonctionnalités

### Tests de compatibilité
- [ ] Chrome (desktop et mobile)
- [ ] Firefox (desktop et mobile)
- [ ] Safari (desktop et mobile)
- [ ] Edge
- [ ] Tester sur iOS 15+
- [ ] Tester sur Android 10+

### Vérifications de sécurité
- [ ] Vérifier que le certificat SSL est actif
- [ ] Vérifier les en-têtes de sécurité HTTP
- [ ] Vérifier qu'il n'y a pas de liens http:// non sécurisés
- [ ] Vérifier que Formspree a une protection anti-spam

## 🚀 Déploiement

### Préparation
- [ ] Créer un compte sur la plateforme d'hébergement (Netlify/Vercel/autre)
- [ ] Connecter le dépôt Git au service d'hébergement
- [ ] Configurer les variables d'environnement si nécessaire
- [ ] Configurer la commande de build : `hugo`
- [ ] Configurer le dossier de publication : `public`

### Déploiement initial
- [ ] Faire un premier déploiement en préproduction
- [ ] Tester tout le site en préproduction
- [ ] Corriger les éventuels problèmes
- [ ] Déployer en production
- [ ] Vérifier que tout fonctionne en production

### Post-déploiement
- [ ] Vérifier que le domaine monascollege.fr est accessible
- [ ] Vérifier la redirection www
- [ ] Vérifier le certificat SSL
- [ ] Tester le formulaire de contact en production
- [ ] Vérifier que Google Analytics reçoit des données
- [ ] Soumettre le sitemap à Google Search Console

## 📊 Monitoring et maintenance

### Mise en place du monitoring
- [ ] Configurer des alertes Google Analytics (baisse de trafic, etc.)
- [ ] Configurer des alertes d'uptime (ex: UptimeRobot)
- [ ] Configurer des alertes Google Search Console (erreurs d'indexation)
- [ ] Mettre en place un suivi des formulaires de contact (nb de soumissions)

### Maintenance régulière
- [ ] Planifier des audits Lighthouse mensuels
- [ ] Planifier des revues de contenu trimestrielles
- [ ] Planifier des mises à jour du thème Hugo semestrielles
- [ ] Planifier des mises à jour de Hugo
- [ ] Vérifier régulièrement les liens cassés

## 📝 Documentation

### Documentation interne
- [x] README.md créé et complet
- [x] TODO.md créé et complet
- [ ] Créer un guide de contribution si plusieurs personnes travaillent sur le projet
- [ ] Documenter le processus de déploiement

### Documentation utilisateur
- [ ] Créer une documentation pour mettre à jour le contenu (pour non-développeurs)
- [ ] Créer des guides pour modifier le carousel, les features, etc.

## 🎨 Améliorations futures (optionnel)

### Fonctionnalités
- [ ] Ajouter une section blog pour publier des actualités
- [ ] Ajouter une section témoignages réels d'utilisateurs
- [ ] Ajouter une section FAQ plus détaillée
- [ ] Ajouter une page "À propos" dédiée
- [ ] Ajouter des vidéos de démonstration de l'application
- [ ] Intégrer un chat en direct (ex: Crisp, Intercom)

### Marketing
- [ ] Optimiser pour les conversions (A/B testing)
- [ ] Ajouter des call-to-action plus visibles
- [ ] Créer des landing pages pour des campagnes spécifiques
- [ ] Intégrer avec un CRM (ex: HubSpot, Mailchimp)
- [ ] Mettre en place du retargeting (Facebook Pixel, Google Ads)

### Technique
- [ ] Migrer vers Hugo Extended pour utiliser SASS
- [ ] Implémenter un CDN (Cloudflare, etc.)
- [ ] Ajouter le support PWA (Progressive Web App)
- [ ] Internationalisation (si besoin d'autres langues)

---

## 📌 Notes

- Les items marqués avec `# TODO:` dans `hugo.toml` sont les plus critiques à traiter avant le déploiement
- Certaines images conservent "lyc" dans leur nom - elles seront remplacées donc pas besoin de renommer les fichiers
- Le thème hugo-universal-theme est déjà configuré et fonctionnel, pas de modifications nécessaires

**Date de création de ce TODO** : 2025-11-20
**Dernière mise à jour** : 2026-01-05
