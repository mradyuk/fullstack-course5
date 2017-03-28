(function () {

    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownDirectiveController,
            controllerAs: 'menu',
            bindToController: true
        };
        return ddo;
    }

    function NarrowItDownDirectiveController() {

        var menu = this;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {

        var menu = this;
        menu.searchTerm = '';

        menu.search = function () {

            var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

            promise.then(function (response) {
                menu.items = response;
            }).catch(function (error) {
                console.log("Something went terribly wrong.");
            });
            return menu.items;
        };

        menu.removeItem = function (index) {
            menu.items.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (response) {

                var foundItems = [];
                var menuItems = response.data.menu_items;

                if(searchTerm !== ''){

                for (var i = 0; i < menuItems.length; i++) {

                    if (menuItems[i].description.indexOf(searchTerm) > -1) {
                        foundItems.push(menuItems[i]);
                    }
                }
                }
                console.log('menu found', foundItems);
                return foundItems;
            }).catch(function (error) {
                console.log(error);
            });

        };
    }

})();