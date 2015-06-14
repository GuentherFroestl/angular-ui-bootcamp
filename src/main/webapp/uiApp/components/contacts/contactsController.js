(function (pWindow) {
  pWindow.angular.module('uiApp.contactsModule').
    controller('ContactsController',
      ['$scope', '$log', 'GenericGridControllerFactory','injectedGridOptions','detailIdParameterName',
        contactsController]);


  function contactsController($scope, $log, GenericGridControllerFactory, injectedGridOptions,detailIdParameterName) {
    $log.log('ContactsController injected injectedGridOptions:', injectedGridOptions);
    var pGoptions = pWindow.angular.copy(injectedGridOptions);
    $log.log('ContactsController gridOptions:', pGoptions);
    pGoptions.data = $scope.data;

    var genericGridController = GenericGridControllerFactory.getInstance(
      $scope,
      pGoptions,
      {
        detailIdParameterName : detailIdParameterName.value
      },
      '');
    pWindow.angular.extend(this, genericGridController);
  }
})(this);

