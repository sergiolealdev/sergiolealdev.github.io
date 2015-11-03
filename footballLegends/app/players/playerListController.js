(function () {
	angular
		.module("playersManagement")
		.controller("playerListController", 
					["playerResource", PlayerListController]);

	function PlayerListController (playerResource) {
		var model = this;
		
		playerResource.query(function(data){
			model.players=data;
		});
		model.showImage = false;

		model.toggleImage = function () {
			model.showImage = !model.showImage;
		}
	}
}());