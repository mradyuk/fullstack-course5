(function () {
    'use strict';

    angular.module('data')
        .component('categoriesList', {
            templateUrl: 'src/templates/categorieslist.template.html',
            bindings: {
                items: '<'
            }
        });

})();