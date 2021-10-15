/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let a;
 do{
       a = +prompt("entrez un nombre plus grand que 100", "");
 }while(a <= 100 && a);
/*
1) do + while se répetent tant que les vérifications sont 'true'
2) définir le nombre 'a' grâce à +prompt
3) vérification de 'a <= 100' et'&& a' ainsi si l'entré est 0 donc 'false'
cela reste true grâce à '0 <= 100' (l'opérateur && s'arrête que si les 2 valeurs
sont true) */