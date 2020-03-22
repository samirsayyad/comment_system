const dotenv = require('dotenv');
dotenv.config();
///////////////////////////////////////////////////
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Comment = require('./models/commentModel'), 
  bodyParser = require('body-parser');
  
///////////////////////////////////////////////////
const initDB = require("./database");
initDB();
////////////////////////////////////////////////////

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

////////////////////////////////////////////////////
var routes = require('./routes/commentRoute');
routes(app); 
///////////////////////////////////////////////////

app.listen(port);


console.log('comment RESTful API server started on: ' + port);