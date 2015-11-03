(function(){

	var app = angular
		.module("playerResourceMock",["ngMockE2E"]);

	app.run(function($httpBackend){
		var players = [
			{	"playerId"	: 1,
				"name"		: "Cristiano Ronaldo",
				"height"	: "1.88m",
				"goals"		: 588,
				"salary"	: 9000000,
				"dateOfBirth": "25/10/1979",
				"skills"	: ["hair dressing" , "SIIIIIIIIIIIIIUH!"],
				"photoUrl"	: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Rus-Por2012_%2816%29.jpg/250px-Rus-Por2012_%2816%29.jpg"
			},
			{	"playerId"	: 2,
				"name"		: "Lionel Messi",
				"height"	: "1.68m",
				"goals"		: 599,
				"salary"	: 9500000,
				"dateOfBirth": "14/01/1983",
				"skills"	: ["tax avoiding" , "Impossible goals"],
				"photoUrl"	: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/2015_UEFA_Super_Cup_64_crop.jpg/220px-2015_UEFA_Super_Cup_64_crop.jpg"
			},
			{	"playerId"	: 3,
				"name"		: "Thomas Gravesen",
				"height"	: "2.15m",
				"goals"		: 1,
				"salary"	: 500000,
				"dateOfBirth": "04/11/1980",
				"skills"	: ["gravesinha" , "yo pablo!","a De Guzmán!"],
				"photoUrl"	: "http://s.weltsport.net/bilder/spieler/gross/1197.jpg"
			}
		];

		var playerUrl = "/api/players";
		$httpBackend.whenGET(playerUrl).respond(players);

		var editingRegex = new RegExp(playerUrl + "/[0-9][0-9]*",'');
		$httpBackend.whenGET(editingRegex).respond(function(method, url, data){
			var player 		= {"playerId" : 0};
			var parameters 	= url.split('/');
			var length 		= parameters.length;
			var id 			= parameters[length - 1];

			if (id > 0) {
				for (var i = 0; i < players.length; i++) {
					if(players[i].playerId == id){
						player = players[i];
						break;
					}
				};
			};
			return[200, player, {}];
		});

		$httpBackend.whenPOST(playerUrl).respond(function(method, url, data){
			var player = angular.fromJson(data);

			if(!player.playerId) {	//new player
				player.playerId = players[players.length -1].playerId + 1;
				players.push(player);
			}
			else { 					//update player
				for (var i = 0; i < players.length; i++) {
					if(players[i].playerId == player.playerId){
						players[i] = player;
						break;
					}
				};	
			}


			return[200, player, {}];
		});

		//Pass through any request for application files
		$httpBackend.whenGET(/app/).passThrough();
	})

}());