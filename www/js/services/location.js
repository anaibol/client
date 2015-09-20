app.factory('Location', function($cordovaGeolocation, ReverseGeocode, GeoIp) { // LocalStorage

  // $rootscope.loc = LocalStorage.get('location');

    // if (!location) {
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };


  return {
    getAddress: function(cb) {
      navigator.geolocation.getCurrentPosition(function(position) {
          // LocalStorage.set('location', JSON.stringify(position.coords));

          var loc = {
            city: 'paris',
            lng: position.coords.longitude,
            lat: position.coords.latitude
          };

          cb(loc);

          // console.log(JSON.str1ingify(position));
          // ReverseGeocode.getAddress(position.coords.latitute, position.coords.longitude, function(address) {
          //   $rootScope.address = address;
          //   cb($rootScope.address);
          // });


        }, function(err) {
          console.log(JSON.stringify(err));
        });

      // $cordovaGeolocation
      //   .getCurrentPosition(posOptions)
      //   .then(function(position) {
      //     console.log(444);
      //     var lat = position.coords.latitude
      //     var long = position.coords.longitude
      //     console.log(lat);
          // LocalStorage.set('location', JSON.stringify(position.coords));

          // $rootScope.loc = {
          //   city: loc.city,
          //   lng: position.coords.longitude,
          //   lat: position.coords.latitute
          // };

          // console.log(JSON.str1ingify(position));
          // ReverseGeocode.getAddress(position.coords.latitute, position.coords.longitude, function(address) {
          //   $rootScope.address = address;
          //   cb($rootScope.address);
          // });


        // }, function(err) {
        //   console.log(JSON.stringify(err));
        // });

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
      //   // ReverseGeocode.getAddress(loc.lat, loc.lon, function(address) {
      //     console.log(JSON.stringify(loc));
      //   var loc = {
      //     city: loc.city,
      //     lng: loc.lon,
      //     lat: loc.lat
      //   };

      //   // LocalStorage.setObj('loc', $rootScope.loc);
      //   cb(loc);

      //   // });
      // });
    // }
    }
  }

});
