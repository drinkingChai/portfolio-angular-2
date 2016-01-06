app.factory("homeData", ["$http", function($http) {
	return $http.get('data/home_data.json').success(function(data) {
		return data;
	});
}]);