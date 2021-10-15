/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/

function pow(x, n) {
      let result = x;
      for (let i = 1; i < n; i++) {
            result *= x // result = à result * x
      }
      return result;
}

let x = +prompt("quels nombres x ?", '');
let n = +prompt("quels nombres n ?", '');

if (n < 1) {
      alert(`power ${n} is not supported, use a positive integer`);
}else{
      alert(pow(x, n));
}