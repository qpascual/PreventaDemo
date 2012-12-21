
Ext.define('Preventa.model.SessionsModel', {
    extend: 'Ext.data.Model',
    config: {
    	idProperty: 'id',
    	identifier: 'uuid',
        fields: [
        	{ name: 'id', type: 'auto' },
        	{ name: 'id_comercial', type: 'int' },
        	{ name: 'name', type: 'string' },
        	{ name: 'password', type: 'string' }
        ],
        validations: [
        	{ type: 'presence', field: 'id' },
        	{ type: 'presence', field: 'id_comercial' },
        	{ type: 'presence', field: 'name' },
        	{ type: 'presence', field: 'password' }
        ]
    }
});