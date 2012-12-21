
Ext.define('Preventa.model.CommandProductModel', {
    extend: 'Ext.data.Model',

    config: {
    	idProperty: 'id',
    	identifier: 'uuid',
        fields: [
            {
                name: 'id',
                type: 'auto',
            },
            {
            	name: 'id_command_product',
            	type: 'int'
            },
            {
                name: 'id_product',
                type: 'int'
            },
            {
            	name: 'id_command',
            	type: 'int'
            },
            {
            	name: 'units',
            	type: 'int'
            },
            {
            	name: 'total_price',
            	type: 'int'
            },
            {
            	name: 'units_price',
            	type: 'int'
            }
        ]
    }
});