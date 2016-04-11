(function () {
	var app = angular.module("questWebSite",
							["ui.router",
							"ui.mask",
							"ui.bootstrap",
							"aboutUsModule",
							"productsModule",
							"servicesModule",
							"itProjectsModule",
							"careersModule",
							"contactUsModule"]);

	app.config(["$stateProvider",
				"$urlRouterProvider",
				function ($stateProvider, $urlRouterProvider){
					$urlRouterProvider.otherwise("/home");

					$stateProvider
						.state("home" , {
							url 		: "/home", 		
							templateUrl	: "app/home.html"
						})
						.state("aboutUs" , {
							url 		: "/aboutUs", 		
							templateUrl	: "app/aboutUs/aboutUs.html",
							controller  : "aboutUsController"
						})
						.state("products" , {
							url 		: "/products", 		
							templateUrl	: "app/products/products.html",
							controller  : "productsController"
						})
						.state("services" , {
							url 		: "/services", 		
							templateUrl	: "app/services/services.html",
							controller  : "servicesController"
						})
						.state("itProjects" , {
							url 		: "/itProjects", 		
							templateUrl	: "app/itProjects/itProjects.html",
							controller  : "itProjectsController"
						})
						.state("careers" , {
							url 		: "/careers", 		
							templateUrl	: "app/careers/careers.html",
							controller  : "careersController"
						})
						.state("contactUs" , {
							url 		: "/contactUs", 		
							templateUrl	: "app/contactUs/contactUs.html",
							controller  : "contactUsController"
						})
				}]
	);
}());