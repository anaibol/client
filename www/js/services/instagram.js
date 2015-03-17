app.factory('Instagram', function($http) {
  var base = "https://api.instagram.com/v1";

  return {
    getLocationId: function(lat, lng) {
      var request = '/locations/search';
      var url = base + request;
      var config = {
        'params': {
          'access_token': tokenInstagram,
          'lat': lat,
          'lng': lng,
          'callback': 'JSON_CALLBACK'
        }
      };
      return $http.jsonp(url, config);
    },
    getPhotosByLocationId: function(locationId, count) {
      var request = '/locations/' + locationId + '/media/recent';
      var url = base + request;
      var config = {
        'params': {
          'access_token': tokenInstagram,
          'count': count,
          'callback': 'JSON_CALLBACK'
        }
      };
      return $http.jsonp(url, config);
    }
  };
});