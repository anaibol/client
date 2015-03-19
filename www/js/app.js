var app = angular.module('app', ['ionic', 'ngCordova', 'querystring', 'angularMoment']);

app.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider, $cordovaFacebookProvider) {

  $ionicConfigProvider.views.forwardCache(true);

  // var appID = 755761764436101;
  // var version = "v2.0"; // or leave blank and default is v2.0
  // $cordovaFacebookProvider.browserInit(appID, version);


  // var options = {
  //   method: "feed",
  //   link: "http://example.com",
  //   caption: "Such caption, very feed."
  // };
  // $cordovaFacebook.showDialog(options)
  //   .then(function(success) {
  //     // success
  //   }, function(error) {
  //     // error
  //   });

  $stateProvider
    .state('events', {
      url: "/events",
      abstract: true,
      templateUrl: "templates/events.html"
    })
    .state('events.list', {
      url: "",
      views: {
        'home-tab': {
          templateUrl: "templates/list.html",
          controller: 'ListCtrl',
          resolve: {
            evs: function(Event, $stateParams) {
              return Event.get($stateParams);
            }
          }
        }
      }
    })
    .state('events.view', {
      url: "/:eid",
      views: {
        'home-tab': {
          templateUrl: "templates/view.html",
          controller: 'ViewCtrl',
          resolve: {
            ev: function(Event, $stateParams) {
              console.log($stateParams);
              return Event.getOne($stateParams.eid);
            }
          }
        }
      }
    });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/events');
});