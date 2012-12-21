
Ext.define("Preventa.controller.CatalegClientController", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
        	CatalegClient: 'CatalegClient',
        	CatalegClientPortrait: 'CatalegClientPortrait',
        	EscollirClient: 'EscollirClient',
        	FitxaButton: 'button[action=showProductsOfClient]',
        	OfertButton: 'button[action=showProductsInOfert]',
        	BackButton: 'button[action=backCataleg]',
        	AllProductsButton: 'button[action=showAllProducts]',
        	CommandProductsButton: 'button[action=showProductsInCommand]',
        	ImageDetail: 'image[identifier=detailImage]',
        	NomDetailLabel: 'label[identifier=nameDetailLabel]',
        	DescriptionDetailLabel: 'label[identifier=descriptionDetailLabel]',
        	UnitsSelectField: 'selectfield[identifier=unitsSelectField]',
        	AddUnitButton: 'button[action=addUnit]',
        	RemoveUnitButton: 'button[action=removeUnit]',
        	UnitsTextField: 'textfield[identifier=unitsTextField]',
        	PriceTextField: 'textfield[identifier=priceTextField]',
        	ButtonChooseClient: 'button[identifier=buttonChooseClient]',
        	InfoClient: 'InfoClient',
        	ButtonInfoClient: 'button[action=viewInfoClient]',
        	CatalegCategories: "CatalegCategories",
        	CatalegCategoriesPortrait: "CatalegCategoriesPortrait",
        	CatalegProductes: "CatalegProductes",
        	CatalegProductesPortrait: "CatalegProductesPortrait",
        	DetailProduct: "DetailProduct",
        	DetailProductPortrait: "DetailProductPortrait"
        },
        control: {
        	BackButton: {
        		tap: 'onBackToCatalegClient'
        	},
        	CatalegClient: {
        		onChooseClient: "onChooseClient",
        		viewDetailOfProduct: "onViewDetailOfProduct",
        		saveCommandProduct: "saveCommandProduct",
        		viewProductsOfCategory: "onViewProductsOfCategory",
        		showDetail: "showDetail"
        	},
        	CatalegClientPortrait: {
        		onChooseClient: "onChooseClient",
        		viewDetailOfProduct: "onViewDetailOfProduct",
        		saveCommandProduct: "saveCommandProduct",
        		viewProductsOfCategory: "onViewProductsOfCategory",
        		showDetail: "showDetail"
        	},
        	EscollirClient: {
        		OpenCatalegClient: "onOpenCatalegClient",
        		BackToCatalegClient: "onBackToCatalegClient"
        	},
        	OfertButton: {
        		tap: "loadProductsInOfert"
        	},
        	FitxaButton: {
        		tap: "loadProductsOfClient"
        	},
        	AllProductsButton: {
        		tap: "loadAllProducts"
        	},
        	CommandProductsButton: {
        		tap: 'loadCommandProducts'
        	},
        	UnitsSelectField: {
        		change: "onChangeUnits"
        	},
        	AddUnitButton: {
        		tap: 'onAddUnitButtonTap'
        	},
        	RemoveUnitButton: {
        		tap: 'onRemoveUnitButtonTap'
        	},
        	UnitsTextField: {
        		blur: 'onBlurUnitsTextField'
        	},
        	PriceTextField: {
        		blur: 'onBlurPriceTextField'
        	},
        	ButtonInfoClient: {
        		tap: 'onButtonInfoClient'
        	},
        	'viewport': {
        		orientationchange: 'onOrientationChange'
        	}
        }
    },
    
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },		//SLIDE FORWARD
    slideRightTransition: { type: 'slide', direction: 'right' }, 	//SLIDE BACK
    
    coverRightTransition: { type: 'cover', direction: 'right'},
    
    revealLeftTransition: { type: 'reveal', direction: 'left'},
    
    onOrientationChange: function (viewport, newOrientation, width, height, eOpts) {
    	console.log("orientationChange() - " + newOrientation);
    	console.log("Height > Width: " + (window.innerHeight > window.innerWidth));
        var view = viewport.getActiveItem().getId();
        console.log("View: " + view);
        
        if(view == "CatalegCategories"){
        	var cataleg = this.getCatalegCategoriesPortrait();
        	cataleg.removeCarousel();
        	cataleg.createCarousel();
        	Ext.Viewport.setActiveItem(cataleg);
        }
        else if(view == "CatalegCategoriesPortrait"){
        	var cataleg = this.getCatalegCategories();
        	cataleg.removeCarousel();
        	cataleg.createCarousel();
        	Ext.Viewport.setActiveItem(cataleg);
        }
        else if(view == "CatalegProductes"){
        	var catalegPortrait = this.getCatalegProductesPortrait();
        	var cataleg = this.getCatalegProductes();
        	catalegPortrait.removeCarousel();
        	catalegPortrait.createCarousel(cataleg.getData().category);
        	Ext.Viewport.setActiveItem(catalegPortrait);
        }
        else if(view == "CatalegProductesPortrait"){
        	var catalegPortrait = this.getCatalegProductesPortrait();
        	var cataleg = this.getCatalegProductes();
        	cataleg.removeCarousel();
        	cataleg.createCarousel(catalegPortrait.getData().category);
        	Ext.Viewport.setActiveItem(cataleg);
        }
        else if(view == "DetailProduct"){
        	var detailPortrait = this.getDetailProductPortrait();
        	var detail = this.getDetailProduct();
        	detailPortrait.removeDetail();
        	detailPortrait.createDetailProduct(detail.getData().product);
        	detailPortrait.setData({product: detail.getData().product});
        	Ext.Viewport.setActiveItem(detailPortrait);
        }
        else if(view == "DetailProductPortrait"){
        	var detailPortrait = this.getDetailProductPortrait();
        	var detail = this.getDetailProduct();
        	detail.removeDetail();
        	detail.createDetailProduct(detailPortrait.getData().product);
        	detail.setData({product: detailPortrait.getData().product});
        	Ext.Viewport.setActiveItem(detail);
        }
        else if(view == "CatalegClientPortrait" || view == "CatalegClient"){
        	var id_client;
        
	        if(view == "CatalegClientPortrait"){
	        	var cataleg = this.getCatalegClientPortrait();
	        	cataleg.remove
	        }
	        else if(view == "CatalegClient"){
	        	var cataleg = this.getCatalegClient();
	        }
	        
	        id_client = cataleg.getData().id_client;
	        
	        var store = Ext.getStore('ClientsStore');
	        
	        var index = store.findExact("id", id_client);
	        
	        this.onOpenCatalegClient(store.getAt(index));
        }
    },
    
    
    
    onBackToCatalegClient: function(){
    	var catalegP = this.getCatalegClientPortrait();
    	var cataleg = this.getCatalegClient();
    	
    	if(cataleg.isCreated()){
    		var id_client = cataleg.getData().id_client;
    	}
    	else {
    		var id_client = catalegP.getData().id_client;
    	}
    	
    	var store = Ext.getStore('ClientsStore');
	        
	   	var index = store.findExact("id", id_client);
	        
	    this.onOpenCatalegClient(store.getAt(index));
    },
    
   	aleatorio: function(inferior,superior){ 
	   	numPosibilidades = superior - inferior 
	   	aleat = Math.random() * numPosibilidades 
	   	aleat = Math.round(aleat) 
	   	return parseInt(inferior) + aleat 
	},
	
	onButtonInfoClient: function() {
		var infoClient = this.getInfoClient();
		Ext.Viewport.animateActiveItem(infoClient, this.coverRightTransition);
	},
    
    onBlurPriceTextField: function(){
    	var priceTF = this.getPriceTextField();
    	var units = this.getUnitsTextField();
    	var newValue;
    	if(parseInt(priceTF.getValue())){
    		newValue = parseInt(priceTF.getValue());
    	}
    	else {
			newValue = null;
    	}
    	priceTF.setValue(newValue);
		this.saveProduct(units.config._badge_page, units.config._badge_index);
    },
    
    calculatePrice: function(units){
    	console.log("calculatePrice()");
    	var priceTF = this.getPriceTextField();
    	var price_unit = priceTF.config._price;
    	
    	var unitsTF = this.getUnitsTextField();
    	var units = unitsTF.getValue();
    	if(units != null){
	    	var price = price_unit * parseInt(units);
	    	var newValue;
	    	
	    	if(price <= 0){
	    		newValue = null;
	    	}
	    	else {
	    		newValue = price;
	    	}
	    	
	    	priceTF.setValue(newValue);
    	}
    	else {
    		priceTF.setValue(null);
    	}
    },
    
    saveProduct: function(page, index){
    	var price = this.getPriceTextField().getValue();
    	var units = this.getUnitsTextField().getValue();
    	var units_price = this.getUnitsSelectField().getValue();
    	
    	if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
    	cataleg.changeBadge(page, index, units);
    	cataleg.changeProduct(page, index, units, price, units_price);
    },
    
    onBlurUnitsTextField: function() {
    	var units = this.getUnitsTextField();
    	var newValue;
    	if(parseInt(units.getValue())){
    		newValue = parseInt(units.getValue());
    	}
    	else {
			newValue = null;
    	}
		units.setValue(newValue);
		this.calculatePrice();
		this.saveProduct(units.config._badge_page, units.config._badge_index);
    },
    
    onRemoveUnitButtonTap: function() {
    	var units = this.getUnitsTextField();
    	var newValue;
    	if(units.getValue() != 'Unidades'){
    		if(parseInt(units.getValue()) == 1){
    			newValue = null;
    		}
    		else {
    			newValue = parseInt(units.getValue()) - 1;
    		}
    	}
    	units.setValue(newValue);  
		this.calculatePrice();
		this.saveProduct(units.config._badge_page, units.config._badge_index);
    },
    
    onAddUnitButtonTap: function(){
    	var units = this.getUnitsTextField();
    	var newValue;
    	if(units.getValue() == null){
    		newValue = 1;
    	}
    	else {
    		newValue = parseInt(units.getValue()) + 1;
    	}
    	units.setValue(newValue);  	
		this.calculatePrice();
		this.saveProduct(units.config._badge_page, units.config._badge_index);
    },
    
    onViewDetailOfProduct: function(product, page, index, units, price, units_price){
    	var unitsTF = this.getUnitsTextField();
    	unitsTF.setValue(units);
    	unitsTF.config._badge_page = page;
    	unitsTF.config._badge_index = index;
    	unitsTF.config._id_product = product['id'];
    	
    	var imageDetail = this.getImageDetail();
    	imageDetail.setSrc(product['image']);
    	
    	var nomDetail = this.getNomDetailLabel();
    	nomDetail.setHtml('<div style="font-size: 20pt;">'+ product['name'] +'</div>');
    	
    	var descriptionDetail = this.getDescriptionDetailLabel();
    	descriptionDetail.setHtml('<div style="font-size: 13pt;">'+ product['description'] +'</div>');
    	
    	var unitsSelectField = this.getUnitsSelectField();
    	var options = this.getOptionsOfProduct(product);
    	unitsSelectField.setOptions(options);
    	if(units_price != -1) {
    		unitsSelectField.setValue(units_price);
    	}
    	else {
    		units_price = options[0]['value'];
    	}
    	
    	var store = Ext.getStore('ProductsUnitsStore');
    	store.filter([{property: 'id_unit', value: units_price, exactMatch: true}]);
    	store.filter([{property: 'id_product', value: product['id'], exactMatch: true}]);
    	
    	var priceTF = this.getPriceTextField();
    	priceTF.config._price = store.getAt(0).getData()['price'];
    	priceTF.setValue(price);
    	store.clearFilter();
    },
    
    getOptionsOfProduct: function(product){
    	var productsUnitsStore = Ext.getStore('ProductsUnitsStore');
    	productsUnitsStore.filter([{property: "id_product", value: product['id'], exactMatch: true}]);
    	var productsUnits = productsUnitsStore.getRange();
    	
    	var unitsStore = Ext.getStore('UnitatsStore');
    	
    	var optionsUnits = [];
    	
    	for(var i = 0; i < productsUnitsStore.getCount(); i++){
    		var index = unitsStore.findExact('id', productsUnits[i].getData()['id_unit']);
    		
    		var text = unitsStore.getAt(index).getData()['unit'];
    		var value = unitsStore.getAt(index).getData()['id'];
    		
    		var option = {
    			text: text,
    			value: value
    		};
    		
    		optionsUnits.push(option);
    	}
    	
    	productsUnitsStore.clearFilter();
    	
    	return optionsUnits;
    },
    
    onChangeUnits: function(obj, newValue, oldValue, eOpts){
		console.log("onChangeUnits()");
		if(newValue != null){
	    	var price = this.getPriceTextField();
	    	var unitsTF = this.getUnitsTextField();
	    	var id_product = unitsTF.config._id_product;
	    	
	    	var store = Ext.getStore('ProductsUnitsStore');
	    	store.filter([{property: 'id_unit', value: newValue, exactMatch: true}]);
	    	store.filter([{property: 'id_product', value: id_product, exactMatch: true}]);
	    	
	    	price.config._price = store.getAt(0).getData()['price'];
	    	
	    	store.clearFilter();
	    	this.calculatePrice();
			this.saveProduct(unitsTF.config._badge_page, unitsTF.config._badge_index);
	    }
    },
    
    onChooseClient: function(view){
    	console.log("onChooseClient()");
    	var escollir = this.getEscollirClient();
    	escollir.setData({view: view});
    	Ext.Viewport.animateActiveItem(escollir, this.coverRightTransition);
    },
	
	onOpenCatalegClient: function(record) {
		console.log("onOpenCatalegClient()");
		
		var id_client = record.getData()['id'];
		
		//Carreguem les commandes d'aquest client.
		var openCommand;
		var commandsStore = Ext.getStore('CommandsStore');
		commandsStore.filter([{property: "id_client", value: id_client, exactMatch: true}]);
		console.log("Total commands of this client: " + commandsStore.getCount());
		commandsStore.filter([{property: 'state', value: 0, exactMatch: true}]);
		console.log("Open commands: " + commandsStore.getCount());
		
		if(commandsStore.getCount() != 0){
			openCommand = commandsStore.getAt(0);
		}
		else {
			var openCommand = new Preventa.model.CommandModel();
			var now = new Date();
    		var id = (now.getTime()).toString() + (this.aleatorio(0, 100)).toString();
    		
    		openCommand.set('id', id);
    		openCommand.set('id_client', id_client);
    		openCommand.set('state', 0);
    		openCommand.set('paid', false);
    		
    		commandsStore.add(openCommand);
    		commandsStore.sync();
    		
    		console.log("Create an open command.");
		}
		
		//Obrim el cataleg del client.
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
			var oldCataleg = this.getCatalegClient();
		}
		else {
			var cataleg = this.getCatalegClient();
			var oldCataleg = this.getCatalegClientPortrait();
		}
		
		if(oldCataleg.isCreated()){
			oldCataleg.removeThis();
		}
		
		if(!cataleg.isCreated()){
			cataleg.createCatalegClient();
		}
		
		
		//Canviem el nom del botó d'escollir client.
		var name_client = record.getData()['name'];
		var button = this.getButtonChooseClient();
		button.setText(name_client);
		
		cataleg.setData({id_client: id_client, allCommands: commandsStore, command: openCommand});
		this.loadProductsOfClient(id_client);
		Ext.Viewport.animateActiveItem(cataleg, this.revealLeftTransition);
		
		commandsStore.clearFilter();
		
		//Carreguem la informació del client.
		var infoClient = this.getInfoClient();
		infoClient.loadInfoClient(id_client);
	},
	
	onViewProductsOfCategory: function(category){
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		var products = Ext.getStore('ProductsStore');
		
		products.filter([{property: 'id_category', value: category['id'], exactMatch: true}]);
		
		cataleg.removeCarousel();
		cataleg.createCarousel(products);	
		
		products.clearFilter();
		this.showDetail();
	},
	
	loadProductsOfClient: function() {
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		var id_client = cataleg.getData().id_client;
		
		var productsClientsStore = Ext.getStore('ProductsClientsStore');

		productsClientsStore.filter([{property: "id_client", value: id_client, exactMatch: true}]);

		var products = [];
		for(var i = 0; i < productsClientsStore.getCount(); i++){
			products.push(productsClientsStore.getAt(i).getData()['id_product']);	
		}
		
		var productsStore = Ext.getStore('ProductsStore');
		
		productsStore.filterBy(
			function(record, id){ 
				var trobat = false; 
				var i = 0;
				while(i < products.length && !trobat){
					if(record.get('id') == products[i]){
						trobat = true;
					}
					i++;
				}
				
				return trobat;
			 }
		);
		
		cataleg.removeCarousel();
    	cataleg.createCarousel(productsStore);
    	
		productsStore.clearFilter();
    	productsClientsStore.clearFilter();
		
		this.resetButtons();
    	
    	var fitxaButton = this.getFitxaButton();
    	fitxaButton.setUi('plain');
    	fitxaButton.setStyle('background-color: grey');
    	this.showDetail();
	},
	
	loadCommandProducts: function(){
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		var id_client = cataleg.getData().id_client;
		var id_command = cataleg.getData().command.getData()['id'];
		
		var commandProductStore = Ext.getStore('CommandProductStore');
		commandProductStore.filter([{property: 'id_command', value: id_command, exactMatch: true}]);
		
		var products = [];
		
		for(var i = 0; i < commandProductStore.getCount(); i++){
			products.push(commandProductStore.getAt(i).getData()['id_product']);
		}
		
		var productsStore = Ext.getStore('ProductsStore');
		
		productsStore.filterBy(
			function(record, id){ 
				var trobat = false; 
				var i = 0;
				while(i < products.length && !trobat){
					if(record.get('id') == products[i]){
						trobat = true;
					}
					i++;
				}
				
				return trobat;
			 }
		);
		
		cataleg.removeCarousel();
    	cataleg.createCarousel(productsStore);
		
		productsStore.clearFilter();
		commandProductStore.clearFilter();
		
		this.resetButtons();
		
		var commandButton = this.getCommandProductsButton();
    	commandButton.setUi('plain');
    	commandButton.setStyle('background-color: grey');
    	this.showDetail();
	},
	
	loadProductsInOfert: function(){
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		var productsStore = Ext.getStore('ProductsStore');
		
		productsStore.filter("ofert", true);
		
		cataleg.removeCarousel();
    	cataleg.createCarousel(productsStore);
    	
    	var firstProduct = productsStore.getAt(0).getData();
    	
		productsStore.clearFilter();
		
		this.resetButtons();
		
    	var ofertButton = this.getOfertButton();
    	ofertButton.setUi('plain');
    	ofertButton.setStyle('background-color: grey');
    	this.showDetail();
	},
	
	loadAllProducts: function() {
		
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		cataleg.removeCarousel();
    	cataleg.createCarouselCategories();
		
		this.resetButtons();
		
    	var allButton = this.getAllProductsButton();
    	allButton.setUi('plain');
    	allButton.setStyle('background-color: grey;');
    	
    	this.hideDetail();
	},
	
	hideDetail: function(){
		console.log("hideDetail()");
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
    	var detail = cataleg.getItems()['items'][1];
   		detail.setStyle('height: 0%;');
   		
   		var filter = cataleg.getItems()['items'][2];
   		console.log(filter.getCls());
   		filter.setCls('filterButtonsAnimationTop'); 
   		filter.setData({top: '0%'});
   		
   		var carousel = cataleg.getItems()['items'][3];
   		carousel.setCls('carouselTransitionTop');
	},
	
	showDetail: function(){
		console.log("showDetail()");
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegClientPortrait();
		}
		else {
			var cataleg = this.getCatalegClient();
		}
		
		
		var filter = cataleg.getItems()['items'][2];
		var carousel = cataleg.getItems()['items'][3];
		
		if(filter.getData().top == '0%') {
			console.log("filter.top == 0%");
	   		filter.setCls('filterButtonsAnimationDown');
	   		filter.setData({top: '38%'});  		
	   		
	   		carousel.setCls('carouselTransitionDown');
		}
		
		
		var detail = cataleg.getItems()['items'][1];
		detail.setStyle('height: 38%');
	},
	
	resetButtons: function() {
		var fitxaButton = this.getFitxaButton();
		fitxaButton.setUi('normal');
		fitxaButton.setStyle();
		
		var ofertButton = this.getOfertButton();
    	ofertButton.setUi('normal');
    	ofertButton.setStyle();
		
    	var allButton = this.getAllProductsButton();
    	allButton.setUi('normal');
    	allButton.setStyle();
    	
    	var commandButton = this.getCommandProductsButton();
    	commandButton.setUi('normal');
    	commandButton.setStyle();
	},
	
	saveCommandProduct: function(id_product, id_command, units, total_price, units_price){
		console.log("saveCommandProduct()");
		var store = Ext.getStore('CommandProductStore');
		store.filter([
			{
				property: 'id_product',
				value: id_product,
				exactMatch: true
			},
			{
				property: 'id_command',
				value: id_command,
				exactMatch: true
			}
		]);
		
		if(units > 0){
			if(store.getCount() == 0){
				var model = new Preventa.model.CommandProductModel();
				var now = new Date();
				var id = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
				model.set("id", id);
				model.set("id_product", id_product);
				model.set("id_command", id_command);
				model.set("units", units);
				model.set("total_price", total_price);
				model.set("units_price", units_price);
				
				store.add(model);
				console.log(store.sync());
			}
			else {
				var model = store.getAt(0);
				model.set("units", units);
				model.set("total_price", total_price);
				model.set("units_price", units_price);
				
				store.add(model);
				console.log(store.sync());
			}
		}
		else {
			if(store.getCount() == 1){
				store.remove(store.getAt(0));
				console.log(store.sync());				
			}
		}
		
		
		store.clearFilter();
	},
	
	// Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    sleep: function(milliseconds) {
		var start = new Date().getTime();
		var time = new Date().getTime();
		while((time - start) < milliseconds){
			time = new Date().getTime();
		}
	},
    
    launch: function() {
		this.callParent(arguments);
    }
});
   