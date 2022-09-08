const express = require('express'); //on importe le framework Express

const app = express(); //on crée un objet app pour notre application avec la méthode express pour créer une application express

//middleware:
app.use((req, res, next) => {
    console.log('requête reçue');
    next(); //il faut appeler next ici car sinon la requête ne se termine pas et ne va pas à la suivante
});

app.use((req, res, next) => {
    res.status(201); //on change le statut de la réponse http, on passe de 200 OK à 201
    next();
});
app.use((req, res, next) => { //comme on a passé que use, ça renverra la réponse qui suit pour tout types de requête
    //next permet de renvoyer à la prochaine fonction à exécuter par le server. Les fonction app.use doivent être écrites dans l'ordre d'exécution
    res.json({ message: 'Votre requête a bien été reçue' }); //on envoie un objet json comme réponse
    next();
});
app.use((req, res) => {
    //pas de next ici puisque c'est le 'dernier' middleware pour l'instant
    console.log('Réponse bien envoyée');
});

module.exports = app; //on exporte l'appli app pour qu'elle puisse être utilisée dans les autres fichiers du projet notamment le serveur node