app.run(function($rootScope, $state, $stateParams, $window, $ionicPlatform, $cordovaDialogs, $cordovaToast, $cordovaPush, $cordovaGeolocation, $cordovaBackgroundGeolocation, LocalStorage, amMoment, GeoIp, Event, ReverseGeocode) {

  var location = LocalStorage.get('location');

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

  $rootScope.isMobile = $window.isMobile;

  $rootScope.loc = LocalStorage.getObj('loc');
  console.log(1);
  if (!$rootScope.loc) {
    GeoIp.getLocation().success(function(loc) {
      // console.log(loc);

      ReverseGeocode.getAddress(loc.lat, loc.lon).success(function(address) {
        // console.log(address);

        Event.query.lng = loc.lng;
        Event.query.lat = loc.lat;


        $rootScope.loc = {
          city: loc.region,
          lng: loc.lng,
          lat: loc.lat
        };

        LocalStorage.setObj('loc', $rootScope.loc);
        // console.log($rootScope.loc);

      });
    });
  }
  $ionicPlatform.ready(function() {

    // if (!location) {
    //   var posOptions = {
    //     timeout: 10000,
    //     enableHighAccuracy: false
    //   };
    //   console.log(123);
    //   $cordovaGeolocation
    //     .getCurrentPosition(posOptions)
    //     .then(function(position) {
    //       // console.log(position)
    //       // var lat = position.coords.latitude
    //       // var long = position.coords.longitude
    //       LocalStorage.set('location', JSON.stringify(position.coords));
    //       location = position.coords;

    //     }, function(err) {
    //       console.log(err);
    //     });
    // } else {
    //   console.log(JSON.parse(location));
    // }

    // geolocation.getLocation().then(function(data) {
    //   $rootScope.loc = {
    //     lat: data.coords.latitude,
    //     lng: data.coords.longitude
    //   };

    //   reverseGeocode.getAddress($rootScope.loc.lat, $rootScope.loc.lng, function(address) {
    //     $rootScope.address = address;
    //     console.log($rootScope.address);
    //   });
    // });

    // $window.navigator.geolocation.getCurrentPosition(function(location) {
    //   console.log('Location from Phonegap');
    // });

    // var bgGeo = $window.plugins.backgroundGeoLocation;

    // var callbackFn = function(location) {
    //   console.log('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
    //   // Do your HTTP request here to POST location to your server.
    //   //
    //   //
    //   // yourAjaxCallback.call(this);
    // };

    // var failureFn = function(error) {
    //   console.log('BackgroundGeoLocation error');
    // };

    // var options = {
    //   url: 'http://192.168.56.1:3000/api/geolocation', // <-- Android ONLY:  your server url to send locations to
    //   params: {
    //     auth_token: 'user_secret_auth_token', //  <-- Android ONLY:  HTTP POST params sent to your server when persisting locations.
    //     foo: 'bar' //  <-- Android ONLY:  HTTP POST params sent to your server when persisting locations.
    //   },
    //   headers: { // <-- Android ONLY:  Optional HTTP headers sent to your configured #url when persisting locations
    //     "X-Foo": "BAR"
    //   },
    //   desiredAccuracy: 10,
    //   stationaryRadius: 20,
    //   distanceFilter: 30,
    //   notificationTitle: 'Background tracking', // <-- android only, customize the title of the notification
    //   notificationText: 'asd asd', // <-- android only, customize the text of the notification
    //   activityType: 'AutomotiveNavigation',
    //   debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
    //   stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    // };

    // // BackgroundGeoLocation is highly configurable.
    // $cordovaBackgroundGeolocation.configure(options).then(
    //   null, // Background never resolves
    //   function(err) { // error callback
    //     console.error(err);
    //   },
    //   function(location) { // notify callback
    //     console.log(location);
    //   });


    // $cordovaBackgroundGeolocation.start();


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

    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      alert(123);
      switch (notification.event) {
        case 'registered':
          if (notification.regid.length > 0) {
            alert('registration ID = ' + notification.regid);
          }
          break;

        case 'message':
          // this is the actual push notification. its format depends on the data model from the push server
          alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
          break;

        case 'error':
          alert('GCM error = ' + notification.msg);
          break;

        default:
          alert('An unknown GCM event has occurred');
          break;
      }
    });
  });
});