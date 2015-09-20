app.controller('ListCtrl', function($scope, $window, Event, evs, $cordovaDatePicker) {
  if (!evs.length) {
    alert('no events');
  }

  $scope.evs = evs;
  // $scope.noMoreEvents = false;
  //$scope.mobileSortList = false;
  // $scope.getTags = function() {
  //   $scope.tags = _.uniq([].concat.apply([], _.pluck($scope.events, 'tags'))).sort();
  // };

  // $scope.getTags();

  // $scope.getMore = function() {
  // if (!$scope.events || $scope.noMoreEvents) return;

  // Event.getMore().then(function(evs) {
  //   if (evs.length) {
  //     $scope.events.push.apply($scope.events, evs);
  //     $scope.getTags();
  //     var y = document.getElementById('list');
  //     //y.innerHTML = y.innerHTML;
  //   } else {
  //     $scope.noMoreEvents = true;
  //   }
  // });
  // };

  // $scope.openTag = function($event, ev) {
  //   $event.stopPropagation();
  // };

  // var options = {
  //   date: new Date(),
  //   mode: 'date', // or 'time'
  //   minDate: new Date() - 10000,
  //   allowOldDates: true,
  //   allowFutureDates: false,
  //   doneButtonLabel: 'DONE',
  //   doneButtonColor: '#F2F3F4',
  //   cancelButtonLabel: 'CANCEL',
  //   cancelButtonColor: '#000000'
  // };

  // $cordovaDatePicker.show(options).then(function(date) {
  //   alert(date);
  // });

});
