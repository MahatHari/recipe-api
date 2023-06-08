const jsonServer = require('json-server');

const server= jsonServer.create();

const router=jsonServer.router("db.json");
const middleWare= jsonServer.defaults();

const port= process.env.port || 3001;

server.use(router);
server.use(middleWare);

server.listen(port);