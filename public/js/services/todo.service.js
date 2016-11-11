
(function() {
  angular.module('mean-todos')
        .factory('TodoService', TodoService);

  TodoService.$inject = ['$http'];

  function TodoService($http){
    init();
    var todos = [];
    return {
      get: getAllTodos,
      create: createOneTodo,
      update: updateOneTodo,
      Delete: deleteOneTodo,
    };
    function init(){ //this is going to make our first data req on file load
      $http.get('/todos')
           .then(function(response){
             todos = response.data.todos;
           })
           .catch(function(err){
             console.log(err);
           });
    }
    function getAllTodos(){
      return todos;
    }
    function createOneTodo(todo){}
    function updateOneTodo(index, todo){}
    function deleteOneTodo(index){}
  }
}());
