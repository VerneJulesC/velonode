const express = require('express'); //Import the express dependency
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./dbconfig');
const app = express();              //Instantiate an express app, the main work horse of this server
const api = require('./routes/api');
const userRoutes = require('./routes/userRoutes');

/*
//	connect to database
sql.connect(config, function(err){
	if(err){
		console.log(err);
	}
	//	create the request object
	var request = new sql.Request();
	//	database query
	request.query('select * from velo_user', function(err, recordSet){
		if(err){
			console.log(err);
		}else{
			console.log(recordSet);
		}
	});
});
*/

app.use(cors());

app.use(bodyParser.json());
app.use('/api', api.routes);

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(config.port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://${config.host}: ${config.port}`); 
});