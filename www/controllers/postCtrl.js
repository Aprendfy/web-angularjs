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
					vm.removeImage = removeImage;
					
          // var novel = novelService.get();
					// vm.novel = novel;
				
          if($state.current.name === 'post' || $state.current.name === 'post-new')
								getCategories();

					if($state.current.name === 'post-edit'){
						vm.novo = false;
						getCategories();
						vm.post = postService.get();
						console.log('vm post', vm.post);
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
					function removeImage(){
						delete vm.post.image; 
					}

          function createPost(post){			
						var fd = new FormData();
						if(post.image){
							fd.append('file', post.image);
						}
							
            fd.append('title', post.title);
            fd.append('category', post.category);
            fd.append('readingTime', post.readingTime);
            fd.append('level', post.level);
            fd.append('body', post.body);	

						postAPIService.add(fd)
							.then(function(result){
									$state.go('post');
							});
          }

					function editPost(post){

						var fd = new FormData();
						if (post.image){
							fd.append('file', post.image);
						}
							
            fd.append('title', post.title);
            fd.append('category', post.category);
            fd.append('readingTime', post.readingTime);
            fd.append('level', post.level);
            fd.append('body', post.body);	

						postAPIService.update(fd, post._id)
							.then(function(result){
									$state.go('post');
							});
					}

       }
})();
