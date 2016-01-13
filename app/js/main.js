// main.js

require.config({
    baseUrl: "",

    paths: {
        'angular': '../bower_components/angular/angular',
        'angularAMD': '../bower_components/angularAMD/angularAMD',
        'angular-translate': '../bower_components/angular-translate/angular-translate',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-tree-control': '../bower_components/angular-tree-control/angular-tree-control',
        'ui-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap',
        'ui-bootstrap-templates': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'ng-dialog': '../bower_components/ng-dialog/js/ngDialog',
        'lodash': '../bower_components/lodash/lodash',

        'application': 'js/application',
        'app-i18n-resource': 'js/i18n/app-i18n-resource',
        'dialog-service': 'js/services/dialog-service',

        'tree-employees': 'js/tree-data/employees'
    },

    // add modules that do not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: "angular"
        },

        'angular-route': ['angular'],
        'ui-bootstrap': ['angular'],
        'application': ['angular'],

        'ui-bootstrap-templates': ['angular', 'ui-bootstrap'],
        'angularAMD': ['angular'],
        'ng-dialog': ['angular']
    },

    // kick start application
    deps: ['application']
});

