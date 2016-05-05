var express= require ('express');
var bodyparser= require ('body-parser');
var app=express();
//dependecies
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Authorization, AuthExpiry, Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Expose-Headers", "Authorization, AuthExpiry");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, HEAD, DELETE");
    next();
});

app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
//server actions



//app.listen(6443);

    app.listen(process.env.PORT||5555);
    console.log("server started");

//server init
