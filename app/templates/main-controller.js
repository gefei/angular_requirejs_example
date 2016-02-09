/**
 * @author gefei
 */

define(['tree-employees', 'application', 'dialog-service'], function(tree) {
    var main_controller = function($scope, DialogService) {
        $scope.show_dialog = function() {
            DialogService.dialog_example();
        }

        $scope.treeOptions = {
            nodeChildren: "children",
            dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            }
        }
        $scope.dataForTheTree = tree;

        $scope.select = function(msg) {
            console.log(msg);
            $scope.selected = $scope.dataForTheTree[msg]
        }

        $scope.b2 = function() {
            console.log(3);
        }

    };
    // main_controller.$inject = ['$scope', 'DialogService'];
    return main_controller;
});
