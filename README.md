# Algorithmes de Recherche et de Tri

Ce repository contient une série d'algorithmes que j'ai explorés et testés aujourd'hui. Il inclut des techniques de recherche et des algorithmes de tri, implémentés en JavaScript. Chaque algorithme a été conçu pour tester des scénarios spécifiques, optimiser la recherche de paires, effectuer des tris efficaces, et bien plus encore.

## Algorithmes explorés

### **Sujet 1 : Recherche de Paires avec une Somme Spécifique (findK)**

**But :**  
Trouver si deux éléments dans un tableau donnent une somme égale à une valeur `k`.

**Problématique :**  
On vous donne une liste de nombres entiers relatifs et un nombre `k`. Il s'agit de créer une méthode retournant un booléen qui indique si deux nombres de cette liste ont pour somme le nombre `k`.

**Exemples :**

- Si on donne la liste `[10, 15, 3, 7]` et `k = 17`, la fonction doit retourner `true` car `10 + 7 = 17`.
- Si on donne la liste `[1, 8, 10, 21]` et `k = 19`, la fonction doit retourner `false` car il n'y a pas deux nombres ayant 19 comme somme.

**Algorithme :**  
Utilisation d'un `Set` pour enregistrer les éléments déjà vus et vérifier si la complémentaire de l'élément actuel existe dans le `Set`. Si oui, l'algorithme retourne `true`, sinon il continue.

**Complexité :**  
O(n), un seul passage sur le tableau avec des opérations en temps constant pour chaque élément.

---

### **Sujet 2 : Immeubles avec Vue sur le Soleil Couchant (sortByHigh)**

**But :**  
Trouver combien de bâtiments dans une rue ont au moins un appartement avec une vue sur le soleil couchant (à l'ouest). Chaque immeuble est représenté par sa hauteur en étages dans une liste.

**Problématique :**  
Avec une liste contenant la hauteur (en étages) des immeubles d’une rue, d’est en ouest, un agent immobilier voudrait déterminer combien de bâtiments ont au moins un appartement avec une vue sur le soleil couchant.

**Exemples :**

- Avec la liste `[3, 7, 8, 3, 6, 1]`, la fonction devrait retourner `3`, puisque les immeubles de hauteur `8`, `6`, et `1` ont tous une vue à l’ouest.
- Avec la liste `[1, 4, 5, 8]`, la fonction devrait retourner `1`, car seul l’immeuble de hauteur `8` a une vue.

**Algorithme :**  
Parcours du tableau de droite à gauche pour déterminer si un immeuble a une vue sur le coucher du soleil. Utilisation d'un `maxHigh` pour garder une trace de la hauteur maximale rencontrée jusqu'à ce point.

**Complexité :**  
O(n), un seul passage sur le tableau.

---

## Objectifs et Tests

Aujourd'hui, j'ai testé plusieurs algorithmes dans le but de :

- **Optimiser la recherche de paires** dans un tableau de manière efficace, avec une complexité linéaire.
- **Comprendre comment implémenter un algorithme de tri** pour déterminer les bâtiments avec vue sur le coucher du soleil en utilisant une méthode simple et rapide.

### **Tests réalisés :**

- **Sujet 1 :**  
  J'ai testé l'algorithme `findK` avec différents tableaux et valeurs de `k` pour vérifier la précision de la détection de paires qui s'ajoutent à une somme donnée.
  
- **Sujet 2 :**  
  J'ai testé le tri des immeubles pour déterminer si l'algorithme identifiait correctement ceux ayant une vue sur le coucher de soleil.

---

## Installation

Pour tester les algorithmes, suivez ces étapes :

1. Clonez le repository sur votre machine locale :

   ```bash
   git clone https://github.com/ton-utilisateur/ton-repository.git
