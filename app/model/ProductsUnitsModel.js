
Ext.define('Preventa.model.ProductsUnitsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'id_unit',
                type: 'int'
            },
            {
            	name: 'id_product',
            	type: 'int'
            },
            {
            	name: 'price',
            	type: 'int'
            }
        ]
    }
});