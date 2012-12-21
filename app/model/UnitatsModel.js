
Ext.define('Preventa.model.UnitatsModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'unit',
                type: 'string'
            }
        ]
    }
});