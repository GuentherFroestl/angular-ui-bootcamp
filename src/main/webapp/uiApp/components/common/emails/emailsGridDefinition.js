(function (pWindow) {
  pWindow.angular.module('uiApp.common').
    constant('EMAILS_GRID_DEFINITION', {gridOptions:
        {
          columnDefs: [
            {field: 'id', displayName: 'Id'},
            {field: 'from', displayName: 'From'},
            {field: 'to', displayName: 'To'},
            {field: 'subject', displayName: 'Subject'},
            {field: 'body', displayName: 'Boday Text'}
          ],
          data: []
        }
    });

})(this);

