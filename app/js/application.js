/**
 * @author gefei
 */

'use strict';

define(['angularAMD', 'lodash', 'app-i18n-resource', 'angular-route', 'ng-dialog', 'ui-bootstrap', 'ui-bootstrap-templates', 'angular-translate', 'angular-sanitize'],
    function(angularAMD, _, i18n) {

        var m = angular.module('app', ['ngDialog', 'ngRoute', 'ui.bootstrap', 'pascalprecht.translate', 'ngSanitize']);

        m.config(function($routeProvider) {
            $routeProvider.
                when("/", angularAMD.route({
                    templateUrl: function() {
                        return 'templates/main.html'
                    },
                    controllerUrl: 'templates/main-controller'
                }))
        });

        m.config(function($translateProvider) {
            for (var locale in i18n) {
                $translateProvider.translations(locale, i18n[locale])
            }
            $translateProvider.preferredLanguage('en');
            $translateProvider.useSanitizeValueStrategy('sanitize');
        });

        var navController =
            function($scope, $rootScope, $http, $q, $translate) {
                $scope.locales = _.sortBy(_.keys(i18n));
                $scope.change_language = function(key) {
                    $translate.use(key)
                };
            };

        navController.$inject = ['$scope', '$rootScope', '$http', '$q', '$translate' ];
        m.controller('navController', navController);

        angularAMD.bootstrap(m);
        return m;

    }
);

