app.controller('ViewCtrl', function(ev, $scope, $rootScope, $state, $stateParams, $http) {
  // Instagram, ev, fbphoto, fbvideos, $templateCache, $window
  $scope.ev = ev;
  console.log(ev);
  $scope.descriptionOpened = false;
  if ($scope.ev.price.edited) {
    $scope.ev.price.full = $scope.ev.price.edited;
  }
  // $scope.loc = $rootScope.loc.citySlug;

  // $scope.editing = false;
  $scope.today = new Date();

  $scope.share = function() {
    $cordovaSocialSharing
      .shareViaWhatsApp('message', 'image', 'link')
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });
  };

  $scope.shareFb = function() {

    $cordovaSocialSharing
      .shareViaFacebook('message', 'image', 'link')
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

  };

  $scope.shareOthers = function() {

    $cordovaSocialSharing
      .share('message', 'image', 'link')
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

  };

  // if ($rootScope.user) {
  //   $http.get('/api/rsvp/' + $scope.ev.eid + '/attendings').success(function(result) {
  //     $scope.ev.attending = result;
  //     if ($scope.ev.attending.indexOf(parseInt($rootScope.user.facebook.id)) >= 0) {
  //       $scope.attending = 'Leave';
  //       $http.post('/api/rsvp/' + $scope.ev.eid + '/rsvp');
  //     } else {
  //       $scope.attending = 'Join';
  //     }
  //   });
  // } else if (!$rootScope.user) {
  //   $scope.attending = 'Join';
  // }

  // fbvideos.getFbVideo($scope.ev.eid).success(function(feed) {
  //   if (feed) {
  //     fbvideos.getFbLink(feed, function(res) {
  //       if (res)
  //         $scope.videos = res;
  //     });
  //   }
  // });

  // fbphoto.getFbPics($scope.ev.eid).success(function(res) {
  //   var pics = res.data;
  //   $scope.fbpics = [];

  //   if (!pics) {
  //     return;
  //   }

  //   for (var i = pics.length - 1; i >= 0; i--) {
  //     var pic = pics[i];

  //     var image = {
  //       url: 'https://graph.facebook.com/' + pic.id + '/picture?width=9999&height=9999',
  //       thumbUrl: 'https://graph.facebook.com/' + pic.id + '/picture?width=350&height=350'
  //     };

  //     $scope.fbpics.push(image);
  //   }
  // });

  // Instagram.getLocationId($scope.ev.venue.coord.lat, $scope.ev.venue.coord.lng).success(function(res) {
  //   var locations = res.data;

  //   if (!locations.length) {
  //     return;
  //   }

  //   Instagram.getPhotosByLocationId(locations[0].id, 10).success(function(res) {
  //     var pics = res.data;

  //     if (!pics) {
  //       return;
  //     }

  //     $scope.instagramPhotos = [];

  //     for (var i = res.data.length - 1; i >= 0; i--) {
  //       var new_url = 'https://' + res.data[i].images.standard_resolution.url.substring(7);
  //       var new_thumbUrl = 'https://' + res.data[i].images.low_resolution.url.substring(7);
  //       $scope.instagramPhotos[i] = {
  //         url: new_url,
  //         thumbUrl: new_thumbUrl
  //       };
  //     }
  //   });
  // });

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