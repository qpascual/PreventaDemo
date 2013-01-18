
Ext.define('Preventa.ui.ProgressBar', {
	extend: 'Ext.Sheet',
	require: [
		'Ext.Toolbar',
		'Ext.Label',
		'Ext.Container'
	],
	
	config: {
		ui: 'dark',
		width: '75%',
		height: '25%',
		baseCls: Ext.baseCSSPrefix + 'msgbox',
		showAnimation: {
			type: 'popIn',
			duration: 250
		},
        zIndex: 999,
        layout: {
            type: 'vbox',
            pack: 'center'
        },
        items: [
        	{
        		xtype: 'toolbar',
        		docked: 'top',
        		ui: 'dark',
        		title: 'Sincronizando datos...'
        	},
        	{
        		xtype: 'container',
        		height: '100%',
        		width: '100%',
        		items: [
        			{
        				xtype: 'container',
        				height: '40%',
        				width: '90%',
        				style: 'background-color: white',
        				top: '10%',
        				left: '5%',
        				zIndex: 1
        			},
        			{
        				xtype: 'container',
        				height: '36%',
        				width: '0%',
        				style: 'background-color: blue',
        				top: '12%',
        				left: '6%',
        				zIndex: 2
        			},
        			{
        				xtype: 'label',
        				height: '40%',
        				width: '90%',
        				style: 'text-align: center; color: white',
        				top: '70%',
        				left: '5%',
        				html: '0%',
      					_percentatge: 0
        			}
        		]
        	}
        ]
	},
	
	show: function() {
        Ext.Viewport.add(this);
        console.log("SHOW !!!!!!!!!!!!!!!!!!!!!");
	},
	
	getProgressValue: function(){
		var label = this.getItems()['items'][1].getItems()['items'][2];
		return label.config._percentatge;
	},
	
	setProgressValue: function(percentatge){
		console.log("setProgressValue()");
		var label = this.getItems()['items'][1].getItems()['items'][2];
		var bar = this.getItems()['items'][1].getItems()['items'][1];
	
		if(percentatge >= 0 && percentatge <= 100){
			label.setHtml(parseInt(percentatge) + "%");
			label.config._percentatge = percentatge;
			var maxValue = 88;
			var value = percentatge * maxValue / 100;
			bar.setWidth(value + "%");
		}
	}
});
