function view2Ctrl($scope, $location) {

    $scope.redirect = function(path) {
        $location.path(path);
    }

}