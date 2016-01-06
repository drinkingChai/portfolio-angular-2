app.controller("HomeController", ["$scope", "homeData", function($scope, homeData) {
	homeData.success(function(data) {
		$scope.leftCol = [data.itThings, data.cycling, data.skills];
		$scope.rightCol = [data.devPort, data.about]
	});
}])