const http = require('http');
const fs = require('fs');
const PORT = 3000;
//const {Server} = require('socket.io');

const httpServer = http.createServer(function(req, res)
{
    console.log(req.url);
    console.log(req.path);
    const {method, url, headers} = req;

      fs.appendFile('./server_log.txt', `\n log time ${Date.now()} \n ${headers} \n ${method} \n ${url}`, (err)=> {} );

        const options = {
            'Content-Type': 'text/html',
            'Access-Control-Allow-Origin': '*'
        }

       /*  const options = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        } */
 
res.writeHead(200,options);

fs.readFile('./index.html','utf-8', (err,data) => {
    console.log(data);
    res.write(data);
    res.end();
});

/* const testJson = {"name":"kumar", "age":25}
res.write(JSON.stringify(testJson)); */
//res.write('<h1>server Response</h1>');
});

httpServer.listen(PORT, (error) => {
    if (!error) {
        console.log(`listening on port ${PORT}`);
    } else {
        console.log();
    }

});