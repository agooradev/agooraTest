var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Parse= require('parse/node');
var file=require('./file.json');
var fs=require('fs');
var fileName = './file.json';

var user = new Parse.User();
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
/*
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
*/
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
	Parse.initialize("q47V49nvC5ofkNKWoEPSCIIhv8HNfXJt4rKLhP1A","wOYK9Vg8hUwIMWOWUaGN5MIiNZaKxRzTiA2nbj7F");
    Parse.serverURL='https://parseapi.back4app.com/';
	file['username']=msg;
	file['email']=msg+'@gmail.com';
	console.log('message: ' + msg);
	fs.writeFile(fileName, JSON.stringify(file), function (err) {
		if (err) return console.log(err);
		console.log(JSON.stringify(file));
		user.save(file);
		console.log('writing to ' + fileName);
});
	
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});