
Ext.define('Preventa.model.ComercialModel', {
    extend: 'Ext.data.Model',
    config: {
    	idProperty: 'id',
        fields: [
        	{ name: 'id', type: 'int' },
        	{ name: 'name', type: 'string' },
        	{ name: 'password', type: 'string' }
        ],
        validations: [
        	{ type: 'presence', field: 'id' },
        	{ type: 'presence', field: 'name' },
        	{ type: 'presence', field: 'password' }
        ]
    }
});