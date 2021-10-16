/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let n = 10;

label:
for(let a = 2; a <= n; a++){
      for(let b = 2; b < a; b++){
            if(a % b == 0) continue label;
      }
      alert( a );
}