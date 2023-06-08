const jsonServer = require('json-server');
const cors= require('cors')

const server= jsonServer.create();

const router=jsonServer.router("db.json");
const middleWare= jsonServer.defaults();

server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


const port= process.env.port || 3001;


server.use(middleWare);
server.use(router);

server.listen(port,()=>console.log("Server is listening"));