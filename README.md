# 🛡️ Soutenance de Stage - GANIL 2026

> **Sujet :** Modernisation de la télémaintenance sécurisée (Migration VNC vers MeshCentral).
> **Auteur :** Romain QUONIAM (Service G2I)

## 📋 À propos du projet

Ce dépôt contient le code source de ma soutenance orale.
Plutôt qu'un diaporama statique (PowerPoint), j'ai développé une **expérience web interactive** (Scrollytelling).

### 🚀 Pourquoi ce choix technique ?

Ce format reflète les compétences acquises durant le stage et la nature du projet **MeshCentral** :

1. **Web-First :** Tout comme MeshCentral (Node.js), cette présentation vit dans le navigateur.
2. **Fluidité :** Le format "Scroll" permet de raconter l'histoire de la migration sans interruption.
3. **Légèreté :** Aucune installation lourde requise, technologies standards (HTML5 / TailwindCSS).

## 🛠️ Stack Technique

* **Structure :** HTML5 Sémantique
* **Design :** [TailwindCSS](https://tailwindcss.com/) (CDN)
* **Animations :** [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)
* **Diagrammes :** [Mermaid.js](https://mermaid.js.org/) (Architecture as Code)

## 📦 Comment lancer la présentation ?

Le projet ne nécessite aucune compilation complexe.

1. **Cloner le dépôt :**

   ```bash
   git clone [https://github.com/ton-pseudo/ganil-meshcentral-defense.git](https://github.com/ton-pseudo/ganil-meshcentral-defense.git)
   ```

2. **Lancer un serveur local :**

   ```bash
   # Avec Python
   python3 -m http.server 3000

   # OU avec Node.js (npx)
   npx serve
   ```

3. **Ouvrir le navigateur :** `http://localhost:3000`

---
Développé sur GitHub Codespaces - 2026.
