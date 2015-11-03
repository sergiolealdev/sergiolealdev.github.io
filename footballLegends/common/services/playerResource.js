(function(){

	angular
		.module("common.services")
		.factory("playerResource",
				["$resource",
				PlayerResource]);

	function PlayerResource ($resource) {
		return $resource("/api/players/:playerId")
	}

}());