var app = angular.module('app', ['ionic', 'ngCordova', 'querystring'])

app.run(function($ionicPlatform, $cordovaSplashscreen, $cordovaDialogs, $cordovaToast, $cordovaPush, $rootScope, $window) {
  // $cordovaSplashscreen.show();

  $ionicPlatform.ready(function() {


    // if (window.cordova.platformId == "browser") {
    //   facebookConnectPlugin.browserInit(appId, version);
    //   // version is optional. It refers to the version of API you may want to use.
    // }

    // facebookConnectPlugin.login([], function(data) {
    //   console.log(data)
    // }, function(err) {
    //   console.log(err)
    // });

    // window.plugins.googleplus.login({},
    //   function(obj) {
    //     console.log(JSON.stringify(obj)); // do something useful instead of alerting
    //   },
    //   function(msg) {
    //     console.log('error: ' + msg);
    //   }
    // );

    // $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
    //   alert(123);
    //   switch (notification.event) {
    //     case 'registered':
    //       if (notification.regid.length > 0) {
    //         alert('registration ID = ' + notification.regid);
    //       }
    //       break;

    //     case 'message':
    //       // this is the actual push notification. its format depends on the data model from the push server
    //       alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
    //       break;

    //     case 'error':
    //       alert('GCM error = ' + notification.msg);
    //       break;

    //     default:
    //       alert('An unknown GCM event has occurred');
    //       break;
    //   }
    // });
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  // .state('app', {
  //   url: "/app",
  //   abstract: true,
  //   templateUrl: "templates/menu.html",
  //   controller: 'AppCtrl'
  // })

  // .state('app.search', {
  //   url: "/search",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/search.html"
  //     }
  //   }
  // })

  // .state('app.browse', {
  //   url: "/browse",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/browse.html"
  //     }
  //   }
  // })
  //   .state('app.playlists', {
  //     url: "/playlists",
  //     views: {
  //       'menuContent': {
  //         templateUrl: "templates/playlists.html",
  //         controller: 'PlaylistsCtrl'
  //       }
  //     }
  //   })

  // .state('app.single', {
  //   url: "/playlists/:playlistId",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlist.html",
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  .state('list', {
    // url: '{city}{slash:[/]?}{tag:[^0-9]}',
    // url: '/{city}',
    // url: '/{city}{slash:[/]?}{tag}',
    // url: '/:city?since?tags?sortBy',
    url: '/',
    // views: {
    //   'menuContent': {
    //     templateUrl: "templates/search.html"
    //   },
    // views: {
    //   'menuContent': {
    //     templateUrl: "templates/list.html",
    //     controller: 'ListCtrl'
    //   }
    // },
    templateUrl: "templates/list.html",
    controller: 'ListCtrl',
    resolve: {
      evs: function(Event, $stateParams) {
        return Event.get($stateParams);
      }
    }
  })



  // .state('app.search', {
  //   url: "/search",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/search.html"
  //     }
  //   }
  // })

  // .state('list.view', {
  //   url: '/:slug/:eid',
  //   templateUrl: "templates/view.html",
  //   controller: 'ViewCtrl',
  //   parent: 'list',
  //   resolve: {
  //     ev: function(Event, $stateParams) {
  //       return Event.getOne($stateParams.eid);
  //     }
  //   }
  // });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});