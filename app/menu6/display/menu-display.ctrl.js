(function(){
    'use strict';
    angular.module('mini.menu')
        .controller('MiniMenuDisplayCtrl', MiniMenuDisplayCtrl);
        
    MiniMenuDisplayCtrl.$inject = [];
    function MiniMenuDisplayCtrl(){
        var vm = this;
        //handlers
        vm.onEdit = onEdit;
        
        function onEdit(id){
            vm.miniOnEdit()(id);
        }
        
        // function onEdit(id){
        //     vm.miniOnEdit(id);
        // }
    }
})();