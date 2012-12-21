
Ext.define('Preventa.model.ProductsClientsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'id_product',
                type: 'int'
            },
            {
            	name: 'id_client',
            	type: 'int'
            }
        ]
    }
});