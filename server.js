var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..

});

server.listen(1293); //3 - listen for any incoming requests

console.log('NodeJs simple server running.')
