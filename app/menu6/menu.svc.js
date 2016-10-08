(function(){
    'use strict';
    angular.module('mini.menu')
        .factory('miniMenuSvc', miniMenuSvc);
        
    miniMenuSvc.$inject = ['miniMenuResrc'];
    function miniMenuSvc(miniMenuResrc) {
        return {
            create: create
        };
        
        function create(name, price){
            var id = miniMenuResrc.get().length + 1;
            miniMenuResrc.add(id, name, price);
        }
    }
})();