
Ext.define('Preventa.store.CategoriesStore', {
    extend: 'Ext.data.Store',

    config: {
        model: 'Preventa.model.CategoryModel',
        data: [
            {
                id: 1,
                name: 'Jamon',
                image: 'app/img/jamon/1.jpg'
            },
            {
                id: 2,
                name: 'Lomo',
                image: 'app/img/lomo/1.jpg'
            },
            {
                id: 3,
                name: 'Chorizo',
                image: 'app/img/chorizo/1.jpg'
            },
            {
                id: 4,
                name: 'Salchichon',
                image: 'app/img/salchichon/1.jpg'
            }
        ]
    }
});