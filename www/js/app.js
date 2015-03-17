var app = angular.module('app', ['ionic', 'ngCordova', 'querystring', 'angularMoment']);

app.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {

  $ionicConfigProvider.views.forwardCache(true);

  // var appID = 755761764436101;
  // var version = "v2.0"; // or leave blank and default is v2.0
  // $cordovaFacebookProvider.browserInit(appID, version);


  // var options = {
  //   method: "feed",
  //   link: "http://example.com",
  //   caption: "Such caption, very feed."
  // };
  // $cordovaFacebook.showDialog(options)
  //   .then(function(success) {
  //     // success
  //   }, function(error) {
  //     // error
  //   });

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

  .state('view', {
    url: '/:eid',
    templateUrl: "templates/view.html",
    controller: 'ViewCtrl',
    resolve: {
      ev: function(Event, $stateParams) {
        console.log($stateParams);
        return Event.getOne($stateParams.eid);
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});