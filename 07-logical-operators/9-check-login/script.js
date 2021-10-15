/*  Votre code Javascript vient ici:
      - Vous pourrez visualiser le résultat en ouvrant index.html dans votre navigateur.
      - N'oubliez pas de sauvegarder pour afficher les changements.
*/
let user = prompt("nom d'utilisateur", '');
if(user === 'Admin'){
      let password = prompt("mot de passe", '');
      if(password === 'TheMaster'){
            alert('Welcome!');
      }else if(password == '' || password === null){
            alert('canceled');
      }else{
            alert('wrong password');
      }
}else if(user === '' || user === null){
      alert('canceled');
}else{
      alert("I don't know you");
}