# Nullish coalescing operator '??'


## Quelle est la valeur de retour ce code ?

```js
let banane;

alert(banane ?? "pomme"); : pomme 

```

## Quelle est la valeur de retour ce code ?

```js
let banane = "Trop bon";

alert(banane ?? "pomme"); : trop bon 

```

# Comparison with "||"

```js
let pomme = null;
let poire = "Trop bon !";
let banane = null;


alert(pomme || poire || banane || "pas bon."); : retourne trop bon car poire est la première valeur définit
```


## Après avoir effectué les exercices précédent pouvez vous dire:

### Ce que retourne, par définition, l'opérateur "||" ?
il retourne la première valeur true
### Ce que retourne, par définition, l'opérateur "??" ?
il retourne la première valeur définit

# Precedence

### Des deux opérateurs du dessus, lequelle à la plus grande précédence (prioritée) ?

?? à une priorité de 5 et || une priorité de 6 donc OR à la plus haute priorité.

### Faut il:
 #### utiliser ?? avec tous les autres opérateurs ? 
 on peut mais il faut utiliser des paranthéses pour le placer avec && et ||
 #### ne jamais utiliser ??? avec tous les autres opérateurs ?
 non, avec les mèmes régles que précédement
 #### quelques fois utiliser ?? avec les autres opérateurs ?
 idem

### Que retournent les opérations suivantes (se référer au opérateurs logiques) ?

```js
let fruit = "poire" && "pomme" ?? "banane" // syntax error (Javascript l'interdit)
```

```js
let fruit = ("poire" && "pomme") ?? "banane"

alert(fruit) //pomme (&& retourne la dernière valeur true et ?? la première définit)
```