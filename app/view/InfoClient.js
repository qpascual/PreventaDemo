
Ext.define('Preventa.view.InfoClient', {
    extend: 'Ext.Container',
    xtype: 'InfoClient',
    id: 'InfoClient',
    fullscreen: true,
    
    initialize: function(){
    	console.log("Initialize view: InfoClient");
    	
    	var buttonBack = {
    		xtype: 'button',
    		text: 'Atras',
    		ui: 'back',
    		action: 'backCataleg'
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
    
    loadInfoClient: function(id_client) {
    	console.log("loadInfoClient()");
    	
    	var clientsStore = Ext.getStore('ClientsStore');
    	clientsStore.filter([{property: 'id', value: id_client, exactMatch: true}]);	
    	
    	var client = clientsStore.getAt(0).getData();
    	
    	clientsStore.clearFilter();
    	
 		this.getItems()['items'][0].setTitle(client['name']);
    	this.remove(this.getItems()['items'][1]);
    	
    	var datos = {
    		iconCls: 'user',
    		title: 'Datos',
    		xtype: 'container',
    		layout: {
    			type: 'vbox',
    			pack: 'center',
    			align: 'center'
    		},
    		items: [
    			{
    				xtype: 'fieldset',
    				width: '75%',
    				items: [
    					{
    						xtype: 'textfield',
    						label: 'Direccion: ',
	        				readOnly: true,
	        				value: client['direction']
    					},
    					{
    						xtype: 'textfield',
    						label: 'Ciudad: ',
	        				readOnly: true,
	        				value: client['city']
    					}
    				]
    			}
    		]
    	};
    	
    	var store = Ext.getStore('CommandsStore');
    	
    	store.filter([
    		{
    			property: 'id_client',
    			value: id_client,
    			exactMatch: true
    		},
    		{
    			property: 'paid',
    			value: false,
    			exactMatch: true
    		},
    		{
    			property: 'state',
    			value: 2,
    			exactMatch: true
    		}
    	]);
    	
    	var pedidos = [];
		for(var i = 0; i < store.getCount(); i++){
			var model = store.getAt(i).getData();
			var pedido = {
				id: model['id'],
				id_client: model['id_client'],
				state: model['state'],
				paid: model['paid']
			}
			
			pedidos.push(pedido);
		}
		
		store.clearFilter();
    	
    	if(pedidos.length > 0){
	    	var cobros = {
	    		xtype: 'container',
	    		iconCls: 'bookmarks',
	    		title: 'Cobros',
	    		items: [
	    			{
	    				xtype: 'list',
	    				height: '100%',
	    				width: '100%',
	    				itemTpl: [
					    	'<div>Pedido {id}</div>'
					   	],
					   	data: pedidos
	    			}
	    		]
	    	};
    	}
    	else {
    		var cobros = {
	    		xtype: 'container',
	    		iconCls: 'bookmarks',
	    		title: 'Cobros',
	    		layout: {
	    			type: 'vbox',
	    			align: 'center',
	    			pack: 'center'
	    		},
	    		items: [
	    			{
	    				xtype: 'label',
	    				html: 'NO HAY NINGUN COBRO PENDIENTE',
	    				style: 'opacity: 0.25; font-weight: bold; font-size: ' + window.innerWidth / 25 + 'px;'
	    			}
	    		]
	    	};
    	}
    	
    	var historial = {
    		xtype: 'container',
    		iconCls: 'time',
    		title: 'Historial',
    		layout: 'vbox',
    		height: '100%',
    		width: '100%',
    		items: [
    			{
    				xtype: 'container',
    				height: '12%',
    				width: '100%',
    				layout: {
    					type: 'hbox',
    					pack: 'center',
    					align: 'center'
    				},
    				items: [
    					{
    						xtype: 'button',
    						text: 'Pendientes de envio',
    						action: 'showClosedCommands',
    						margin: '0 2% 0 2%'
    					},
    					{
    						xtype: 'button',
    						text: 'Enviadas',
    						action: 'showSendedCommands',
    						margin: '0 0 0 2%'
    					}
    				]
    			},
    			{
    				xtype: 'container',
    				id: 'containerList',
    				height: '88%',
    				width: '100%',
    				items: [
    					{
    						xtype: 'list',
    						_id_client: client['id'],
    						id: 'listCommands',
    						height: '100%',
				    		width: '100%',
				    		itemTpl: [
				           		'<div>Pedido {id}</div>'
				           	]
    					}
    				]
    			}
    		]
    	};
    	
    	var tab = {
    		xtype: 'tabpanel',
    		tabBarPosition: 'bottom',
    		items: [
    			datos,
    			cobros,
    			historial,
    			{
    				title: 'Estadísticas',
    				iconCls: 'more'
    			}
    		]
    	};
    	
    	this.add([tab]);
    	
    	this.fireEvent('loadList');
    },
    
 	config: {
    	layout: {
    		type: 'fit'
    	}
    }

});