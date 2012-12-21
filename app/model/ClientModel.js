
Ext.define('Preventa.model.ClientModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int',
            },
            {
                name: 'name',
                type: 'string'
            },
            {
            	name: 'direction',
            	type: 'string'
            },
            {
            	name: 'city',
            	type: 'string'
            }
        ]
    }
});