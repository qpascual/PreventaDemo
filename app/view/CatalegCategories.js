
Ext.define('Preventa.view.CatalegCategories', {
    extend: 'Ext.Container',
    xtype: 'CatalegCategories',
    id: 'CatalegCategories',
    fullscreen: true,
    require: [
    	'Ext.Toolbar',
    	'Ext.Button',
    	'Ext.carousel.Carousel',
    	'Ext.Panel',
    	'Ext.Img',
    	'Ext.Label'
    ],
    
    initialize: function(){
    	console.log("Initialize view: CatalegCategories");
    	
   	//Afegim el toolbar.   		
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
    			buttonChooseClient,
    			{ xtype: 'spacer' },
    			buttonLogout
    		]
    	};
    	
    	
    	this.add([toolbar]);
    	
    //Afegim el carousel.
    	this.createCarousel();
    },
    
    createCarousel: function() {
   	//Afegim el carousel de imatges.
    
    	var store = Ext.getStore('CategoriesStore');
    
    	//Elements per pàgina.
    	var itemsPerPagina = 12;
    	var itemsPerFila = 4;
    	
    	//Calculem el número de pàgines.
    	var totalPagines = Math.ceil(store.getCount()/itemsPerPagina);
    	
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
			    						fn: this.onItemCarouselTap,
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
	    		items: carouselPagines,
	    		height: '100%',
	    		width: '100%'
	    	};
	    	
	    	this.add([carousel]);
    },
    
    removeCarousel: function() {
		this.remove(this.getItems()['items'][1]);
	},
    
    onItemCarouselTap: function(obj, e, eOpts) {
    	this.fireEvent("onItemCarouselTap", obj.config._element);
    },
    
    onChooseClient: function(){
    	this.fireEvent('onChooseClient', 'CatalegCategories');
    },

    config: {
    	layout: {
    		type: 'fit'
    	}
    }

});
