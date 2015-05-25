import angular from 'angular';
import router from 'angular-ui-router';


const app = angular.module('testapp', [
    'ui.router',
    require('./components/test-controller').name
])
.config(function ($stateProvider) {
    console.log('config here');
})
