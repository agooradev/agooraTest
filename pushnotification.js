var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Parse= require('parse/node');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
        socket.on('chat message', function(msg){
                console.log('message: ' + msg);
                Parse.initialize("q47V49nvC5ofkNKWoEPSCIIhv8HNfXJt4rKLhP1A","wOYK9Vg8hUwIMWOWUaGN5MIiNZaKxRzTiA2nbj7F");
                Parse.serverURL='https://parseapi.back4app.com/';

                var message = new Parse.Object('Message');
				message.set("content",msg);
                message.save(null,{
					success: function (smth){
						console.log("ca marche");
						console.log(smth);
					},
					error: function(resp,error){
						console.log(resp);
						console.log(error);
						}
                                });
				var hash = new Object();
				hash['message'] = msg;
				hash['channel'] = 'ShopsNotification';
				hash['shop'] = 'Averreos';
				
				Parse.Cloud.run("pushsample",hash,{
					success: function(results){
						io.emit('chat message', 'C\'est reussi');
					},
					error: function(results,error){
						io.emit('chat message', 'C\'est rate');
						console.log(error);
						console.log(results);
					}
				})
                //io.emit('chat message', msg);
  });
});



http.listen("3030", function(){
  console.log('listening on *:passenger');
});



