const http = require('http'); // 1 - Import Node.js core module
const fs = require('fs')
const port = 8000
var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    res.writeHead(200, { 'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error,data) {
        if(error) {
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }

    res.end()
    })

});

server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log('Node.js web server is running.. at ' + port)
    }
}); //3 - listen for any incoming requests

