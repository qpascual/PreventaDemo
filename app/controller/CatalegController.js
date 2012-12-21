
Ext.define("Preventa.controller.CatalegController", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
        	LoginComercial: "LoginComercial",
        	CatalegCategories: "CatalegCategories",
        	LogoutButton: "button[action=logout]",
        	CatalegProductes: "CatalegProductes",
        	BackToCategoriesButton: "button[action=backToCategories]",
        	BackToProductsButton: "button[action=backToProducts]",
        	DetailProduct: "DetailProduct",
        	PriceTextField: "textfield[identificador=priceTF]",
        	ChooseClientButton: "button[action=chooseClient]",
        	EscollirClient: "EscollirClient",
        	CatalegClient: "CatalegClient",
        	DetailProductPortrait: "DetailProductPortrait",
        	CatalegCategoriesPortrait: "CatalegCategoriesPortrait",
        	CatalegProductesPortrait: "CatalegProductesPortrait"
        },
        control: {
        	CatalegCategories: {
        		onItemCarouselTap: "onCategoryCarouselTap",
        		onChooseClient: "onChooseClient"
        	},
        	CatalegCategoriesPortrait: {
        		onItemCarouselTap: "onCategoryCarouselTap",
        		onChooseClient: "onChooseClient"
        	},
        	LogoutButton: {
        		tap: "onLogoutButton"
        	},
        	BackToCategoriesButton: {
        		tap: "onBackToCategoriesButton"
        	},
        	CatalegProductes: {
        		onItemCarouselTap: "onProductCarouselTap",
        		onChooseClient: "onChooseClient"
        	},
        	CatalegProductesPortrait: {
        		onItemCarouselTap: "onProductCarouselTap",
        		onChooseClient: "onChooseClient"
        	},
        	BackToProductsButton: {
        		tap: "onBackToProductsButton"
        	},
        	DetailProduct: {
        		onChangeUnits: "onChangeUnits",
        		onChooseClient: "onChooseClient"
        	},
        	DetailProductPortrait: {
        		onChangeUnits: "onChangeUnits",
        		onChooseClient: "onChooseClient"
        	}
        }
    },
    
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },		//SLIDE FORWARD
    slideRightTransition: { type: 'slide', direction: 'right' }, 	//SLIDE BACK
    
    coverRightTransition: { type: 'cover', direction: 'right'},
    
    revealLeftTransition: { type: 'reveal', direction: 'left'},
    flipTransition: { type: 'flip' },
    
    onChooseClient: function(view){
    	var escollirClient = this.getEscollirClient();
    	escollirClient.setData({view: view});
    	Ext.Viewport.animateActiveItem(escollirClient, this.coverRightTransition);
    },
    
	onLogoutButton: function(){
    	var sessions = Ext.getStore('SessionsStore');
    	sessions.removeAll(sessions.getRange());
    	
		console.log(sessions.sync());
		var login = this.getLoginComercial();
		
		Ext.Viewport.animateActiveItem(login, this.flipTransition);
	},
	
	onCategoryCarouselTap: function(element) {
		var catalegP = this.getCatalegProductesPortrait();
		var cataleg = this.getCatalegProductes();
		
		if(window.innerHeight > window.innerWidth){
			var open = this.getCatalegProductesPortrait();
			cataleg.removeCarousel();
		}
		else {
			var open = this.getCatalegProductes();
			catalegP.removeCarousel();
		}
		
		open.removeCarousel();
		open.createCarousel(element);
		Ext.Viewport.animateActiveItem(open, this.slideLeftTransition);
	},
	
	onBackToCategoriesButton: function() {
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegCategoriesPortrait();
		}
		else {
			var cataleg = this.getCatalegCategories();
		}
		cataleg.removeCarousel();
		cataleg.createCarousel();
		
		Ext.Viewport.animateActiveItem(cataleg, this.slideRightTransition);
	},
	
	onChangeUnits: function(newValue) {
		var priceTF = this.getPriceTextField();
		priceTF.setValue(newValue + "");
	},
	
	onProductCarouselTap: function(element) {
		if(window.innerHeight > window.innerWidth){
			var detail = this.getDetailProductPortrait();
		}
		else {
			var detail = this.getDetailProduct();
		}
		
		detail.removeDetail();
		detail.setData({product: element});
		detail.createDetailProduct(element);
		
		Ext.Viewport.animateActiveItem(detail, this.slideLeftTransition);
	},
	
	onBackToProductsButton: function(){
		var detail = this.getDetailProduct();
		var detailP = this.getDetailProductPortrait();
		
		detail.removeDetail();
		detailP.removeDetail();
		
		var catalegPortrait = this.getCatalegProductesPortrait();
		console.log("catalegPortrait.isCreated(): " + catalegPortrait.isCreated());
		var cataleg = this.getCatalegProductes();
		console.log("cataleg.isCreated(): " + cataleg.isCreated());
		var category;
		if(!catalegPortrait.isCreated()){
			category = cataleg.getData().category;
		}
		else {
			category = catalegPortrait.getData().category;
		}
		
		var open;
		if(window.innerHeight > window.innerWidth){
			open = catalegPortrait;
		}
		else {
			open = cataleg;
		}
		
		console.log(category);
		
		open.removeCarousel();
		open.createCarousel(category);
		
		Ext.Viewport.animateActiveItem(open, this.slideRightTransition);
	},
	
	launch: function(){
		this.callParent(arguments);
	}
});	