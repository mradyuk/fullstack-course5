(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    ;


    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {

            return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json ")
            }).then(function (response) {
                var menuCats = response.data;
                console.log('categories found', menuCats);
                return menuCats;
            }).catch(function (error) {
                console.log(error);
            });

        };

        service.getItemsForCategory = function (categoryShortName) {

            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json" + "?category=" + categoryShortName)
            }).then(function (response) {
                var items = response.data.menu_items;
                console.log('items found', items);
                return items;
            }).catch(function (error) {
                console.log(error);
            });

        };


    }

})();

