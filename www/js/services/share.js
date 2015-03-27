app.factory('Share', function($cordovaSocialSharing) {
  return function(socialType, message, image, link) {

    if (socialType === 'fb') {
      $cordovaSocialSharing
        .shareViaFacebook('message', 'image', 'link')
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });
    } else if (socialType === 'wa') {
      $cordovaSocialSharing
        .shareViaWhatsApp(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });

    } else if (socialType === 'ma') {
      $cordovaSocialSharing
        .shareViaEmail('message', 'subject', 'toArr', 'bccArr', 'file')
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });

    } else {
      $cordovaSocialSharing
        .share('message', 'image', 'link')
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
        });
    }
  };
});