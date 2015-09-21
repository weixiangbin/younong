angular.module('index.controllers', [])

    .controller('indexBaseCtrl', function($scope) {
        console.log('base');
    })

.controller('indexCtrl', function($scope) {
        console.log('index');
    })

.controller('cartCtrl', function($scope) {
        console.log('cart');

})

.controller('accountCtrl', function($scope) {
        console.log('account');

})

.controller('adminCtrl', function($scope) {
        console.log('admin');

});
