(function() {
    'use strict';
    angular
			.module('app_controllers')
			.controller('categoryCtrl', categoryCtrl);

    categoryCtrl.$inject = ['$http', 'Upload', 'userService', 'categoryAPIService', '$state', 'categoryService'];

    function categoryCtrl($http, Upload, userService, categoryAPIService, $state, categoryService) {

        var vm = this;
        vm.cadastrar = cadastrar;
        vm.categories = [];
        vm.editCategory = editCategory;
        vm.category = {};
        vm.goCategory = goCategory;
        vm.novo = true;


        if ($state.current.name === 'category')
            getCategories();

        if($state.current.name === 'category-edit'){
          vm.novo = false;
          var id = categoryService.get()._id;
          categoryAPIService.getCategory(id).then(function(result){
            vm.category = result;
            console.log('result', result);
          });
        }

        function goCategory(category){
            categoryService.set(category);
            $state.go('category-edit');
        }

        function editCategory(category){
          categoryAPIService.update(category).then(function (result) {
            console.log('resultado de update category', result);
             $state.go('category');
          });
        }

        function getCategories(){
          categoryAPIService.getCategories().then(function(result){
            console.log('getcategories', result);
              vm.categories = result;
          });
        }

        function cadastrar(category) {
            const body = {
              name: category.name
            };
            categoryAPIService.add(body).then(function (result) {
              console.log('result cadastro de categoria', result);
                $state.go('category');
            });
            // var fd = new FormData();
            // fd.append('cover', category.cover);

            // categoryAPIService.upload(fd).then(function (result) {
            //       category.users = userService.getCurrentUser();
            //       category.cover_url = result.img_url;
            //     categoryAPIService.add(category).then(function (result) {
            //        $state.go('category');
            //     });
            // });
        }
    }

})();
