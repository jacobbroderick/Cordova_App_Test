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
		console.log('hello');
		navigator.startApp.check("com.google.android.apps.maps", function(message) {
		console.log(message);
		},
		function(error) {
			console.log('47 no app', error);
		});
		navigator.startApp.start("com.google.android.apps.maps", function(message) {
		console.log(message);
		},
		function(error) {
			console.log('47', error);
		});
	}
});
