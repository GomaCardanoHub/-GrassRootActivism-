const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.listen(port,()=>console.log(`Vous êtes sur le serveur ${port}`));
