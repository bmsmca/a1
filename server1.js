var express=require('express')
var app=express()
var MongoClient=require('mongodb').MongoClient
MongoClient.connect("mongodb://127.0.0.1/1db",
function(err,db)
{
if(!err)
{
	console.log("We are connected");
	app.get('/',function(req,res)
	{
	res.send("Welcome");
	})
app.get('/index.html',function(req,res)
{
	res.sendfile(__dirname+"/"+"index.html")
})
app.get('/process_get',function(req,res)
{
var newRec=req.query;
db.collection('student').insert(newRec,function(err,doc)
{
if(err)
	return console.log(err)
})
console.log("Record Inserted!");
res.send('<p>Name:'+req.query.name+'</p><p>USN:'+req.query.usn+'</p>')
})
var server=app.listen(3000,function()
{
	var host=server.address().address
	var port=server.address().port
	console.log("Listening at http://%s%s",host,port);
})
}
else
	db.close;
})
