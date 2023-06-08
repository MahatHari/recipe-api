const jsonServer = require('json-server');
const cors= require('cors')

const server= jsonServer.create();

const router=jsonServer.router("db.json");
const middleWare= jsonServer.defaults();

const cors= domainList=["https://mellifluous-eclair-5bf6e9.netlify.app/"]

const corsOptions = {
    origin: function (origin, callback) {
      if (domainList.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  }


const port= process.env.port || 3001;

server.use(router);
server.use(middleWare);
server.use(cors(corsOptions))

server.listen(port);