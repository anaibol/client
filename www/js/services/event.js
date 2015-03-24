app.factory('Event', function($q, $http, $rootScope, $querystring) {
  function getStringDate(aDate) {
    var dd = aDate;
    var yy = dd.getYear();
    var mm = dd.getMonth() + 1;
    dd = dd.getDate();
    if (yy < 2000) {
      yy += 1900;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    var rs = yy + "-" + mm + "-" + dd;
    return rs;
  }

  _.mixin({
    compactObject: function(o) {
      var clone = _.clone(o);
      _.each(clone, function(v, k) {
        if (!v) {
          delete clone[k];
        }
      });
      return clone;
    }
  });

  return {
    // query: {},
    getOne: function(eid) {
      var that = this;

      var deferred = $q.defer();

      $http.get('http://famosas.tv:3000/api/events/' + eid).success(function(ev) {
        ev = that.normalize(ev);
        deferred.resolve(ev);
      });
      // $http.get('/ev.json').success(function(ev) {
      //   ev = that.normalize(ev);
      //   deferred.resolve(ev);
      // });

      return deferred.promise;
    },
    get: function(params) {
      query = {
        since: params.since || getStringDate($rootScope.today),
        // city: params.country || $rootScope.loc.city,
        lng: params.lng || $rootScope.loc.lng,
        lat: params.lat || $rootScope.loc.lat,
        // tags: params.tags || query.tags,
        // sortBy: params.sortBy || query.sortBy
      };

      return this.runQuery(query);
    },
    getMore: function() {
      var limit;

      if ($rootScope.isMobile) {
        limit = 5;
      } else {
        limit = 30;
      }

      if (!query.skip) {
        query.skip = limit;
      } else {
        query.skip += limit;
      }

      return this.runQuery();
    },
    normalize: function(ev) {
      if (ev.attending_count >= 99) {
        ev.tags.push('popular');
      }

      if (ev.price) {
        if (ev.price.num === 0) {
          ev.tags.push('free');
        }
      }

      if (ev.festival) {
        ev.tags.push('festival');
      }

      ev.tags = _.uniq(ev.tags);

      ev.start_time = new Date(ev.start_time);
      ev.end_time = new Date(ev.end_time);
      ev.update_time = new Date(ev.update_time);

      return ev;
    },
    runQuery: function(query) {
      var that = this;
      var deferred = $q.defer();

      // $http.get('/evs.json').success(function(evs) {

      $http.get('http://famosas.tv:3000/api/events?' + $querystring.toString(_.compactObject(query))).success(function(evs) {
        var ev = {};

        for (var i = evs.length - 1; i >= 0; i--) {
          ev = evs[i];
          ev = that.normalize(ev);
        }

        deferred.resolve(evs);
      });

      return deferred.promise;
    },

  };
});