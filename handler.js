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
    res.end('random img page')
}

handlers.notFound = function(req, res){
    res.writeHead(404, headers);
    res.end('Resource not found');
}