(function (pWindow) {
  pWindow.angular.module('uiApp.contactsModule').
    controller('ContactsController',
      ['$scope', '$log', 'GenericGridControllerFactory','$state','simpleObj','data','injectedGridOptions',
        contactsController]);


  function contactsController($scope, $log, GenericGridControllerFactory, $state,simpleObj,data,injectedGridOptions) {
    $log.log('ContactsController injected simpleObj:', simpleObj);
    $log.log('ContactsController injected data:', data);
    $log.log('ContactsController injected injectedGridOptions:', injectedGridOptions);
    var pGoptions = pWindow.angular.copy(injectedGridOptions);
    $log.log('ContactsController gridOptions:', pGoptions);
    pGoptions.data = $scope.data;

    var genericGridController = GenericGridControllerFactory.getInstance(
      $scope,
      pGoptions,
      {},
      '');
    pWindow.angular.extend(this, genericGridController);
  }
})(this);

