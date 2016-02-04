// $cordovaBackgroundGeolocation

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
