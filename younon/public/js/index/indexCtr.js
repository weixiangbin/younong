angular.module('index.controllers', [])

    .controller('indexBaseCtrl', function($scope,cart) {
        var page=0;
        var pageSize=100;
        var version=0;
        $scope.number=0;
        cart.load(page,pageSize,version,function(data){
            if(data[1]==='ok'){
                data[2].forEach(function (goods) {
                    $scope.number=$scope.number+goods.quantity;
                });
            }
        });
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
