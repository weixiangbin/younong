// Ionic Starter App

angular.module('starter', ['ionic', 'index.controllers', 'index.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/index/tabs.html'
  })

  .state('tab.index', {
    url: '/index',
    views: {
      'tab-index': {
        templateUrl: 'templates/index/tab-index.html',
        controller: 'indexCtrl'
      }
    }
  })

  .state('tab.cart', {
      url: '/cart',
      views: {
        'tab-cart': {
          templateUrl: 'templates/index/tab-cart.html',
          controller: 'cartCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/index/tab-account.html',
        controller: 'accountCtrl'
      }
    }
  })
      .state('tab.admin', {
            url: '/admin',
            views: {
                'tab-admin': {
                    templateUrl: 'templates/index/tab-admin.html',
                    controller: 'adminCtrl'
                }
            }
        });

  $urlRouterProvider.otherwise('/tab/index');

});
