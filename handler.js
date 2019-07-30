const fetch = require('node-fetch');
var handlers = module.exports = {};

var headers = {
    'content-type' : 'text/html'
}

handlers.home = function(req, res){
    res.writeHead(200, headers);
    res.end('home page');
}

handlers.getRandomImg = (req, res) => {
    res.writeHead(200, headers);
    fetch('https://api.kanye.rest').then(response => response.text()).then(body => res.end(body))
}

handlers.notFound = function(req, res){
    res.writeHead(404, headers);
    res.end('Resource not found');
}