
angular.module('index.services', [])

.factory('cart', function($http) {

        var goods = [];
        var goodsNumber={number:0};
        var changeGoodsNumber=function(){
            goodsNumber.number=0;
            for (var i in goods) {
                goodsNumber.number=goodsNumber.number+goods[i].quantity;
            }
            console.log(goodsNumber.number);
        }
        var load=function () {
            $http.get(api+'/basket/'+customerId+'/0/100/0').success(function (data) {

                if(data.code===0){
                    for (var i in data.results) {
                        goods.push(data.results[i]);
                    }
                }
                changeGoodsNumber();
            }).error(function (res) {
                console.log(res);

            });
        }
        load();

        return {
            getGoods: function (cb) {
                cb(goods);
            },
            getGoodsNumber:function(cb){
                cb(goodsNumber);
            },
            deleteGoods:function(index,cb){
                goods.splice(index,1);
                changeGoodsNumber();
                console.log(goods);
            },
            hasMore: function () {
                return isMore;
            }

        }


});
