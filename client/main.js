import '/imports/client/router.js';

Meteor.startup(function(){
	if(Meteor.isCordova){
		if (cordova.platformId == 'android') {
    	StatusBar.backgroundColorByHexString("#333");
		}
	}
})