(function (pWindow) {
  pWindow.angular.module('uiApp.common.grid')
    .factory('GenericGridControllerFactory',
      ['$rootScope', '$log', '$state', '$stateParams', genGridFunc]);
  function genGridFunc($rootScope, $log, $state, $stateParams) {
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
        $log,
        $state,
        $stateParams
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
    $log,
    $state,
    $stateParams) {
      
    $log.log('$stateParams: ', $stateParams);

    $scope.gridOptions = {
      data: $scope.data,
      enableColumnResize: pGridOptions.enableColumnResize,
      enableRowHeaderSelection: pGridOptions.enableRowHeaderSelection,
      enableRowSelection: pGridOptions.enableRowSelection,
      enableCellEditOnFocus: $scope.editActive,
      multiSelect: pGridOptions.multiSelect,
      enableFiltering: pGridOptions.enableFiltering,
      enableGridMenu: pGridOptions.enableGridMenu,
      rowEditWaitInterval: -1,
      infiniteScrollRowsFromEnd: pGridOptions.infiniteScrollRowsFromEnd,
      infiniteScrollDown: pGridOptions.infiniteScrollDown,
      infiniteScrollUp: pGridOptions.infiniteScrollUp,
      columnDefs: pGridOptions.columnDefs,
      sortInfo: pGridOptions.sortInfo,
      rowTemplate: "<div ng-dblclick=\"grid.appScope.onDblClick(row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell ></div>"
      ,
      onRegisterApi: function (gridApi) {
        $scope.gridApi = gridApi;
      },
      appScopeProvider: {
        onDblClick: function (row) {
          $log.log("showObjectDetails:", row);
          if (pWindow.angular.isDefined(pDetailViewPath)
            && !$scope.editModus) {
            var route = '^.detail';
            var toParams = {id: row.entity.id};
            $stateParams[pGridOptions.detailIdParameterName] = row.entity.id;
            $log.log("$state.go()", route);
            $state.go(route, $stateParams);
          }
        }
      }
    };

    $scope.extScope = $scope;

    $scope.editModus = false;


    //this function is needed to be able to switch edit mode.
    var checkEditFn =
      function (scopeIn) {
        return $scope.editModus;
      };

    //dynamic switch for edit on/off
    attachCheckEditFn($scope.gridOptions.columnDefs);

    //Attaches the helper function to the column defs.
    function attachCheckEditFn(columnDefs) {
      if (pWindow.angular.isArray(columnDefs)) {
        pWindow.angular.forEach(columnDefs, function (value, ix) {
          value.cellEditableCondition = checkEditFn;
        });
      }
    }

    $log.log('GenericGridController, using gridOptions', $scope.gridOptions);
  }

})(this);

