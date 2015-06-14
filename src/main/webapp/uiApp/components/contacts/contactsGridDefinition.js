(function (pWindow) {
  pWindow.angular.module('uiApp.contactsModule').
    constant('CONTACTS_GRID_DEFINITION', {gridOptions:
        {
          columnDefs: [
            {field: 'id', displayName: 'Id'},
            {field: 'firstName', displayName: 'Vorname'},
            {field: 'lastName', displayName: 'Nachname'}
          ],
          data: [],
          detailIdParameterName: 'contactId'
        }
    });

})(this);

