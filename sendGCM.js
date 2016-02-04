// var gcm = require('node-gcm');
// var message = new gcm.Message();
//
// //API Server Key
// var sender = new gcm.Sender('AIzaSyCXNnoeEVyQq39OBD0SF3KOxU3uuG54doU');
// var registrationIds = [];
//
// // Value the payload data to send...
// message.addData('message', "hola \u1F4C5 !");
// message.addData('title', 'Push Notification Sample');
// message.addData('msgcnt', '3'); // Shows up in the notification in the status bar when you drag it down by the time
//
// //message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app - may not work
// //message.collapseKey = 'demo';
// //message.delayWhileIdle = true; //Default is false
// message.timeToLive = 3000; // Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
//
// // At least one reg id/token is required
//
// // registrationIds.push('APA91bGcY8emOkEqeCTnvpbNlyB_UMjt9ukfABKStBSq5JOIRX6NfEU4B5nMDy_BoHGngNFYquDRfaVMhI6z914CYyBqUUlbsDca5riuGg6KEg4fh5C_NpH0ZAyNSGQ6Giz2QaFQfp8tv7SkrLLuROg3BKyln16a1Um-htIWNW4VigYrG4EoCHg');
// // APA91bElhK1FfdGyxS81CavLBhrwKBOvtzHNJ1yF2eK4ENWBbLN5taOzwTj5dN3TWAZdOgc-N9xGG5AD-vee79OtLplvalfVl7yXh8AdUGASNaH1XtPRzFOabCYqUZ7niE0HB3GuoT9fUnqutSze7rniL6c2KZQKfs9bXlnssn68BH4WrBNpHu0
//
// registrationIds.push('APA91bElhK1FfdGyxS81CavLBhrwKBOvtzHNJ1yF2eK4ENWBbLN5taOzwTj5dN3TWAZdOgc-N9xGG5AD-vee79OtLplvalfVl7yXh8AdUGASNaH1XtPRzFOabCYqUZ7niE0HB3GuoT9fUnqutSze7rniL6c2KZQKfs9bXlnssn68BH4WrBNpHu0');
//
// /**
//  * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
//  */
// sender.send(message, registrationIds, 4, function(result) {
//   console.log(result); //null is actually success
// });
