import angular from 'angular';
import router from 'angular-ui-router';

const app = angular.module('testapp', [
    'ui.router',
    require('./components/test-controller').name
])
.config(function ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider.state('index', {
        url: '/',
        template: require('./components/test-tpl.html'),
        controller: 'testController'
    });
});
