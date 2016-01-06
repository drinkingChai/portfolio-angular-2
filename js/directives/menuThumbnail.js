app.directive("menuThumbnail", function() {
	return {
		restrict: 'E',
		scope: {info: '='},
		templateUrl: "js/directives/menuThumbnail.html"
	}
})