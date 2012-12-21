
Ext.define('Preventa.model.CategoryModel', {
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
            	name: 'image',
            	type: 'string'
            }
        ]
    }
});