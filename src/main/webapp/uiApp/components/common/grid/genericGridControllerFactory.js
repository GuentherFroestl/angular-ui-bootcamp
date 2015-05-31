(function (pWindow) {
  pWindow.angular.module('uiApp.common.grid')
    .factory('GenericGridControllerFactory',
      ['$rootScope', '$log', genGridFunc]);
  function genGridFunc($rootScope, $log) {
    var factory = {};

    factory.getInstance = function (
      $scope,
      pGridOptions,
      pServiceFunctions,
      pDetailViewPath
      ) {

      return new GenericGridController(
        $scope,
        pGridOptions,
        pServiceFunctions,
        pDetailViewPath,
        $rootScope,
        $log
        );
    };

    return factory;

  }


  function GenericGridController(
    $scope,
    pGridOptions,
    pServiceFunctions,
    pDetailViewPath,
    $rootScope,
    $log) {

    $scope.gridOptions = pGridOptions;
    $log.log('GenericGridController, using gridOptions', $scope.gridOptions);
  }

})(this);

