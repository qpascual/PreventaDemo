
Ext.define('Preventa.view.DetailProduct', {
    extend: 'Ext.Container',
    xtype: 'DetailProduct',
    id: 'DetailProduct',
    fullscreen: true,
    
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
    	
    	var imageSize = window.innerWidth * 0.37;
    	var page = {
    		xtype: 'container',
    		height: '100%',
	        width: '100%',
	        items: [
	        	{
	        		xtype: 'container',
	        		width: '40%',
	        		height: '100%',
	        		top: 0,
	        		left: 0,
	        		items: [
	        			{
	        				xtype: 'image',
	        				height: '55%',
	        				width: '92%',
	        				margin: '5% 4% 0 4%',
	        				src: product['image']
	        			}
	        		]
	        	},
	        	{
	        		xtype: 'container',
	        		top: 0,
	        		left: '40%',
	        		height: '100%',
	        		width: '60%',
	        		layout: 'vbox',
	        		scrollable: true,
	        		margin: '5% 5% 0 1%',
	        		items: [
	        			{
	        				xtype: 'label',
	        				html: '<div style="font-size: 20pt;">'+ product['name'] +'</div>'
	        			},
	        			{
	        				xtype: 'label',
	        				html: '<div style="font-size: 13pt;">' + product['description'] + '</div>',
	        				margin: '5% 5% 0 1%'
	        			},
	        			{
	        				xtype: 'fieldset',
	        				margin: '5% 5% 10% 1%',
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
	        			}
	        		]
	        	}
	        ]
    	}
    	
    	this.add([page]);
    },
    
    removeDetail: function() {
    	console.log("removeDetail()");
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
    	this.fireEvent('onChooseClient', 'DetailProduct');
    },

    config: {
    	layout: {
    		type: 'fit'
    	}
    }

});

