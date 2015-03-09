// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $cordovaPush, $cordovaDialogs, $cordovaToast, $cordovaPush, $rootScope, $window) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if ($window.cordova && $window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if ($window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    var config = {
      "senderID": "456801008595",
      "ecb": "onNotificationGCM"
    };

    $cordovaPush.register(config).then(function(result) {
      console.log(result);
      // Success
    }, function(err) {
      console.log(err);
      // Error
    });

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
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});


if (window.cordova.platformId == "browser") {
  facebookConnectPlugin.browserInit(appId, version);
  // version is optional. It refers to the version of API you may want to use.
}

facebookConnectPlugin.login([], function(data) {
  console.log(data)
}, function(err) {
  console.log(err)
});

window.plugins.googleplus.login({},
  function(obj) {
    console.log(JSON.stringify(obj)); // do something useful instead of alerting
  },
  function(msg) {
    console.log('error: ' + msg);
  }
);