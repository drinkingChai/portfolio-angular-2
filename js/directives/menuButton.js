app.directive("menuButton", function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: "js/directives/menuButton.html"
	}
})