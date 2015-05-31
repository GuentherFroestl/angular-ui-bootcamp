(function (pWindow) {
  pWindow.angular.module('uiApp.contactsModule').
    controller('ContactsController',
      ['$scope', '$log', 'GenericGridControllerFactory','$state','simpleObj','injectedGridOptions','CONTACTS_GRID_DEFINITION',
        contactsController]);


  function contactsController($scope, $log, GenericGridControllerFactory, $state,simpleObj,injectedGridOptions,CONTACTS_GRID_DEFINITION) {
    $log.log('ContactsController injected simpleObj:', simpleObj);
    $log.log('ContactsController injected injectedGridOptions:', injectedGridOptions);
    var pGoptions = pWindow.angular.copy(CONTACTS_GRID_DEFINITION.gridOptions);
    $log.log('ContactsController gridOptions:', pGoptions);
    pGoptions.data = $scope.contacts;

    var genericGridController = GenericGridControllerFactory.getInstance(
      $scope,
      pGoptions,
      {},
      '');
    pWindow.angular.extend(this, genericGridController);
  }
})(this);

