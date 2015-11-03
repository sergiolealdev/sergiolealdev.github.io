(function () {
	angular
		.module("playersManagement")
		.controller("playerEditController", 
					["player",
					"$state",
					PlayerEditController]);

	function PlayerEditController (player, $state) {
		var model = this;
		
		model.player = player;

		if(model.player && model.player.playerId){
			model.title = "Player detail: " + model.player.name;
		}
		else{
			model.title = "New Player";	
		}

		model.open = function ($event) {
			$event.preventDefault();
			$event.stopPropagation();

			model.opened = !model.opened;
		};

		model.submit = function(){
			model.player.$save();
		}

		model.cancel = function() {
			$state.go('playerList');
		}

		model.addSkills = function (skills) {
			if(skills){
				var array= skills.split(',');
				model.player.skills = model.player.skills ? model.player.skills.concat(array) : array;
			} else {
				alert("Please enter one or more skills separated by commas.");
			}
		}

		model.removeSkill = function (idx) {
			model.player.skills.splice(idx,1);
		}
	}
}());