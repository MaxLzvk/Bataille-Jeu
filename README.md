# Documentation pour le jeu des cartes 
 
## Planning

- faire la partie HTML = environ 20 minutes
- faire la partie CSS = environ 25 minutes
- coder le fait de jouer des cartes = environ 20 minutes
- coder la logique du jeu = environ 45 minutes

## Regles

1. Les joueurs retournent "simultanément" leur première carte

2. le plus haut rang remporte le pli.

3. En cas d'égalité, une "bataille" a lieu 
    - posez une carte cachée
    
    - puis poser une visible pour déterminer le vainqueur de toutes les cartes. 

## Pseudo-Code

Au lancement:
```
    choisir au hasard qui commence (prenons par exemple Joueur 1)

    le bouton "Jouer" du Joueur 2 devient gris

    on affiche "Tour de: Joueur 1"  
```
---

Quand un joueur appuie sur "Jouer" (toujours avec Joueur 1):
```
    on détermine au hasard une carte qui va être joué de la main du joueur 1

    on affiche la carte tiré au hasard de la main du joueur 1 
    
    le bouton "Jouer" est désactivé

    on active le bouton "Jouer" pour le joueur 2
```
---

Quand les deux ont tiré une carte: 
```
    Regarde selon le chiffre du lien d'image des cartes lequel est plus grande

    Supprimer la carte le plus petit de la liste de celle qui a joué

    Ajouter dans la liste du gangnant la carte le plus petit

    Rafraichir le nombre de cartes totales des joueurs

    Rafraichire les zones pour contenir les images de cartes

    Afficher le joueur qui à gagné
```

Quand les deux ont tiré une carte ET que les deux cartes joués sont les mêmes: 
```
    les deux joueurs appuie sur "Jouer" pour avoir des cartes retournés

    puis les deux tire des cartes

    Regarde selon le chiffre du lien d'image des cartes lequel est plus grande

    Supprimer la carte le plus petit de la liste de celle qui a joué

    Ajouter dans la liste du gangnant la carte le plus petit

    Rafraichir le nombre de cartes totales des joueurs

    Rafraichire les zones pour contenir les images de cartes

    Afficher le joueur qui à gagné
```