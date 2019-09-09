var http = require('http');


const server = http.createServer(function(req, res){
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
})