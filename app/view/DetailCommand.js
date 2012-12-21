
Ext.define('Preventa.view.DetailCommand', {
    extend: 'Ext.Container',
    xtype: 'DetailCommand',
    id: 'DetailCommand',
    fullscreen: true,
    
    initialize: function(){
    	console.log("Initialize view: DetailCommand");
    	
    	var buttonBack = {
    		xtype: 'button',
    		text: 'Atras',
    		ui: 'back',
    		action: 'backInfo'
    	};
    	
    	var toolbar = {
    		xtype: 'toolbar',
    		docked: 'top',
    		items: [
    			buttonBack,
    			{ xtype: 'spacer' }
    		]
    	};
    	
    	this.add([toolbar]);
    },
    
    createDetailCommand: function(command){
    	var store = Ext.getStore('CommandProductStore');
    	store.filter([{property: 'id_command', value: command.id, exactMatch: true}]);
    	var productsStore = Ext.getStore('ProductsStore');
    	var unitatsStore = Ext.getStore('UnitatsStore');
    	
    	var products = [];
    	var total_price = 0;
    	for(var i = 0; i < store.getCount(); i++){
    		var model = store.getAt(i).getData();
    		var indexProduct = productsStore.findExact("id", model['id_product']);
    		
    		if(indexProduct != -1){
    			var name = productsStore.getAt(indexProduct).getData()['name'];
    			
    			var indexUnit = unitatsStore.findExact("id", model['units_price']);
    			
    			if(indexUnit != -1) {
    				var unitsValue = unitatsStore.getAt(indexUnit).getData()['unit'];
    				
		    		var product = {
		    			product: name,
		    			units: model['units'],
		    			price: model['total_price'],
		    			unitsValue: unitsValue
		    		};
		    		
		    		total_price += parseInt(model['total_price']);
		    		
		    		products.push(product);
	    		}
    		}
    	}
    	
    	store.clearFilter();
    	
    	var detail = {
    		xtype: 'container',
    		height: '100%',
    		width: '100%',
    		layout: 'vbox',
    		items: [
    			{
    				xtype: 'container',
    				height: '12%',
    				width: '100%',
    				style: 'background-color: black',
    				layout: 'hbox',
    				items: [
    					{
    						xtype: 'container',
    						width: '60%',
    						layout: {
    							type: 'hbox',
    							align: 'center',
    							pack: 'start'
    						},
    						items: [
    							{
    								xtype: 'label',
    								html: 'Productos:',
    								style: 'color: white;',
    								margin: '0 0 0 2%'
    							}
    						]
    					},
    					{
    						xtype: 'container',
    						width: '20%',
    						layout: {
    							type: 'hbox',
    							align: 'center',
    							pack: 'start'
    						},
    						items: [
    							{
    								xtype: 'label',
    								html: 'Unidades:',
    								style: 'color: white;'
    							}
    						]
    					},
    					{
    						xtype: 'container',
    						width: '20%',
    						layout: {
    							type: 'hbox',
    							align: 'center',
    							pack: 'start'
    						},
    						items: [
    							{
    								xtype: 'label',
    								html: 'Precio:',
    								style: 'color: white;'
    							}
    						]
    					}
    				]
    			},
    			{
    				xtype: 'list',
    				height: '76%',
    				width: '100%',
    				style: 'background-color: white',
    				data: products,
    				itemTpl: [
				    	'<div style="padding: 0 0 0 4%; width: 60%; height: 100%; position: absolute; left: 0; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">{product}</div><div style="width: 20%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: left; height: 100%; position: absolute; left: 60%; padding: 0 2% 0 2%">{units} {unitsValue}</div><div style="width: 20%; height: 100%; position: absolute; left: 80%; text-align: left; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; padding: 0 2% 0 2%">{price} €</div>'
				   	]
    			},
    			{
    				xtype: 'container',
    				height: '12%',
    				width: '100%',
    				style: 'background-color: black',
    				layout: {
    					type: 'hbox',
    					pack: 'end',
    					align: 'center'
    				},
    				items: [
    					{
    						xtype: 'label',
    						html: "Total: " + total_price + " €",
    						padding: '0 2% 0 0',
    						style: 'color: white; font-size: 150%'
    					}
    				]
    			}
    		]
    	};
    	
    	this.add([detail]);
    },

    config: {
    	layout: {
    		type: 'fit'
    	}
    }
});