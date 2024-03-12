const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res)
{


res.write("test response");

res.end();

});

server.listen(port, (error) => {
    if (!error) {
        console.log(`listening on port ${port}`);
    } else {
        console.log();
    }

});