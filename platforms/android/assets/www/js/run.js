app.run(function($rootScope, $state, $stateParams, $window, $ionicPlatform, $cordovaDialogs, $cordovaToast, $cordovaPush, $cordovaGeolocation, LocalStorage, amMoment, GeoIp, Event, ReverseGeocode) {
  $ionicPlatform.ready(function() {
    var location = LocalStorage.get('location');

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

    if (!LocalStorage.loc) {
      GeoIp.getLocation().success(function(loc) {
        console.log(loc);

        ReverseGeocode.getAddress(loc.lat, loc.lng, function(address) {
          console.log(address);
        });

        // Event.query.lng = loc.lng;
        // Event.query.lat = loc.lat;


        // $rootScope.loc = {
        //   city: loc.region,
        //   lng: loc.lng,
        //   lat: loc.lat
        // }

        // LocalStorage.setObj('loc', $rootScope.loc);
        // console.log($rootScope.loc);
      });
    }


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