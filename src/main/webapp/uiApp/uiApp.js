(function (pWindow) {
  pWindow.angular.module('uiApp', [
    'ui.router',
    'ngMaterial',
    'ui.grid', 'ui.grid.saveState', 'ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 
    'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.grid.autoResize','ui.grid.infiniteScroll',
    'uiApp.common',
    'uiApp.contactsModule']);
})(this);
