
Ext.define('Preventa.view.DetailProductPortrait', {
    extend: 'Ext.Container',
    xtype: 'DetailProductPortrait',
    id: 'DetailProductPortrait',
    fullscreen: true,
    
    requires: [
    	'Ext.form.FieldSet',
    	'Ext.field.Select'
    ],
    
    initialize: function(){
    	console.log("Initialize view: DetailProduct");
    	
   	//Afegim el toolbar.   
   		var buttonBack = {
   			xtype: 'button',
   			action: 'backToProducts',
   			text: 'Productos',
   			ui: 'back'	
   		}	
   			
   		var buttonChooseClient = {
   			xtype: 'button',
   			text: 'Elegir cliente',
   			ui: 'confirm',
   			listeners: {
   				tap: {
   					fn: this.onChooseClient,
   					scope: this
   				}
   			}
   		};
   		
    	var buttonLogout = {
    		xtype: 'button',
            action: 'logout',
            text: 'Logout'
    	};
    	
    	var toolbar = {
    		xtype: 'toolbar',
    		docked: 'top',
    		items: [
    			buttonBack,
    			buttonChooseClient,
    			{ xtype: 'spacer' },
    			buttonLogout
    		]
    	};
    	
    	this.add([toolbar]);
    },
    
    createDetailProduct: function(product){
    	this.setData({product: product});
    	var productsUnitsStore = Ext.getStore('ProductsUnitsStore');
    	productsUnitsStore.filter([{property: "id_product", value: product['id'], exactMatch: true}]);
    	var productsUnits = productsUnitsStore.getRange();
    	
    	var unitsStore = Ext.getStore('UnitatsStore');
    	
    	var optionsUnits = [];
    	var initialPrice = 0;
    	
    	for(var i = 0; i < productsUnitsStore.getCount(); i++){
    		var index = unitsStore.findExact('id', productsUnits[i].getData()['id_unit']);
    		
    		var text = unitsStore.getAt(index).getData()['unit'];
    		var value = productsUnits[i].getData()['price'];
    		
    		var option = {
    			text: text,
    			value: value
    		};
    		
    		if(i == 0){
    			initialPrice = productsUnits[i].getData()['price'];
    		}
    		
    		optionsUnits.push(option);
    	}
    	
    	productsUnitsStore.clearFilter();
    	
    	var imageSize = window.innerWidth * 0.95;
    	var page = {
    		xtype: 'container',
    		height: '100%',
	        width: '100%',
	        scrollable: true,
	        layout: {
	        	type: 'vbox',
	        	pack: 'start',
	        	align: 'center'
	       	},
	        items: [
	        	{
	        		xtype: 'label',
	        		width: '95%',
	        		margin: '2% 0 0 0',
	        		html: '<div style="font-size: 20pt;">'+ product['name'] +'</div>'
	        	},
	        	{
	        		xtype: 'label',
	        		width: '95%',
	        		margin: '5% 0 0 0',
	        		html: '<div style="font-size: 13pt;">'+ product['description'] +'</div>'
	        	},
	        	{
	        		xtype: 'fieldset',
	        		width: '95%',
	        		margin: '5% 0 0 0',
	        		items: [
	        			{
	        				xtype: 'selectfield',
			        		label: 'Unidades',
			        		options: optionsUnits,
			        		listeners: {
			        			change: {
			        				fn: this.onChangeUnits,
			        				scope: this
			        			}
			        		}
	        			},
	        			{
	        				xtype: 'textfield',
	        				identificador: 'priceTF',
	        				label: 'Precio',
	        				readOnly: true,
	        				value: initialPrice + ""
	        			}
	        		]
	        	},
	        	{
	        		xtype: 'image',
	        		width: '95%',
	        		height: imageSize * 0.85,
	        		margin: '5% 0 5% 0',
	        		src: product['image']
	        	}
	        ]
	   	};
	  
    	this.add([page]);
    },
    
    removeDetail: function() {
    	console.log("removeDetailPortrait()");
    	this.remove(this.getItems()['items'][1]);
    	this.setData();
    },
    
    isCreated: function(){
    	return this.getItems()['items'].length > 1;
    },
    
    onChangeUnits: function(obj, newValue){
    	this.fireEvent('onChangeUnits', newValue)
    },
    
    onChooseClient: function(){
    	this.fireEvent('onChooseClient', 'DetailProductPortrait');
    },

    config: {
    	layout: {
    		type: 'fit'
    	}
    }

});

