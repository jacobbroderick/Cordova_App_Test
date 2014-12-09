Ext.define('Navigate_Testing.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },
				
					xtype: 'button',
					ui: 'action',
					text: 'Go!~',
					itemId: 'goButton'
				
            },
        ],
		listeners: [
			{
				delegate: '#goButton',
				event: 'tap',
				fn: 'onIntent'
			}
			]
    },
	onIntent: function(){
		console.log('intentFunction');
		this.fireEvent('intentFunction',this);
		console.log('exit intent function');
	}

});
