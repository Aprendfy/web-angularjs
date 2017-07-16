(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('postCtrl', postCtrl);

		   postCtrl.$inject = ['$state', 'categoryAPIService', 'postAPIService', 'postService','tokenControlService'];

		   function postCtrl($state, categoryAPIService, postAPIService, postService, tokenControlService){

		   	  var vm = this;
          vm.posts = [];
          vm.createPost = createPost; 
					vm.editPost = editPost;
					vm.goPost = goPost;
					vm.getPostsFromCategory = getPostsFromCategory;
					vm.post = {};
					vm.novo = true;
					vm.deletePost = deletePost;
					vm.categories = [];
					vm.queryCategory = '';
					vm.Posts = [];
					
          // var novel = novelService.get();
					// vm.novel = novel;
				
          if($state.current.name === 'post' || $state.current.name === 'post-new')
								getCategories();

					if($state.current.name === 'post-edit'){
						vm.novo = false;
						getCategories();
						var id = postService.get()._id;
						postAPIService.getPost(id).then(function(result){
							vm.post = result.data;
						});
					}

					function getPostsFromCategory(category){
						postAPIService.getAll(category).then(function(result){
							vm.posts = result;
						});
					}

					function getCategories(){
						categoryAPIService.getCategories()
							.then(function(result){
								vm.categories = result;
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
            postAPIService.getAll()
              .then(function(result){
                  vm.posts = result;
              });
          }

          function createPost(post){
						// const body = {
						// 	title: post.title,
						// 	category: post.category,
						// 	readingTime: post.readingTime,
						// 	level: post.level,
						// 	body: post.body,
						// 	image: post.image
						// };
						
						var fd = new FormData();
						fd.append('file', post.image);
						console.log('image do form', post.image);
							
            fd.append('title', post.title);
            fd.append('category', post.category);
            fd.append('readingTime', post.readingTime);
            fd.append('level', post.level);
            fd.append('body', post.body);
				

						postAPIService.add(fd)
							.then(function(result){
									console.log('creat post', result);
									$state.go('post');
							});

            // categoryAPIService.upload(fd).then(function (result) {
            //       category.users = userService.getCurrentUser();
            //       category.cover_url = result.img_url;
            //     categoryAPIService.add(category).then(function (result) {
            //        $state.go('category');
            //     });
						// });
          }

					function editPost(post){
						postAPIService.update(post)
							.then(function(result){
									$state.go('post');
							});
					}

       }
})();
