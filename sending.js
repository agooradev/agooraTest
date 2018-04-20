var Parse= require('parse/node');
Parse.initialize("q47V49nvC5ofkNKWoEPSCIIhv8HNfXJt4rKLhP1A","wOYK9Vg8hUwIMWOWUaGN5MIiNZaKxRzTiA2nbj7F");
Parse.serverURL='https://parseapi.back4app.com/';

var user = new Parse.User();
	user.save({
		username: 'peutimporte',
		email: 'ladressefaut@gmail.com',
		password: '123456'
				}, {
					success: function(response) {
						alert('New object create with success! ObjectId: ' + response.id + `, ` + user.get('username'));
						console.log('sa marche');
},
		error: function(response, error) {
			alert('Error: ' + error.message);
			console.log(error);
}
                                        });