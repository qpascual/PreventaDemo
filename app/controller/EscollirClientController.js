
Ext.define("Preventa.controller.EscollirClientController", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
        	CatalegClient: 'CatalegClient',
        	EscollirClient: 'EscollirClient',
        	CatalegCategories: 'CatalegCategories',
        	CatalegCategoriesPortrait: 'CatalegCategoriesPortrait',
        	CatalegProductes: 'CatalegProductes',
        	CatalegProductesPortrait: 'CatalegProductesPortrait',
        	DetailProduct: 'DetailProduct',
        	DetailProductPortrait: 'DetailProductPortrait',
        	NoClientButton: 'button[action=noclient]'
        },
        control: {
        	EscollirClient: {
        		BackToDetailProduct: "onBackToDetailProduct",
        		BackToCatalegCategories: "onBackToCatalegCategories",
        		BackToCatalegProductes: "onBackToCatalegProductes"
        	},
        	NoClientButton: {
        		tap: "onNoClientButton"
        	}
        }
    },
    
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },		//SLIDE FORWARD
    slideRightTransition: { type: 'slide', direction: 'right' }, 	//SLIDE BACK
    
    coverRightTransition: { type: 'cover', direction: 'right'},
    
    revealLeftTransition: { type: 'reveal', direction: 'left'},

	onBackToDetailProduct: function() {
		var detail = this.getDetailProduct();
		var detailP = this.getDetailProductPortrait();
		var detallObrir;
		var data;
		
		if(detailP.isCreated()){
			data = detailP.getData();
			detailP.removeDetail();
		}
		
		if(detail.isCreated()){
			data = detail.getData();
			detail.removeDetail();
		}
		
		if(window.innerHeight > window.innerWidth){
			detailP.createDetailProduct(data.product);
			detallObrir = detailP;
		}
		else {
			detail.createDetailProduct(data.product);
			detallObrir = detail;
		}
		
		Ext.Viewport.animateActiveItem(detallObrir, this.revealLeftTransition);
	},
	
	onBackToCatalegCategories: function() {
		console.log("onBackToCatalegCategories()");
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegCategoriesPortrait();
		}
		else {
			var cataleg = this.getCatalegCategories();
		}
		
		cataleg.removeCarousel();
		cataleg.createCarousel();
		
		Ext.Viewport.animateActiveItem(cataleg, this.revealLeftTransition);
	},
	
	onBackToCatalegProductes: function() {
		var cataleg = this.getCatalegProductes();
		var catalegP = this.getCatalegProductesPortrait();
		var open;
		
		if(!cataleg.isCreated()){
			var data = catalegP.getData();
			catalegP.removeCarousel();
		}
		else {
			var data = cataleg.getData();
			cataleg.removeCarousel();	
		}
		
		if(window.innerHeight > window.innerWidth){
			catalegP.removeCarousel();
			catalegP.createCarousel(data.category);
			open = catalegP;
		}
		else {
			cataleg.removeCarousel();
			cataleg.createCarousel(data.category);
			open = cataleg;
		}
		
		Ext.Viewport.animateActiveItem(open, this.revealLeftTransition);
	},
	
	onNoClientButton: function() {
		if(window.innerHeight > window.innerWidth){
			var cataleg = this.getCatalegCategoriesPortrait();
		}
		else {
			var cataleg = this.getCatalegCategories();
		}
		
		cataleg.removeCarousel();
		cataleg.createCarousel();
		
		Ext.Viewport.animateActiveItem(cataleg, this.revealLeftTransition);
	},
	
    launch: function() {
		this.callParent(arguments);
    }
});
   