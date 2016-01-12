/**
 * @author gefei
 */

define(['application', 'dialog-service'], function() {
    var main_controller = function($scope, DialogService) {
        $scope.show_dialog = function() {
            DialogService.dialog_example();
        }
    };
    // main_controller.$inject = ['$scope', 'DialogService'];
    return main_controller;
});
