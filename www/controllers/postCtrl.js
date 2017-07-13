(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('postCtrl', postCtrl);

		   postCtrl.$inject = ['$state', 'categoryService', 'postAPIService', 'postService'];

		   function postCtrl($state, categoryService, postAPIService, postService){

		   	  var vm = this;
          vm.posts = [];
          vm.createPost = createPost; 
					vm.editPost = editPost;
					vm.goPost = goPost;
					vm.post = {};
					vm.novo = true;
					vm.deletePost = deletePost;

          var novel = novelService.get();
					vm.novel = novel;
					
          if ($state.current.name === 'post')
              getPosts();

					if($state.current.name === 'post-edit'){
						vm.novo = false;
						var id = postService.get()._id;
						postAPIService.getPost(id).then(function(result){
							vm.post = result.data;
						});
					}
					function deletePost(id){
						postAPIService.deletar(id)
							.then(function(result){
									$state.go('post', {}, { reload: true });
							});
					}

					function goPost(post) {
							postService.set(post);
							$state.go('post-edit');
					}

          function getPosts() {
						var param = {};
						param.novel_id = novelService.get()._id;
            postAPIService.getAll(param)
              .then(function(result){
                  vm.posts = result.data;
              });
          }

          function createPost(post){
             var id = novelService.get()._id;
              post.novel = id;

              postAPIService.add(post)
                .then(function(result){
                    $state.go('post');
                });
          }

					function editPost(post){
						postAPIService.update(post)
							.then(function(result){
									$state.go('post');
							});
					}

       }
})();
