(function (pWindow) {
  pWindow.angular.module('uiApp', [
    'ui.router',
//    'ui.grid.resizeColumns', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.pinning',
//    'ui.grid.selection', 'ui.grid.rowEdit', 'ui.grid.autoResize', 'ui.grid.infiniteScroll',
    
    'ui.grid', 'ui.grid.saveState', 'ui.grid.selection', 'ui.grid.cellNav', 'ui.grid.resizeColumns', 
    'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.grid.autoResize','ui.grid.infiniteScroll',
    'uiApp.common',
    'uiApp.contactsModule']);
})(this);
