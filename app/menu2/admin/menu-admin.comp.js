(function(){
    'use strict';
    angular.module('mini.menu')
        .component('miniMenuAdmin', {
            templateUrl: './app/menu2/admin/menu-admin.tpl.html',
            controllerAs: 'vm',
            controller: controller,
            bindings: {
                miniText: '@',          //Preferred
                miniUniDirection: '<',  //Preferred
                miniTwoWayBinding: '=',
                miniFunction: '&'
            }
        });
        
        controller.$inject = ['miniMenuResrc', 'miniMenuSvc'];
        function controller(miniMenuResrc, miniMenuSvc) {
            var vm = this;
            //handlers
            vm.onSubmit = onSubmit;
            
            //form bindings
            vm.data = null;
            vm.name = null;
            vm.price = null;
            
            vm.$onInit = function(){
                vm.data = miniMenuResrc.get();
            }
            
            function onSubmit(form){
                if (form.$valid) {
                    miniMenuSvc.create(vm.name, vm.price);
                }
            }
        }
})();