(function () {
	angular
		.module("playersManagement")
		.controller("playerDetailController", 
					["player",
					PlayerDetailController]);

	function PlayerDetailController (player) {
		var model = this;
		
		model.player = player;
		model.title = "Player detail: " + model.player.name;

	}
}());