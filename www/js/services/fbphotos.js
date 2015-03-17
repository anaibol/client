app.factory('FbPhotos', function($http) {
  var base = 'https://graph.facebook.com';
  return {
    getFbPics: function(eid) {
      var request = '/' + eid + '/photos?access_token=' + fbtok;
      var url = base + request;
      var config = {
        'params': {
          'event_id': eid,
          'access_token': fbtok,
          'callback': 'JSON_CALLBACK'
        }
      };
      return $http.jsonp(url, config);
    }
  };
});