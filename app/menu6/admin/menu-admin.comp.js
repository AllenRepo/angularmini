(function(){
    'use strict';
    angular.module('mini.menu')
        .component('miniMenuAdmin', {
            templateUrl: './app/menu6/admin/menu-admin.tpl.html',
            controllerAs: 'vm',
            controller: Controller,
            bindings: {
                miniText: '@',          //Preferred
                miniUniDirection: '<',  //Preferred
                miniTwoWayBinding: '=',
                miniFunction: '&'
            }
        });
        
        Controller.$inject = ['miniMenuResrc', 'miniMenuSvc'];
        function Controller(miniMenuResrc, miniMenuSvc) {
            var vm = this;
            //handlers
            vm.onSubmit = onSubmit;
            vm.onEdit = onEdit;
            
            //form bindings
            vm.mode = 'create';
            vm.data = null;
            vm.name = null;
            vm.price = null;
            vm.id = null;
            
            vm.$onInit = function(){
                vm.data = miniMenuResrc.get();
            }
            
            function onSubmit(form){
                if (form.$valid) {
                    if (vm.mode == 'create') {
                        miniMenuSvc.create(vm.name, vm.price);   
                    }
                    else if (vm.mode == 'edit') {
                        miniMenuResrc.update(vm.id, vm.name, vm.price);
                    }
                    resetForm(form);
                }
            }
            
            function onEdit(id) {
                var data = miniMenuResrc.get();
                var item;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        item = data[i];
                        break;
                    }
                }
                vm.id = id;
                vm.name = item.name;
                vm.price = item.price;
                vm.mode = 'edit';
            }
            
            function resetForm(form) {
                form.$setPristine();
                form.$setUntouched();
                vm.name = null;
                vm.id = null;
                vm.price = null;
                vm.mode = 'create';
            }
        }
})();