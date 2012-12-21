
Ext.define("Preventa.controller.InfoClientController", {
    extend: "Ext.app.Controller",
	config: {
        refs: {
        	CatalegClient: 'CatalegClient',
        	ListCommands: '#listCommands',
        	ContainerList: '#containerList',
        	ClosedCommandsButton: 'button[action=showClosedCommands]',
        	SendedCommandsButton: 'button[action=showSendedCommands]',
        	InfoClient: 'InfoClient',
        	BackInfoButton: 'button[action=backInfo]',
        	DetailCommand: 'DetailCommand'
        },
        control: {
        	ClosedCommandsButton: {
        		tap: 'onClosedCommandsButton'
        	},
        	SendedCommandsButton: {
        		tap: 'onSendedCommandsButton'
        	},
        	InfoClient: {
        		loadList: 'onClosedCommandsButton',
        		openCommand: 'onOpenCommand'
        	},
        	BackInfoButton: {
        		tap: 'onBackInfoButton'
        	}
        }
    },
    
    // Transitions
    slideLeftTransition: { type: 'slide', direction: 'left' },		//SLIDE FORWARD
    slideRightTransition: { type: 'slide', direction: 'right' }, 	//SLIDE BACK
    
    coverRightTransition: { type: 'cover', direction: 'right'},
    
    revealLeftTransition: { type: 'reveal', direction: 'left'},
    
    flipTransition: { type: 'flip' },
    
    onOpenCommand: function(view, index, target, record, e, eOpts){
    	var detail = this.getDetailCommand();
    	detail.createDetailCommand(record.data);
    	Ext.Viewport.animateActiveItem(detail, this.flipTransition);
    },
    
    onBackInfoButton: function(){
    	var info = this.getInfoClient();
    	Ext.Viewport.animateActiveItem(info, this.flipTransition);
    },
    
    onSendedCommandsButton: function(){
    	console.log("onSendedCommandsButton");
    	var list = this.getListCommands();
    	var id_client = list.config._id_client;
    	
    	var containerList = this.getContainerList();
    	
    	containerList.remove(list);
    	
    	this.setDataList(2, id_client);
    	this.resetButtons();
    	
    	var SendedCommandsButton = this.getSendedCommandsButton();
		SendedCommandsButton.setUi('plain');
		SendedCommandsButton.setStyle('background-color: grey');
    },
    
    onClosedCommandsButton: function(){
    	console.log("onClosedCommandsButton");
    	var list = this.getListCommands();
    	var id_client = list.config._id_client;
    	
    	var containerList = this.getContainerList();
    	
    	containerList.remove(list);
    	
    	this.setDataList(1, id_client);
    	this.resetButtons();
    	
    	var ClosedCommandsButton = this.getClosedCommandsButton();
		ClosedCommandsButton.setUi('plain');
		ClosedCommandsButton.setStyle('background-color: grey');
    },
    
    setDataList: function(state, id_client) {
		var store = Ext.getStore('CommandsStore');
		store.filter(
			[
				{
					property: 'state', 
					value: state, 
					exactMatch: true
				},
				{
					property: 'id_client',
					value: id_client,
					exactMatch: true
				}
			]
		);
		
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
		
		if(pedidos.length > 0) {
			var list = {
				xtype: 'list',
	    		_id_client: id_client,
	    		id: 'listCommands',
	    		height: '100%',
				width: '100%',
				itemTpl: [
					'<div>Pedido {id}</div>'
				],
				listeners: {
				   	itemtap: {
		        		fn: this.onOpenCommand,
		          		scope: this
		           	}
				},
				data: pedidos
			};
		}
		else {
			var list = {
	    		xtype: 'container',
	    		_id_client: id_client,
	    		id: 'listCommands',
	    		layout: {
	    			type: 'vbox',
	    			align: 'center',
	    			pack: 'center'
	    		},
	    		height: '100%',
	    		width: '100%',
	    		items: [
	    			{
	    				xtype: 'label',
	    				html: 'NO HAY NINGUN PEDIDO',
	    				style: 'opacity: 0.25; font-weight: bold; font-size: ' + window.innerWidth / 20 + 'px;'
	    			}
	    		]
	    	};
		}
		
		var containerList = this.getContainerList();
    	
    	containerList.add(list);
		
		store.clearFilter();
    },
    
    resetButtons: function() {
		var ClosedCommandsButton = this.getClosedCommandsButton();
    	ClosedCommandsButton.setUi('normal');
    	ClosedCommandsButton.setStyle();
		
    	var SendedCommandsButton = this.getSendedCommandsButton();
    	SendedCommandsButton.setUi('normal');
    	SendedCommandsButton.setStyle();
	},
	
    launch: function() {
		this.callParent(arguments);
    }
});
   