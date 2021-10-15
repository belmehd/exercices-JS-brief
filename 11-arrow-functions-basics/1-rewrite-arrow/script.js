/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
function ask(question, yes, no) {
      if (confirm(question)) yes();
      else no();
    }
    
    ask(
      "Do you agree?",
      () => alert("You agreed."),
      () => alert("You canceled the execution.")
    );