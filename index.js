const http = require('http');
const fs = require('fs');
const PORT = 3000;
//const {Server} = require('socket.io');

const httpServer = http.createServer(function(req, res)
{

        const options = {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': 'https://candid-florentine-c99a0d.netlify.app/'
        }
//res.setHeader('Content-Type', 'text/html');
//res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//res.setHeader('Access-Control-Allow-Origin', 'https://candid-florentine-c99a0d.netlify.app/');
res.writeHead(200,options);
fs.readFile('./index.html','utf-8', (err,data) => {
    res.write(data);
})

//res.write("Hello");

res.end();

});

httpServer.listen(PORT, (error) => {
    if (!error) {
        console.log(`listening on port ${PORT}`);
    } else {
        console.log();
    }

});