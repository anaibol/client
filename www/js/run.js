app.run(function($rootScope, $state, $stateParams, $window, $ionicPlatform, $cordovaPush, amMoment, GeoIp, Event, Location, Share) {

  $rootScope.Share = Share;

  $window.$rootScope = $rootScope;

  $rootScope.lang = navigator.language;

  amMoment.changeLocale($rootScope.lang);

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $rootScope.today = new Date();

  $rootScope.today.setSeconds(0);
  $rootScope.today.setMinutes(0);
  $rootScope.today.setHours(0);

  $rootScope.user = $window.user;

  $ionicPlatform.ready(function() {
    Location.getAddress(function(loc) {
      $rootScope.loc = loc;
    });

    // $rootScope.$on('$stateChangeSuccess', function(fromState, toState) {
    //   console.log(toState);
    //   if (toState.name.indexOf('events.list') !== -1) {
    //     $ionicNavBarDelegate.showBackButton(true);
    //   }

    // });

    // if (window.cordova.platformId == "browser") {
    //   facebookConnectPlugin.browserInit(appId, version);
    //   // version is optional. It refers to the version of API you may want to use.
    // }

    // $cordovaFacebook.login([], function(data) {
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
