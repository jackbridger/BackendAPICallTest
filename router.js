var handlers = require('./handler');

var routes = {
    '/'   : handlers.home,
    '404' : handlers.notFound,
    '/getRandomImg': handlers.getRandomImg
}

module.exports = function(req, res) {
    if (req.url === '/') {
	    handlers.home(req, res);
    } 
    else if (req.url === '/getRandomImg') {
        handlers.getRandomImg(req, res);
    } 
    else {
	    handlers.notFound(req, res);
    }	
}