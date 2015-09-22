
angular.module('index.services', [])

.factory('cart', function($http) {

        var goods = [];
        var isMore = true;
        return {
            getActivities: function (cb) {
                console.log(goods);
                cb(goods);
            },
            hasMore: function () {
                return isMore;
            },
            load: function (page,pageSize,version,cb) {
                $http.get(api+'/basket/'+customerId+'/'+page+'/'+pageSize+'/'+version).success(function (data) {
                    for (var i in data) {
                        goods.push(data[i]);
                    }
                    if (data.length < pageNumber) {
                        isMore = false;
                    }else{
                        isMore = true;
                    }
                    cb(goods);
                }).error(function (res) {
                    console.log(res);

                });
            }
        }


});
