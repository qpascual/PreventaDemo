
Ext.define('Preventa.store.ClientsStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Preventa.model.ClientModel',
        data: [
            {
                id: 1,
                name: 'Pere Llimona Ramonet',
                direction: 'Carrer Mecs, 15',
                city: 'Girona'
            },
            {
                id: 2,
                name: 'Pere Margui',
                direction: 'Carrer Perdal, 37',
                city: 'Escala'
            },
            {
                id: 3,
                name: 'Albert Margui',
                direction: 'Carrer Monza, 46',
                city: 'Salou'
            },
            {
                id: 4,
                name: 'Antoni Domenech',
                direction: 'Carrer Ter, 99',
                city: 'Barcelona'
            },
            {
                id: 5,
                name: 'Josep Antoni Perdalet',
                direction: 'Carrer Llimona, 3',
                city: 'Olot'
            }
        ],
        sorters: [{ property: 'name', direction: 'ASC' }]
    }
});