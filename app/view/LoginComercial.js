
Ext.define('Preventa.view.LoginComercial', {
    extend: 'Ext.Container',
    xtype: 'LoginComercial',
    id: 'LoginComercial',
    fullscreen: true,
    
    requires: [
    	'Ext.Toolbar',
    	'Ext.form.FieldSet',
    	'Ext.field.Text',
    	'Ext.field.Password'
    ],
    
    initialize: function(){
    	console.log("Initialize view: LoginComercial");
    },

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'LOGIN'
            },
            {
                xtype: 'container',
                top: '30%',
                left: '12.5%',
                width: '75%',
                items: [
                	{
                		xtype: 'label',
                		html: 'Demo: '
                	},
                	{
                		xtype: 'label',
                		html: 'user: comercial1 / password: comercial1',
                		margin: '0 0 20 0'
                	},
                    {
                    	//Fieldset on aniran els dos "textfield", el del nom d'usuari i el de la contrasenya.
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'nameTextField',
                                label: 'Nombre'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'passwordTextField',
                                label: 'Contraseña'
                            }
                        ]
                    },
                    {
                    	//Label per si hi ha algun error al fer login.
                    	xtype: 'label',
                    	id: 'error_login_label',
                    	html: '<div id="error_login" style="color: red;">Error al iniciar sessión.</div>',
                    	hidden: true
                    },
                    {
                    	//Botó Login.
                        xtype: 'button',
                        id: 'loginButton',
                        action: 'login',
                        ui: 'confirm-round',
                        text: 'Login',
                        width: '50%',
                        top: '100%',
                        left: '50%'
                    }
                ]
            }
        ]
    }
});