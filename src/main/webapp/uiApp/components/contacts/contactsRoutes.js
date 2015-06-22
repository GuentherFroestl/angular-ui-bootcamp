(function (pWindow) {
  pWindow.angular.module("uiApp.contactsModule")
    .config(function ($stateProvider, $urlRouterProvider) {

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("contacts/list");
      var contactIdParameterName = 'contactId';
      var emailParameterName = 'emailId';

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'uiApp/components/home/home.html',
          controller: function ($scope, $log, $rootScope) {
            $rootScope.$emit("mainIcon", "home");
            $log.log('enter home page ');
          }
        })
        .state('contacts', {
          abstract: true,
          url: '/contacts',
          template: '<ui-view/>',
          onEnter: function ($log) {

            $log.log("enter contacts");
          },
          controller: function ($scope, $log, $rootScope) {
            $rootScope.$emit("mainIcon", "person");
            $scope.data = [
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
            $log.log('define contacts: ', $scope.data);
          }
        })
        .state('contacts.list', {
          url: '/list',
          templateUrl: 'uiApp/components/contacts/contacts.list.html',
          onEnter: function ($log) {
            $log.log("enter contacts.list");
          },
          controller: 'ContactsController',
          resolve: {
            injectedGridOptions: function (CONTACTS_GRID_DEFINITION) {
              return CONTACTS_GRID_DEFINITION.gridOptions;
            },
            detailIdParameterName: function () {
              return {value: contactIdParameterName};
            }
          }

        })
        .state('contacts.detail', {
          url: '/detail/:' + contactIdParameterName,
          templateUrl: 'uiApp/components/contacts/contacts.detail.html',
          onEnter: function ($log) {
            $log.log("enter contacts.details");
          },
          controller: function ($scope, $stateParams, $log) {
            $scope.contact = $scope.data[$stateParams.contactId - 1];
            $log.log('contacts.detail.controller: load contact', $scope.contact);
          }
        })
        .state('contacts.detail.email', {
          abstract: true,
          url: '/email',
          onEnter: function ($log) {
            $log.log("enter contacts.details");
          },
          resolve: {
            parentObject: function ($stateParams) {
              return {
                class: 'contacts',
                id: $stateParams.contactId
              };
            }
          },
          controller: function ($scope, $stateParams, parentObject, $log) {
            $log.log('contacts.detail.emailcontroller parentObject: ', parentObject);
            $scope.contact = $scope.data[parentObject.id - 1];
            $scope.data = [
              {
                id: 1,
                from: 'Alica Huber',
                to: 'Bob Mayer',
                subject: 'just a test',
                body: 'this is a test message for Bob. '},
              {
                id: 2,
                from: 'Alica Huber',
                to: 'Bob Mayer',
                subject: 'just a test no 2',
                body: 'this is another test message for Bob. '}
            ];
          },
          template: '<ui-view/>'
        })
        .state('contacts.detail.email.list', {
          url: '/list',
          templateUrl: 'uiApp/components/common/grid/gridList.html',
          onEnter: function ($log) {
            $log.log("contacts.detail.email.list");
          },
          controller: 'ContactsController',
          resolve: {
            injectedGridOptions: function (EMAILS_GRID_DEFINITION) {
              return EMAILS_GRID_DEFINITION.gridOptions;
            },
            detailIdParameterName: function () {
              return {value: emailParameterName};
            }
          }
        })
        .state('contacts.detail.email.detail', {
          url: '/detail/:' + emailParameterName,
          templateUrl: 'uiApp/components/common/emails/email.detail.html',
          onEnter: function ($log) {
            $log.log("enter emails.details");
          },
          controller: function ($scope, $stateParams, parentObject, $log) {
            $scope.email = $scope.data[$stateParams.emailId - 1];
            $scope.parentObject = parentObject;
            $log.log('email.detail.controller: load email', $scope.email);
          }
        })
        ;//end $stateProvider.states
    });
  ;
})(this);
