(function (pWindow) {
  pWindow.angular.module('uiApp')
    .controller('UiAppController', function ($state) {
      $state.transitionTo('contacts.list');
    });
})(this);