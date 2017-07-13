(function(){
  'use strict';
   angular
      .module('app_services')
      .factory('postService', postService);

      postService.$inject = [];

      function postService(){

        var post = {};

        var _set = function (postSet) {
            post = postSet;
        }

        var _get = function () {
            return post;
        }


        return {
            set : _set,
            get : _get
        }
      }


})();
