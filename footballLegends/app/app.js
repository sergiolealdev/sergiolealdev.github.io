(function () {
	var app = angular.module("playersManagement",
							["common.services",
							"ui.router",
							"ui.mask",
							"ui.bootstrap",
							"playerResourceMock"]);

	app.config(["$stateProvider",
				"$urlRouterProvider",
				function ($stateProvider, $urlRouterProvider){
					$urlRouterProvider.otherwise("/");

					$stateProvider
						.state("home" , {
							url 		: "/", 		
							templateUrl	: "app/home.html"
						})
						//Players
						.state("playerList" , {
							url 		: "/players", 		
							templateUrl	: "app/players/playerListView.html",
							controller  : "playerListController as model"
						})
						.state("playerEdit" , {
							abstract	: true,
							url 		: "/players/edit/:playerId", 		
							templateUrl	: "app/players/playerEditView.html",
							controller  : "playerEditController as model",
							resolve		: {
								playerResource : "playerResource",
								player 		   : function (playerResource, $stateParams) {
										var playerId = $stateParams.playerId;
										return playerResource.get({playerId: playerId}).$promise;
								}
							}
						})
						.state("playerEdit.info" , {
							url 		: "/info", 		
							templateUrl	: "app/players/playerEditInfoView.html"
						})
						.state("playerEdit.teams" , {
							url 		: "/teams", 		
							templateUrl	: "app/players/playerEditTeamsView.html"
						})
						.state("playerEdit.skills" , {
							url 		: "/skills", 		
							templateUrl	: "app/players/playerEditSkillsView.html"
						})
						.state("playerDetail" , {
							url 		: "/players/:playerId", 		
							templateUrl	: "app/players/playerDetailView.html",
							controller  : "playerDetailController as model",
							resolve		: {
								playerResource : "playerResource",
								player 		   : function (playerResource, $stateParams) {
										var playerId = $stateParams.playerId;
										return playerResource.get({playerId: playerId}).$promise;
								}
							}
						})
				}]
	);
}());