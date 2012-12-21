
Ext.define('Preventa.model.CommandModel', {
    extend: 'Ext.data.Model',

    config: {
    	idProperty: 'id',
    	identifier: 'uuid',
        fields: [
            {
                name: 'id',
                type: 'int',
            },
            {
                name: 'id_client',
                type: 'int'
            },
            {
            	name: 'state',
            	type: 'int'
            },
            {
            	name: 'paid',
            	type: 'boolean'
            }
        ]
    }
});