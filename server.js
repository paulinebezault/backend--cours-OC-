const http = require('http');

const server = http.createServer((req, res) => { //req pour request, res pour response
    res.end('VOilà la réponse du serveur');
}); // le serveur est prêt mais il doit avoir un port à écouter

server.listen(process.env.PORT || 3000); //par défaut on utilise le port 3000, 
//mais s'il est occupé ou si la plateforme de déploiement propose un port par défaut, 
//c'est celui-ci qu'on écoutera via la variable d'environnement process.env.PORT

//on a installé nodemon pour redémarrer le serveur à chaque changement. AU lieu de taper node server dans le terminal, on tape nodemon