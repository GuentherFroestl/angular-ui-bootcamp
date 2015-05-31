(function (pWindow) {
  pWindow.angular.module("uiApp.contactsModule")
    .config(function ($stateProvider, $urlRouterProvider) {

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("contacts/list");

      $stateProvider
        .state('contacts', {
          abstract: true,
          url: '/contacts',
          template: '<ui-view/>',
          onEnter: function ($log) {
            $log.log("enter contacts");
          },
          controller: function ($scope, $log) {
            $scope.contacts = [
              {
                id: 1,
                firstName: 'Alice',
                lastName: 'Huber'
              },
              {
                id: 2,
                firstName: 'Bob',
                lastName: 'Mayer'
              }];
            $log.log('define contacts: ', $scope.contacts);
          }
        })
        .state('contacts.list', {
          url: '/list',
          templateUrl: 'uiApp/components/contacts/contacts.list.html',
          onEnter: function ($log) {
            $log.log("enter contacts.list");
          },
          controller: 'ContactsController',
          resolve: {simpleObj: function () {
              return {value: 'just a text'};
            },
            injectedGridOptions: function (CONTACTS_GRID_DEFINITION) {
              return CONTACTS_GRID_DEFINITION.gridOptions;
            }
          }

        })
        .state('contacts.detail', {
          url: '/detail/:id',
          templateUrl: 'uiApp/components/contacts/contacts.detail.html',
          onEnter: function ($log) {
            $log.log("enter contacts.details");
          },
          controller: function ($scope, $stateParams, $log) {
            $scope.contact = $scope.contacts[$stateParams.id - 1];
            $log.log('contacts.detail.controller: load contact', $scope.contact);
          }
        });
    });
  ;
})(this);
