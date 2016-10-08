(function(){
    'use strict';
    angular.module('mini.menu')
        .service('miniMenuResrc', miniMenuResrc);
    
    miniMenuResrc.$inject = [];
    function miniMenuResrc(){
        this.get = get;
        this.add = add;
        
        var data = [
            {
                id: 1,
                name: 'Chocolate-Mint Bars',
                price: 5.99
            },
            {
                id: 2,
                name: 'Lemon-Scented Blueberry Cupcakes',
                price: 3.99
            },
            {
                id: 3,
                name: 'Bourbon-Pecan Tart with Chocolate Drizzle',
                price: 1.99
            },
            {
                id: 4,
                name: 'Raspberry-Rhubarb Pie',
                price: 10.99
            },
            {
                id: 5,
                name: 'Classic Fudge-Walnut Brownies',
                price: 9.99
            },
            {
                id: 6,
                name: 'Nathan’s Lemon Cake',
                price: 20.99
            },
            {
                id: 7,
                name: 'Blueberry-Peach Cobbler',
                price: 15.99
            },
            {
                id: 8,
                name: 'Roasted Banana Bars with Browned Butter–Pecan Frosting',
                price: 2.99
            },
            {
                id: 9,
                name: 'Strawberry-Almond Cream Tart',
                price: 3.99
            },
            {
                id: 10,
                name: 'Hello Dolly Bars',
                price: 3.99
            }
        ]; 
        
        function get(){
            return data;
        }
        
        function add(id, name, price) {
            return data.push({
                id: id,
                name: name,
                price: price
            });
        }
    }
})();