const jsonServer = require('json-server');
const cors= require('cors')

const server= jsonServer.create();

const router=jsonServer.router("db.json");
const middleWare= jsonServer.defaults();


const port= process.env.port || 3001;

server.use(router);
server.use(middleWare);
server.use(cors({
    origin:true,
    credentials:true,
    preflightContinue:false,
    methods:"GET,HEAD,PUT,POST,DELETE",
}))

server.options('*',cors());
server.use(cors())

server.listen(port,()=>console.log("Server is listening"));