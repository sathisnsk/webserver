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
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
//res.setHeader('Content-Type', 'text/html');
//res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//res.setHeader('Access-Control-Allow-Origin', 'https://candid-florentine-c99a0d.netlify.app/');
                                                
res.writeHead(200,options);

//fs.readFile('./index.html','utf-8', (err,data) => {
  //  res.write(data);
//});

const testJson = {"name":"kumar", "age":25};

res.write(JSON.stringify(testJson));

res.end();

});

httpServer.listen(PORT, (error) => {
    if (!error) {
        console.log(`listening on port ${PORT}`);
    } else {
        console.log();
    }

});