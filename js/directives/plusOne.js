app.directive('plusOne', function(){
    return {
        restrict: 'E',
        scope: {

        },
        templateUrl: 'js/directives/plusOne.html ',
        link: function(scope, element, attrs) {
            scope.buttonText = "+ 1";
            scope.like = function() {
                element.toggleClass('btn-like');
            };
        }
    };
});