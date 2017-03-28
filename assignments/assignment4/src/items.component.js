(function () {
    'use strict';

    angular.module('data')
        .component('itemsList', {
            templateUrl: 'src/templates/itemslist.template.html',
            bindings: {
                items: '<'
            }
        });

})();