/*(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'MenuDataService']
    function ItemsController($stateParams, MenuDataService) {
        var itemsList = this;

        itemsList.items = [];

        itemsList.$onInit = function () {
            MenuDataService.getItemsForCategory($stateParams.shortCatName)
                .then(function (result) {
                    itemsList.items = result;
                    console.log("itemsList.items", itemsList.items);
                });
        };

    }

})();*/

(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);

// 'items' are injected through state's resolve
    ItemsController.$inject = ['items']
    function ItemsController(items) {
        var itemsList = this;
        itemsList.items = items;
        console.log("items list in controller", itemsList.items);

    }

})();