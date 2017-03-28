(function () {
    'use strict';

    angular.module('data')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var catList = this;
        catList.items = [];

        catList.$onInit = function () {
            MenuDataService.getAllCategories()
                .then(function (result) {
                    catList.items = result;
                    console.log("catList.items", catList.items);
                });
        };
    }

})();