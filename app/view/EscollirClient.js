
Ext.define('Preventa.view.EscollirClient', {
    extend: 'Ext.Container',
    xtype: 'EscollirClient',
    id: 'EscollirClient',
    fullscreen: true,
    
    initialize: function(){
    	console.log("Initialize view EscollirClient");
    	
    	var backButton = {
    		xtype: 'button',
    		text: 'Atras',
    		ui: 'back',
    		listeners: {
    			tap: {
    				fn: this.onBackButton,
    				scope: this
    			}
    		}
    	};
    	
    	var noClientButton = {
    		xtype: 'button',
    		text: 'Cataleg',
    		ui: 'action',
    		action: 'noclient'
    	};
    	
    	var toolbar = {
    		xtype: 'toolbar',
    		docked: 'top',
    		title: 'CLIENTES',
    		items: [
    			backButton,
    			{ xtype: 'spacer' },
    			noClientButton
    		]
    	};
    	
    	var list = {
    		xtype: 'list',
    		height: '100%',
    		width: '100%',
    		itemTpl: [
           		'<div>{name}</div>'
           	],
            store: 'ClientsStore',
            listeners: {
            	itemtap: {
            		fn: this.onItemListTap,
            		scope: this
            	}
            }
    	}
    	
    	this.add([toolbar, list]);
    },

    config: {
    	layout: {
    		type: 'fit'
    	}
    },
    
    onBackButton: function() {
		var data = this.getData();
		console.log("onBackButton() - " + data.view);
		switch (data.view) {
			case 'DetailProduct':
				this.fireEvent("BackToDetailProduct");
				break;
			case 'DetailProductPortrait':
				this.fireEvent("BackToDetailProduct");
				break;
			case 'CatalegCategories':
				this.fireEvent("BackToCatalegCategories");
				break;
			case 'CatalegProductes':
				this.fireEvent("BackToCatalegProductes");
				break;
			case 'CatalegClient':
				this.fireEvent("BackToCatalegClient");
				break;
		}
	},
	
	onItemListTap: function(view, index, target, record, e, eOpts){
		this.fireEvent("OpenCatalegClient", record);
	}
});