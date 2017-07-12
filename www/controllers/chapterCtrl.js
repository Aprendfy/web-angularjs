(function(){
	'use strict';
	angular.module('app_controllers')
		   .controller('chapterCtrl', chapterCtrl);

		   chapterCtrl.$inject = ['$state', 'novelService', 'chapterAPIService', 'chapterService'];

		   function chapterCtrl($state, novelService, chapterAPIService, chapterService){

		   	  var vm = this;
          vm.chapters = [];
          vm.createChapter = createChapter;
					vm.editChapter = editChapter;
					vm.goChapter = goChapter;
					vm.chapter = {};
					vm.novo = true;
					vm.deleteChapter = deleteChapter;

          var novel = novelService.get();
					vm.novel = novel;
					
          if ($state.current.name === 'chapter')
              getChapters();

					if($state.current.name === 'chapter-edit'){
						vm.novo = false;
						var id = chapterService.get()._id;
						chapterAPIService.getChapter(id).then(function(result){
							vm.chapter = result.data;
						});
					}
					function deleteChapter(id){
						chapterAPIService.deletar(id)
							.then(function(result){
									$state.go('chapter', {}, { reload: true });
							});
					}

					function goChapter(chapter) {
							chapterService.set(chapter);
							$state.go('chapter-edit');
					}

          function getChapters() {
						var param = {};
						param.novel_id = novelService.get()._id;
            chapterAPIService.getAll(param)
              .then(function(result){
                  vm.chapters = result.data;
              });
          }

          function createChapter(chapter){
             var id = novelService.get()._id;
              chapter.novel = id;

              chapterAPIService.add(chapter)
                .then(function(result){
                    $state.go('chapter');
                });
          }

					function editChapter(chapter){
						chapterAPIService.update(chapter)
							.then(function(result){
									$state.go('chapter');
							});
					}

       }
})();
