(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('categoryService', categoryService);

      categoryService.$inject = [];

      function categoryService(){

        var category = {};

        var _set = function (categorySelected) {
            category = categorySelected;
        }

        var _get = function () {
            return category;
        }


        return {
            set : _set,
            get : _get
        }
      }


})();
