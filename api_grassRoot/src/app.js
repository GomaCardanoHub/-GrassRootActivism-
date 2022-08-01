const express = require('express');
const cors = require('cors');
const db = require('./database/Databases');
const router=require('./router/RouteApp');
const  dotenv=require('dotenv');
dotenv.config();
const app = express();
var corsOptions = {
  origin: "http://localhost:4200" 
};
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods ,multipart/form-data", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
app.use('./src/uploads/', express.static('uploads'));
app.use('/api/v1', router)
const port = process.env.PORT||5000;
const server =app.listen(port, () => console.log(`serveur disponible.... ${server.address().port}`));