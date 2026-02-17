# 🛡️ Soutenance de Stage - GANIL 2026

> **Sujet :** Modernisation de la télémaintenance sécurisée (migration VNC vers MeshCentral)  
> **Auteur :** Romain QUONIAM (Service G2I)

## 📋 Présentation

Ce dépôt contient une soutenance au format **scrollytelling web** :

- progression slide par slide,
- transitions visuelles immersives,
- barre de progression + compteur,
- navigation rapide via **fil d’Ariane**.

L’application est volontairement simple : un seul fichier principal (`index.html`) et des assets d’images dans `public/diapo/`.

## 🧱 Stack réelle du projet

- **Structure/UI :** HTML5 + CSS natif (sans framework)
- **Logique :** JavaScript vanilla
- **Serveur local :** `serve` (Node.js) ou serveur Python

## 🧭 Fil d’Ariane (Breadcrumb)

Le fil d’Ariane est affiché en bandeau horizontal compact sous la barre de progression.

- **Actif :** cyan (`#00F0FF`) + gras
- **Inactif :** gris visible (présence légère)
- **Comportement :** mise à jour automatique au changement de slide + navigation cliquable

### Mapping des sections

- **INTRO** : slide 1
- **CONTEXTE** : slides 2 à 5
- **ANALYSE** : slides 6 à 7
- **SOLUTION** : slides 8 à 9
- **RÉALISATION** : slides 10 à 12
- **QUOTIDIEN** : slide 13
- **BILAN** : slides 14 à 15

## ▶️ Lancer la présentation

### Option 1 — Node.js

```bash
npm install
npx serve .
```

### Option 2 — Python

```bash
python3 -m http.server 3000
```

Puis ouvrir dans le navigateur :

- si `serve` : URL affichée dans le terminal (souvent `http://localhost:3000`)
- si Python : `http://localhost:3000`

## 📁 Arborescence minimale

```text
index.html
public/
  diapo/
README.md
```

---
Développé sur GitHub Codespaces — 2026.
