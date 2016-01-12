/**
 * @author gefei
 */

define(['application'], function(app) {
        app.register.factory('DialogService', function(ngDialog) {
            return {
                dialog_example: function() {
                    ngDialog.open({
                        template: 'dialogs/sample.html',
                        className: 'ngdialog-theme-default',
                        overlay: true,
                        closeByDocument: false,
                        controller: ['$scope', function($scope) {
                            $scope.title = 'Sample'
                        }]
                    })
                }
            }
        })
    }
);
