app.controller('ViewCtrl', function($scope, $rootScope, $state, $stateParams, ezfb, $modal, $http, Instagram, ev, fbphoto, fbvideos, $templateCache, $window) {
  $scope.ev = ev;
  if (ev.promoted == true) {
    $http({
      method: 'GET',
      data: {
        eid: $scope.ev.eid
      },
      url: '/api/promote/checkend/' + $scope.ev.eid
    }).success(function(data) {
      if (data) {
        $scope.ev = data;
      }
    });
  }
  $scope.descriptionOpened = false;
  if ($scope.ev.price.edited) {
    $scope.ev.price.full = $scope.ev.price.edited;
  }
  $scope.loc = $rootScope.loc.citySlug;
  $scope.share = function() {
    if (!$scope.user) {
      document.getElementById('confirmbox').style.display = "block"; //this is the replace of this line
      document.getElementById('acceptbutton').onclick = function() {
        $window.location = '/auth/facebook?redirectUrl=/' + $rootScope.loc.citySlug + '/' + $scope.ev.slug + '/' + $scope.ev.eid;
      };
      document.getElementById('cancelbutton').onclick = function() {
        document.getElementById('confirmbox').style.display = "none";
        return false;
      };
    } else {
      ezfb.ui({
          method: 'share',
          href: $window.location.href,
        },
        function(response) {
          console.log(response);
        }
      );
    }
  };
  $scope.editing = false;
  $scope.today = new Date();

  if ($rootScope.user) {
    $http.get('/api/rsvp/' + $scope.ev.eid + '/attendings').success(function(result) {
      $scope.ev.attending = result;
      if ($scope.ev.attending.indexOf(parseInt($rootScope.user.facebook.id)) >= 0) {
        $scope.attending = 'Leave';
        $http.post('/api/rsvp/' + $scope.ev.eid + '/rsvp');
      } else {
        $scope.attending = 'Join';
      }
    });
  } else if (!$rootScope.user) {
    $scope.attending = 'Join';
  }

  fbvideos.getFbVideo($scope.ev.eid).success(function(feed) {
    if (feed) {
      fbvideos.getFbLink(feed, function(res) {
        if (res)
          $scope.videos = res;
      });
    }
  });

  fbphoto.getFbPics($scope.ev.eid).success(function(res) {
    var pics = res.data;
    $scope.fbpics = [];

    if (!pics) {
      return;
    }

    for (var i = pics.length - 1; i >= 0; i--) {
      var pic = pics[i];

      var image = {
        url: 'https://graph.facebook.com/' + pic.id + '/picture?width=9999&height=9999',
        thumbUrl: 'https://graph.facebook.com/' + pic.id + '/picture?width=350&height=350'
      };

      $scope.fbpics.push(image);
    }
  });

  Instagram.getLocationId($scope.ev.venue.coord.lat, $scope.ev.venue.coord.lng).success(function(res) {
    var locations = res.data;

    if (!locations.length) {
      return;
    }

    Instagram.getPhotosByLocationId(locations[0].id, 10).success(function(res) {
      var pics = res.data;

      if (!pics) {
        return;
      }

      $scope.instagramPhotos = [];

      for (var i = res.data.length - 1; i >= 0; i--) {
        var new_url = 'https://' + res.data[i].images.standard_resolution.url.substring(7);
        var new_thumbUrl = 'https://' + res.data[i].images.low_resolution.url.substring(7);
        $scope.instagramPhotos[i] = {
          url: new_url,
          thumbUrl: new_thumbUrl
        };
      }
    });
  });

  if ($rootScope.isMobile) {
    $http.get('/api/resolve/' + $scope.ev.eid + '/results');
  }

  $scope.purchase = function() {
    var handler = StripeCheckout.configure({
      key: $window.stripePublicKey,
      image: $scope.ev.pic_cover.source,
      token: function(token) {
        console.log(token);

        if ($scope.ev.price.full.indexOf('$') > -1) {
          currency = 'usd';
        } else if ($scope.ev.price.full.indexOf('€') > -1) {
          currency = 'eur';
        } else {
          return;
        }

        var data = {
          stripeToken: token,
          amount: $scope.ev.price.num * 100,
          currency: currency
        };

        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
        $http.post('/api/events/' + $scope.ev.eid + '/purchase', data).then(function(res) {
          console.log(res);
        });
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '1 ticket for ' + $scope.ev.name + ' (' + $scope.ev.price.full + ')',
      amount: $scope.ev.price.num * 100
    });
  };

  $scope.getCoverTopPosition = function() {
    if (elm && ev.pic_cover && ev.pic_cover.source) {
      var offset_y = ev.pic_cover.offset_y;

      var cover_w = 740;
      var cover_h = 295;
      var elm = document.querySelector('.header > img');
      var img_w = elm.offsetWidth;
      var img_h = elm.offsetHeight;
      var real_img_h = (cover_w * img_h / img_w) - cover_h;
      var top = parseInt(real_img_h * offset_y / 100);
      return ('-' + top + 'px');
    }
  };

  $scope.coverTopPosition = $scope.getCoverTopPosition();

  $scope.promote = function() {
    if (!$scope.user) {
      document.getElementById('confirmbox').style.display = "block"; //this is the replace of this line
      document.getElementById('acceptbutton').onclick = function() {
        $window.location = '/auth/facebook?redirectUrl=/' + $rootScope.loc.citySlug + '/' + $scope.ev.slug + '/' + $scope.ev.eid;
      };
      document.getElementById('cancelbutton').onclick = function() {
        document.getElementById('confirmbox').style.display = "none";
        return false;
      };
    }
    var modalInstance = $modal.open({
      templateUrl: 'event/promote',
      controller: 'EventPromoteCtrl',
      resolve: {
        ev: function() {
          return $scope.ev;
        }
      }
    });

    modalInstance.result.then(function(selected) {}, function() {});
  };


  $scope.activateGame = function(ev) {
    var handler = StripeCheckout.configure({
      key: $window.stripePublicKey,
      image: $scope.ev.pic_cover.source,
      token: function(token) {
        var currency = 'eur';

        var data = {
          stripeToken: token,
          amount: 10 * 100,
          currency: currency
        };

        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
        $http.post('/api/events/' + $scope.ev.eid + '/activate-game', data).then(function(res) {
          $scope.ev.gameactive = true;
        });
      }
    });

    handler.open({
      name: 'Activate contest',
      description: 'Contest for event ' + $scope.ev.description,
      amount: 10 * 100
    });
  };

  $scope.boostPlayer = function(player) {
    $http.post('/api/boost/' + $scope.ev.eid + '/' + player.uid);
    $http.post('/api/boost/update/' + $scope.ev.eid + '/' + player.uid);
  };

  $scope.inviteFriends = function(player) {
    if (!$scope.user) {
      document.getElementById('confirmbox').style.display = "block"; //this is the replace of this line
      document.getElementById('acceptbutton').onclick = function() {
        $window.location = '/auth/facebook?redirectUrl=/' + $rootScope.loc.citySlug + '/' + $scope.ev.slug + '/' + $scope.ev.eid;
      };
      document.getElementById('cancelbutton').onclick = function() {
        document.getElementById('confirmbox').style.display = "none";
        return false;
      };
    } else {
      ezfb.ui({
        method: 'apprequests',
        message: 'Invite your friends to play now.'
      }, function(res) {
        console.log(res);
        if (res.to) {
          var uids = [];
          res.to.forEach(function(uid) {
            uids += uid + ',';
          });

          var invitation = {
            eid: $scope.ev.eid,
            uids: uids,
            requestId: res.request,
            url: window.location.pathname
          };

          $http.post('/api/invite', invitation);
        }
      });
    }
  };
});