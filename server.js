const http = require('http');
const app = require('./app'); //on importe l'appli

app.set('port', process.env.PORT || 3000); //on dit à l'application Express sur quel port elle va tourner

/*const server = http.createServer((req, res) => { //req pour request, res pour response
    res.end('VOilà la réponse du serveur');
}); // le serveur est prêt mais il doit avoir un port à écouter | passé en commentaire car on l'enlève après. C'est un exemple de logique serveur de base*/
const server = http.createServer(app);

server.listen(process.env.PORT || 3000); //par défaut on utilise le port 3000, 
//mais s'il est occupé ou si la plateforme de déploiement propose un port par défaut, 
//c'est celui-ci qu'on écoutera via la variable d'environnement process.env.PORT

//on a installé nodemon pour redémarrer le serveur à chaque changement. AU lieu de taper node server dans le terminal, on tape nodemon