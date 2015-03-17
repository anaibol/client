app.service('ReverseGeocode', function($http) {
  // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&location_type=ROOFTOP&result_type=street_address&key=API_KEY

  return {
    getAddress: function(lat, lng) {
      return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&region=ar&language=es&key=AIzaSyCXNnoeEVyQq39OBD0SF3KOxU3uuG54doU');
    }
  };


  // var geocoder = new google.maps.Geocoder();

  // return {
  //   getAddress: function(lat, lng, cb) {
  //     var latlng = new google.maps.LatLng(lat, lng);

  //     geocoder.geocode({
  //       'latLng': latlng
  //     }, function(results, status) {
  //       if (status == google.maps.GeocoderStatus.OK) {
  //         if (results[1]) {
  //           cb(results[1]);
  //         }
  //       } else {
  //         element.text('Geocoder failed due to: ' + status);
  //       }
  //     });
  //   }
  // };

  // return {
  //   getAddress: function(lat, lng, cb) {
  //     console.log(123);

  //     var geocoder = plugin.google.maps.Geocoder;

  //     var latlng = plugin.google.maps.LatLng;

  //     geocoder.geocode({
  //       'latLng': lat + ',' + lng
  //     }, function(results, status) {
  //       //alert("Else loop1");
  //       console.log(results);
  //       console.log(status);
  //       if (status == plugin.google.maps.GeocoderStatus.OK) {
  //         if (results[0]) {
  //           var add = results[0].formatted_address;
  //           var value = add.split(",");

  //           count = value.length;
  //           country = value[count - 1];
  //           state = value[count - 2];
  //           city = value[count - 3];
  //           alert("city name is: " + city);


  //         } else {
  //           alert("address not found");
  //         }
  //       } else {
  //         //document.getElementById("location").innerHTML="Geocoder failed due to: " + status;
  //         //alert("Geocoder failed due to: " + status);
  //       }
  //     });
  //   }
  // };

});