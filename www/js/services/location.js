app.factory('Location', function($cordovaGeolocation, ReverseGeocode) { // LocalStorage

  // $rootscope.loc = LocalStorage.get('location');

    // if (!location) {
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };


  return {
    getAddress: function(cb) {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
          // console.log(position)
          // var lat = position.coords.latitude
          // var long = position.coords.longitude
          // LocalStorage.set('location', JSON.stringify(position.coords));

          // $rootScope.loc = {
          //   city: loc.city,
          //   lng: position.coords.longitude,
          //   lat: position.coords.latitute
          // };

          console.log(position);
          ReverseGeocode.getAddress(position.coords.latitute, position.coords.longitude, function(address) {
            $rootScope.address = address;
            cb($rootScope.address);
          });


        }, function(err) {
          console.log(err);
        });

      // geolocation.getLocation().then(function(data) {
      //   $rootScope.loc = {
      //     lat: data.coords.latitude,
      //     lng: data.coords.longitude
      //   };

      //   ReverseGeocode.getAddress($rootScope.loc.lat, $rootScope.loc.lng, function(address) {
      //     $rootScope.address = address;
      //     console.log($rootScope.address);
      //   });
      // });


    // if (!$rootScope.loc) {
    // GeoIp.getLocation().success(function(loc) {
      // console.log(loc);

      // ReverseGeocode.getAddress(loc.lat, loc.lon).success(function(address) {
      // console.log(address);

      // Event.query.lat = loc.lat;
      // Event.query.lng = loc.lng;


      // $rootScope.loc = {
      //   city: loc.city,
      //   lng: loc.lon,
      //   lat: loc.lat
      // };

      // LocalStorage.setObj('loc', $rootScope.loc);
      // console.log($rootScope.loc);

      // });
    // });
    // }
    }
  }

});
