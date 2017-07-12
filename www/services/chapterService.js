(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('chapterService', chapterService);

      chapterService.$inject = [];

      function chapterService(){

        var chapter = {};

        var _set = function (chapterSet) {
            chapter = chapterSet;
        }

        var _get = function () {
            return chapter;
        }


        return {
            set : _set,
            get : _get
        }
      }


})();
