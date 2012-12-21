
Ext.define('Preventa.view.CatalegClient', {
    extend: 'Ext.Container',
    xtype: 'CatalegClient',
    id: 'CatalegClient',
    fullscreen: true,
    
    initialize: function(){
    	console.log("Initialize view CatalegClient");	
    },
    
    createCatalegClient: function(){
    	console.log("CREATECATALEGCLIENT()");
    	
    	var buttonChooseClient = {
   			xtype: 'button',
   			ui: 'confirm',
   			identifier: 'buttonChooseClient',
   			listeners: {
   				tap: {
   					fn: this.onChooseClient,
   					scope: this
   				}
   			}
   		};
   		
   		var buttonInfoClient = {
   			xtype: 'button',
   			ui: 'action',
   			text: 'Informacion',
   			action: 'viewInfoClient'
   		};
    	
    	var toolbar = {
    		xtype: 'toolbar',
    		docked: 'top',
    		items: [
    			buttonChooseClient,
    			buttonInfoClient,
    			{ xtype: 'spacer' }
    		]
    	};
    	
    	this.add([toolbar]);

    	
    	var detailView = {
    		xtype: 'container',
    		layout: {
    			type: 'hbox',
    			align: 'center'
    		},
    		cls: 'detailTransition',
    		items: []
    	};
    	
    	this.add([detailView]);
    	
    	this.createDetail();
    	this.createFilterButtona();
    },
    
    createDetail: function(){
    	console.log("createDetail");
    	var items = [];
    	
    	var image = {
    		xtype: 'image',
    		identifier: 'detailImage',
    		height: '90%',
    		width: '28%',
    		style: 'background-color: black',
    		margin: '0 1% 0 1%'
    	};
    	items.push(image);
    	
    	var info = {
    		xtype: 'container',
    		width:	'33%',
    		height: '90%',
    		style: 'background-color: black',
    		margin: '0 1% 0 1%',
    		scrollable: true,
    		layout: 'vbox',
	        items: [
	        	{
	        		xtype: 'label',
	        		identifier: 'nameDetailLabel',
	        		style: 'color: white',
	        		margin: '1% 1% 0 1%'
	        	},
	        	{
	        		xtype: 'label',
	        		identifier: 'descriptionDetailLabel',
			       	margin: '5% 1% 1% 1%',
			        style: 'color: white'
	       		}
	       ]	
    	};
    	items.push(info);
    	
    	var comand = {
    		xtype: 'container',
    		width: '33%',
    		height: '90%',
    		margin: '0 1% 0 1%',
    		layout: {
    			type: 'vbox',
    			pack: 'start',
    			align: 'start'
    		},
    		items: [
    			{
    				xtype: 'container',
    				width: '100%',
    				height: '50%',
    				layout: {
    					type: 'hbox',
    					pack: 'start',
    					align: 'start'
    				},
    				items: [
    					{
    						xtype: 'container',
    						width: '50%',
    						height: '100%',
    						layout: 'vbox',
    						items: [
    							{
    								xtype: 'container',
    								width: '100%',
    								height: '50%',
    								items: [
    									{
    										xtype: 'numberfield',
				    						minValue: 0,
				    						maxValue: 9999,
				    						label: 'Unidades',
				    						labelWidth: '50%',
				    						identifier: 'unitsTextField',
				    						width: '98%',
				    						height: '100%',
				    						_badge_page: -1,
				    						_badge_index: -1,
				    						_id_product: -1
    									}
    								]
    							},
    							{
    								xtype: 'container',
    								width: '100%',
    								height: '50%',
    								layout: {
    									type: 'hbox',
    									pack: 'center',
    									align: 'center'	
    								},
    								items: [
    									{
    										xtype: 'button',
		    								text: '-',
		    								action: 'removeUnit',
		    								width: '49%',
		    								margin: '0 1% 0 0'
    									},
    									{
    										xtype: 'button',
		    								text: '+',
		    								action: 'addUnit',
		    								width: '49%',
		    								margin: '0 0 0 1%'
    									}
    								]
    							}
    						]
    					},
    					{
    						xtype: 'container',
    						width: '50%',
    						height: '100%',
    						layout: {
    							type: 'hbox',
    							pack: 'end',
    							align: 'start'
    						},
    						items: [
    							{
    								xtype: 'selectfield',
				                    identifier: 'unitsSelectField',
				                    width: '100%',
				                    height: '50%',
				                    width: '98%',
				                    options: []
    							}
    						]
    					}
    				]
    			},
    			{
    				xtype: 'container',
    				width: '100%',
    				height: '50%',
    				margin: '0% 0 0 0',
    				layout: {
    					type: 'vbox',
    					pack: 'end',
    					align: 'start'
    				},
    				items: [
    					{
    						xtype: 'numberfield',
    						minValue: 0,
    						maxValue: 9999,
				    		label: 'Precio',
				    		labelWidth: '50%',
		    				height: '50%',
		    				width: '50%',
		    				identifier: 'priceTextField',
		    				_price: 0
    					}
    				]
    			}
    		]
    	};
    	
    	items.push(comand);
    	this.getItems()['items'][1].add(items);
    },
    
    isCreated: function(){
    	return this.getItems()['items'].length >= 1;
    },
    
    removeThis: function(){
    	console.log("removeCatalegClient()");
    	this.remove(this.getItems()['items'][3]);
    	this.remove(this.getItems()['items'][2]);
    	this.remove(this.getItems()['items'][1]);
    	this.remove(this.getItems()['items'][0]);
    },
    
    createFilterButtona: function(){
    	
    	var allProductsButton = {
    		xtype: 'button',
    		text: 'Todos',
    		action: 'showAllProducts',
    		height: '75%',
    		margin: '0 1% 0 0.5%'
    	};
    	
    	var ofertProductsButton = {
    		xtype: 'button',
    		text: 'Oferta',
    		action: 'showProductsInOfert',
    		height: '75%',
    		margin: '0 0.5% 0 0.5%'
    	};
    	
    	var fitxaProductsButton = {
    		xtype: 'button',
    		text: 'Ficha',
    		action: 'showProductsOfClient',
    		height: '75%',
    		margin: '0 0.5% 0 0.5%'	
    	};
    	
    	var commandProductsButton = {
    		xtype: 'button',
    		text: 'Comanda',
    		action: 'showProductsInCommand',
    		height: '75%',
    		margin: '0 0.5% 0 0.5%'	
    	};
    	
    	var filterButtons = {
    		xtype: 'container',
    		//height: window.innerHeight * 0.09,
    		//width: '100%',
    		cls: 'filterButtons',
    		//top: window.innerHeight * 0.35,
    		layout: {
    			type: 'hbox',
    			align: 'center',
    			pack: 'end'
    		},
    		items: [
    			commandProductsButton,
    			fitxaProductsButton,
    			ofertProductsButton,
    			allProductsButton
    		],
    		zIndex: 20,
    		data: {
    			top: '38%'
    		}
    	};
    	
    	this.add([filterButtons]);
    },
    
    createCarousel: function(store) {
   	//Afegim el carousel de imatges.
   	
   		//Comprovem si hi ha alguna commanda oberta.
   		var command = this.getData().command;
   		var productsOfCommand = [];
   		
   		if(command != null){
   			var productsCommands = Ext.getStore('CommandProductStore');
   			productsCommands.filter([{property: 'id_command', value: command.getData()['id'], exactMatch: true}]);
   			productsOfCommand = productsCommands.getRange();
   			productsCommands.clearFilter();
   		}
    
    	//Elements per pàgina.
    	var itemsPerPagina = 8;
    	var itemsPerFila = 4;
    	
    	//Calculem el número de pàgines.
    	var totalPagines = Math.ceil(store.getCount()/itemsPerPagina);
    	
    	if(totalPagines > 0){
   			console.log("createCarousel()");
    	
	    	//Creem l'array on tindrem els elements del carousel.
	    	var carouselPagines = [];
	    	
	    	//Creem cada pàgina.
	    	for(var i = 1; i <= totalPagines; i++){
	    		//Calculem desde quin element haurem d'agafar fins a quin altre.
	    		var desde = (i*itemsPerPagina) - itemsPerPagina;
	    		var fins = i == totalPagines ? store.getCount() : (i*itemsPerPagina) -1;
	    		
	    		//Agafem els elements de l'store que necessitem.
	    		var elements = store.getRange(desde, fins);
	    		
	    		var html = '';
	    		
	    		//Calculem la mida de les imatges.
	    		var carouselHeight = window.innerHeight * 0.55;
	    		var imageSize = carouselHeight * 0.85 / 2;
	    		
	    		//Espais entre imatges.
	    		var espaiWidth = (window.innerWidth - (imageSize * itemsPerFila)) / itemsPerFila;
	    		var espaiHeight = (carouselHeight - (imageSize * 2)) / 2;
	    		
	    		while(espaiWidth <= 25 || espaiHeight <= 25){
			    	imageSize = imageSize * 0.9;
			    	espaiWidth = (window.innerWidth - (imageSize * itemsPerFila)) / itemsPerFila;
	    			espaiHeight = (carouselHeight - (imageSize * 2)) / 2;
		    	}
	    		
	    		//Creem el component de la pàgina.
	    		var items = [];
	    		var items2 = [];
	    		for(var x = 0; x < elements.length; x++){
	    			var top = espaiHeight/2 + espaiHeight * (parseInt(x/itemsPerFila)) + imageSize * (parseInt(x/itemsPerFila));
	    			var left = espaiWidth /2 + espaiWidth * (parseInt(x%itemsPerFila)) + imageSize * (parseInt(x%itemsPerFila));
					
					var badge = {
						xtype: 'label',
				    	height: imageSize * 0.18,
				    	width: imageSize * 0.18,
				    	top: '0%',
				    	right: '0%',
				    	html: '',
				    	padding: imageSize * 0.025 + ' 0 0 0',
				    	style: 'background-color: red; border-radius: ' + imageSize * 0.09 + 'px; border: 1px solid black; font-size: ' + imageSize * 0.09 + 'px; text-align: center; color: white; font-weight: bold;',
				    	hidden: true  
					};
					
					var y = 0;
					var trobat = false;
					
					var unidades = 'Unidades';
					var total_price = 'Precio';
					var units_price = -1;
					
					while(y < productsOfCommand.length && !trobat){
						if(productsOfCommand[y].getData()['id_product'] == elements[x].getData()['id']){
							badge.html = '<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center">' + productsOfCommand[y].getData()['units'] + '</div>';
							badge.hidden = false;
							
							unidades = productsOfCommand[y].getData()['units'];
							total_price = productsOfCommand[y].getData()['total_price'];
							units_price = productsOfCommand[y].getData()['units_price'];
							trobat = true;
						}
						y++;
					}
					
					var item = {
						xtype: 'container',
						width: '22%',
						height: '95%',
						margin: '0 0 0 0',
						items: [
							{
								xtype: 'image',
								width: '100%',
								height: '70%',
								top: '0%',
			    				_element: elements[x].getData(),
			    				_index: x,
			    				_page: i,
			    				_units: unidades, 
			    				_total_price: total_price,
			    				_units_price: units_price,
			    				src: elements[x].getData()['image'],
			    				listeners: {
			    					tap: {
			    						fn: this.onItemCarouselTap,
			    						scope: this
			    					}
			    				}
							},
							badge,
							{
		    					xtype: 'label',
		    					height: '30%',
		    					top: '70%',
		    					width: '100%',
		    					html: '<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center">' + elements[x].getData()['name'] + '</div>'
		    				}
						]
					};
						
					if(x != 3 && x != 7){
						item.margin = '0 4% 0 0';
					}
					
					if(x < itemsPerFila) {
						items.push(item);
					}
					else {
						items2.push(item);
					}
	    			
	    			
	    			if(i == 1 && x == 0){
	    				this.fireEvent("viewDetailOfProduct", elements[x].getData(), i, x, unidades, total_price, units_price);
	    			}
	    		}
	    			var container1 = {
						xtype: 'container',
						height: '45%',
						width: '95%',
						margin: '2% 0 2% 0',
						layout: {
							type: 'hbox',
							pack: 'start',
							align: 'center'
						},
						items: items
					};
					
					var container2 = {
						xtype: 'container',
						height: '45%',
						width: '95%',
						layout: {
							type: 'hbox',
							pack: 'start',
							align: 'center'
						},
						items: items2
					};
	    		
	    		var page = {
	    			xtype: 'panel',
	    			layout: {
	    				type: 'vbox',
	    				align: 'center',
	    				pack: 'start'
	    			},
	    			items: [
	    				container1,
	    				container2
	    			]
	    		};
	    		
	    		//Afegim la pàgina a l'array de pàgines del carousel.
	    		carouselPagines.push(page);
	    	}
	    	
	    	var carousel = {
	    		xtype: 'carousel',
	    		items: carouselPagines,
	    		cls: 'carouselDown'
	    	};
	    	
	    	this.add([carousel]);
    	}
    	else {
   			console.log("createLabelNoProducts()");
    		var fontSize = window.innerWidth / 20;
    		var noItems = {
    			xtype: 'container',
    			height: window.innerHeight * 0.47,
    			width: window.innerWidth,
    			top: window.innerHeight * 0.44,
    			layout: {
			        type: 'vbox',
			        align: 'center',
			        pack: 'center'
			    },
    			items: [
    				{
    					xtype: 'label',
    					html: 'NO HAY PRODUCTOS',
    					style: 'color: black; opacity: 0.25; font-weight: bold; font-size: ' + fontSize + 'px;'
    				}
    			]
    		};
    		
    		this.add([noItems]);
    	}
    },
    
    createCarouselCategories: function() {
   		console.log("createCarouselCategories()");
   	//Afegim el carousel de imatges.
    	
    	var store = Ext.getStore('CategoriesStore');
    
    	//Elements per pàgina.
    	var itemsPerPagina = 12;
    	var itemsPerFila = 4;
    	
    	//Calculem el número de pàgines.
    	var totalPagines = Math.ceil(store.getCount()/itemsPerPagina);
    	
    	if(totalPagines > 0){
    	
	    	//Creem l'array on tindrem els elements del carousel.
	    	var carouselPagines = [];
	    	
	    	//Creem cada pàgina.
	    	for(var i = 1; i <= totalPagines; i++){
	    		//Calculem desde quin element haurem d'agafar fins a quin altre.
	    		var desde = (i*itemsPerPagina) - itemsPerPagina;
	    		var fins = i == totalPagines ? store.getCount() : (i*itemsPerPagina) -1;
	    		
	    		//Agafem els elements de l'store que necessitem.
	    		var elements = store.getRange(desde, fins);
	    		
	    		var html = '';
	    		
	    		//Calculem la mida de les imatges.
	    		var carouselHeight = window.innerHeight * 0.55;
	    		var imageSize = carouselHeight * 0.85 / 3;
	    		
	    		//Espais entre imatges.
	    		var espaiWidth = (window.innerWidth - (imageSize * itemsPerFila)) / itemsPerFila;
	    		var espaiHeight = (carouselHeight - (imageSize * 3)) / 3;
	    		
	    		while(espaiWidth <= 25 || espaiHeight <= 25){
			    	imageSize = imageSize * 0.9;
			    	espaiWidth = (window.innerWidth - (imageSize * itemsPerFila)) / itemsPerFila;
	    			espaiHeight = (carouselHeight - (imageSize * 3)) / 3;
		    	}
	    		
	    		//Creem el component de la pàgina.
	    		var items = [];
	    		var items2 = [];
	    		var items3 = [];
	    		for(var x = 0; x < elements.length; x++){
	    			var top = espaiHeight/4 + espaiHeight * (parseInt(x/itemsPerFila)) + imageSize * (parseInt(x/itemsPerFila));
	    			var left = espaiWidth /4 + espaiWidth * (parseInt(x%itemsPerFila)) + imageSize * (parseInt(x%itemsPerFila));
					
					var item = {
						xtype: 'container',
						width: '22%',
						height: '95%',
						margin: '0 0 0 0',
						items: [
							{
								xtype: 'image',
								width: '100%',
								height: '70%',
								top: '0%',
			    				_element: elements[x].getData(),
			    				src: elements[x].getData()['image'],
			    				listeners: {
			    					tap: {
			    						fn: this.onCategoryTap,
			    						scope: this
			    					}
			    				}
							},
							{
		    					xtype: 'label',
		    					height: '30%',
		    					top: '70%',
		    					width: '100%',
		    					html: '<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center">' + elements[x].getData()['name'] + '</div>'
		    				}
						]
					};
						
					if(x != 3 && x != 7 && x != 11){
						item.margin = '0 4% 0 0';
					}
					
					if(x < 4) {
						items.push(item);
					}
					else if(x < 8) {
						items2.push(item);
					}
					else{
						items3.push(item);
					}
	    			
	    		}
	    			var container1 = {
						xtype: 'container',
						height: '23%',
						width: '95%',
						margin: '2% 0 0 0',
						layout: {
							type: 'hbox',
							pack: 'start',
							align: 'center'
						},
						items: items
					};
					
					var container2 = {
						xtype: 'container',
						height: '23%',
						width: '95%',
						margin: '2% 0 0 0',
						layout: {
							type: 'hbox',
							pack: 'start',
							align: 'center'
						},
						items: items2
					};
					
					var container3 = {
						xtype: 'container',
						height: '23%',
						width: '95%',
						margin: '2% 0 0 0',
						layout: {
							type: 'hbox',
							pack: 'start',
							align: 'center'
						},
						items: items3
					};
	    		
	    		var page = {
	    			xtype: 'panel',
	    			layout: {
	    				type: 'vbox',
	    				align: 'center',
	    				pack: 'start'
	    			},
	    			items: [
	    				container1,
	    				container2,
	    				container3
	    			]
	    		};
	    		
	    		//Afegim la pàgina a l'array de pàgines del carousel.
	    		carouselPagines.push(page);
	    	}
	    	
	    	var carousel = {
	    		xtype: 'carousel',
	    		items: carouselPagines
	    	};
	    	
	    	this.add([carousel]);
    	}
    	else {
    		var fontSize = window.innerWidth / 20;
    		var noItems = {
    			xtype: 'container',
    			height: window.innerHeight * 0.47,
    			width: window.innerWidth,
    			top: window.innerHeight * 0.44,
    			layout: {
			        type: 'vbox',
			        align: 'center',
			        pack: 'center'
			    },
    			items: [
    				{
    					xtype: 'label',
    					html: 'NO HAY CATEGORÍAS',
    					style: 'color: black; opacity: 0.25; font-weight: bold; font-size: ' + fontSize + 'px;'
    				}
    			]
    		};
    		
    		this.add([noItems]);
    	}
    },
    
    removeCarousel: function() {
    	this.remove(this.getItems()['items'][3]);
    },
    
    onItemCarouselTap: function(obj, e, eOpts){
    	console.log("onItemTap()");
    	this.fireEvent("viewDetailOfProduct", obj.config._element, obj.config._page, obj.config._index, obj.config._units, obj.config._total_price, obj.config._units_price);
    },
    
    onCategoryTap: function(obj, e, eOpts){
    	this.fireEvent("viewProductsOfCategory", obj.config._element);
    },

    config: {
    	layout: {
    		type: 'hbox'
    	}
    },
    
    onChooseClient: function(){
    	this.fireEvent('onChooseClient', 'CatalegClient');
    },
   	
   	changeBadge: function(page, index, value){
   		if(this.getItems()['items'].length > 3){
	   		console.log("changeBadge()");
	   		if (index < 4){
	   			var cont = 0;
	   		}
	   		else {
	   			var cont = 1;
	   			index = index % 4;
	   		}
	   		
	   		var carousel = this.getItems()['items'][3];
	   		var item = carousel.getItems()['items'][page].getItems()['items'][cont].getItems()['items'][index];
	   		var badge = item.getItems()['items'][1];
	   		
	   		if(parseInt(value)){
	   			badge.setHidden(false);
	   			badge.setHtml('<div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis; text-align: center">' + value + '</div>');
	   		}
	   		else{
	   			badge.setHidden(true);
	   			badge.setHtml("");	
	   		}
   		}
   	},
   	
   	changeProduct: function(page, index, units, total_price, units_price){
   		console.log("changeProduct()");
   		if(this.getItems()['items'].length > 3){
	   		if (index < 4){
	   			var cont = 0;
	   		}
	   		else {
	   			var cont = 1;
	   			index = index % 4;
	   		}
	   		
	   		var carousel = this.getItems()['items'][3];
	   		var item = carousel.getItems()['items'][page].getItems()['items'][cont].getItems()['items'][index];
	   		var product = item.getItems()['items'][0];
	   		var unidades;
	   		var precio;
	   		
	   		if(parseInt(units)){
	   			product.config._units = units;
	   			unidades = units;
	   		}
	   		else{
	   			product.config._units = null;
	   			unidades = 0;
	   		}
	   		
	   		if(parseInt(total_price)){
	   			product.config._total_price = total_price;
	   			precio = total_price;
	   		}
	   		else {
	   			product.config._total_price = null;
	   			precio = 0;
	   		}
	   		
	   		product.config._units_price = units_price;
	   		
	   		var id_product = product.config._element['id'];
	   		var id_command = this.getData()['command'].getData()['id'];
	   		
	   		this.fireEvent("saveCommandProduct", id_product, id_command, unidades, precio, units_price);
   		}
   	}
});


