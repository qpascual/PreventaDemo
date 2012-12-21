
Ext.define('Preventa.model.ProductModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },
            {
                name: 'image',
                type: 'string'
            },
            {
                name: 'id_category',
                type: 'int'
            },
            {
                name: 'ofert',
                type: 'boolean'
            }
        ]
    }
});