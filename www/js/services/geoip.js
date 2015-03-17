app.service('GeoIp', function($http) {
  return {
    getLocation: function(lat, lng) {
      return $http.get('http://ip-api.com/json');
    }
  };
});