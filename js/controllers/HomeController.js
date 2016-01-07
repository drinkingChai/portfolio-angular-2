app.controller("HomeController", ["$scope", "homeData", function($scope, homeData) {
	homeData.success(function(data) {
		$scope.data = data;
		$scope.leftCol = [data.skills, data.cycling, data.itThings];
		$scope.rightCol = [data.devPort, data.about]
	});
}])