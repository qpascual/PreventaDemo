
Ext.define("Preventa.controller.SessionsController", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
        	LoginButton: "button[action=login]",
        	NameTextField: "#nameTextField",
        	PasswordTextField: "#passwordTextField",
        	ErrorLabel: "#error_login_label",
        	LoginComercial: "LoginComercial",
        	Cataleg: "CatalegCategories",
        	CatalegPortrait: "CatalegCategoriesPortrait"
        },
        control: {
        	LoginButton: {
        		tap: "onTapLoginButton"
        	}
        }
    },
    
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },
    slideRightTransition: { type: 'slide', direction: 'right' },
    
    flipTransition: { type: 'flip' },
    
    // Helper functions
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    onTapLoginButton: function(button, e, eOpts){
    	var name = this.getNameTextField().getValue();
    	var password = this.getPasswordTextField().getValue();
    	var errorLabel = this.getErrorLabel();
    	
    	var model = this.autentica(name, password);
    	
    	if(model != false){
    		errorLabel.hide();
    		var sessions = Ext.getStore('SessionsStore');
    		var now = new Date();
    		var sessioId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
    		var sessio = new Preventa.model.SessionsModel();
    		sessio.set("id_comercial", model['id']);
    		sessio.set("id", sessioId);
    		sessio.set("name", model['name']);
    		sessio.set("password", model['password']);
    		sessions.add(sessio);
    		console.log(sessions.sync());
    		this.openCataleg();
    	}
    	else {
    		errorLabel.show();
    	}
    },
    
    openCataleg: function(){
    	if(window.innerHeight > window.innerWidth){
	    	var cataleg = this.getCatalegPortrait();
    	}
    	else {
	    	var cataleg = this.getCataleg();
	    }
    	
	    Ext.Viewport.animateActiveItem(cataleg, this.flipTransition);
    },
    
    /**
     * Funció que autentica un usuari.
	 * @param {Object} name Nom que volem autenticar.
	 * @param {Object} password Contrasenya que volem autenticar.
	 * @return false - si no s'ha pogut realitzar l'autentificació. Si s'ha pogut ens retornarà el model de l'usuari.
     */
    autentica: function(name, password){
    	var comercialsStore = Ext.getStore('ComercialStore');
    	var index = comercialsStore.findExact("name", name);
    	
    	if(index != -1){
    		var model = comercialsStore.getAt(index);
    		var data = model.getData();
    		if(data['password'] == password){
    			return data;
    		}
    		else {
    			return false;
    		}
    	}
    	else {
    		return false;
    		//Ext.Msg.alert('ERROR', 'Nombre de usuario incorrecto.', Ext.emptyFn);
    	}
    },
    
    launch: function() {
		this.callParent(arguments);
    }
});
   