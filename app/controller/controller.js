Ext.define('Navigate_Testing.controller.controller', {
		extend: 'Ext.app.Controller',
	requires: ['Ext.MessageBox', 'Ext.device.Geolocation'],
	alias: 'cont',
	config: {
		refs: {
			mainView: 'main'
		},
		control: {
			mainView: {
				intentFunction: 'onIntentFunction'
			}
		}
	},
	onIntentFunction: function(){
		console.log(device.platform);
		
		if(device.platform == 'Android'){
			window.open("geo:0,0?q=1205+sw+26th+street");
		}else{
				navigator.startApp.start("map://", function(message){
					console.log(message);
				},
				function(error){
					console.log(error);
				});
			}
	}

});
