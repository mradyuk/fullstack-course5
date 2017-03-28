(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categories', {
                url: '/cat-list',
                templateUrl: 'src/templates/main-categorieslist.template.html',
                controller: 'CategoriesController as catList'
            })
            .state('items', {
                url: '/items-list/{catShortName}',
                templateUrl: 'src/templates/main-itemslist.template.html',
                controller: 'ItemsController as itemsList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.catShortName)
                                .then(function (result) {
                                    return result;
                                });
                        }]
                }
            });
    }

})();
