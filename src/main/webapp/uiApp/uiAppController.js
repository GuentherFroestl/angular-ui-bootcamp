(function (pWindow) {
  pWindow.angular.module('uiApp')
    .controller('UiAppController', function ($state, $scope, $rootScope, $log) {
      $state.transitionTo('contacts.list');
      $rootScope.mainIcon = "menu";
      $scope.mainIcon = $rootScope.mainIcon;

      $rootScope.$on("mainIcon", function (event, arg) {
        $log.log("mainIcon", event, arg);
        $rootScope.mainIcon = arg;
      $scope.mainIcon = $rootScope.mainIcon;
      });

    }
    );
})(this);