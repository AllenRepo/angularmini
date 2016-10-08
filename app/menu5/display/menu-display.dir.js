(function(){
    'use strict';
    angular.module('mini.menu')
        .directive('miniMenuDisplay', miniMenuDisplay);
        
    miniMenuDisplay.$inject = [];
    function miniMenuDisplay(){
        return {
            restrict: 'E',
            templateUrl: './app/menu5/display/menu-display.tpl.html',
            controllerAs: 'vm',
            controller: 'MiniMenuDisplayCtrl',
            bindToController: {
                miniData: '='
            },
            scope: {}
        };
    }
})();