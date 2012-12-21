
Ext.define('Preventa.store.ProductsStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Preventa.model.ProductModel',
        data: [
            {
                id: 1,
                name: 'Jamon iberico puro de bellota',
                description: 'La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.  La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.  La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.   La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.  La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.   La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad. La pureza de lo auténtico, con una curación de entre 36 y 42 meses y el exquisito sabor del ibérico puro de bellota criado en libertad.',
                image: 'app/img/jamon/1.jpg',
                id_category: 1,
                ofert: true
            },
            {
                id: 2,
                name: 'Jamon iberico puro de bellota cortado a mano',
                description: 'Cortado a mano y a cuchillo; y envasado al vacÌo. AsÌ guarda todo su aroma y su exquisito sabor. Presentado en cajitas de 100g, 200g y 500g.',
                image: 'app/img/jamon/2.jpg',
                id_category: 1,
                ofert: true
            },
            {
                id: 3,
                name: 'Jamon iberico puro de bellota deshuesado',
                description: 'Lo mejor de un jamón ibérico puro de bellota, deshuesado y envasado al vacío. Una opción inmejorable para tomar jamón recién cortado, sin tener una pata en casa!',
                image: 'app/img/jamon/3.jpg',
                id_category: 1,
                ofert: true
            },
            {
                id: 4,
                name: 'Taquitos de jamon iberico puro de bellota',
                description: 'Taquitos de jamón 100% ibérico, de bellota. Perfecto para un aperitivo informal. Un ingrediente que no debe faltar en su cocina: añadalo a su recetas y consiga un sabor incomparable.',
                image: 'app/img/jamon/4.jpg',
                id_category: 1,
                ofert: true
            },
            {
                id: 12,
                name: 'Jamon serrano en lonchas',
                description: 'El jamon serrano de bodega en lonchas de Embutidos Manolo presenta las ventajas de la facilidad para su consumo y el precio frente a otros tipos de jamones.',
                image: 'app/img/jamon/5.jpg',
                id_category: 1,
                ofert: true
            },
            {
                id: 5,
                name: 'Lomo iberico puro de bellota',
                description: 'La tradición ibÈrica m·s pura, con un sabor delicado y salvaje, absolutamente irresistible',
                image: 'app/img/lomo/1.jpg',
                id_category: 2,
                ofert: true
            },
            {
                id: 6,
                name: 'Lomo iberico puro de bellota loncheado',
                description: 'Todo el sabor del lomo 100% ibérico y de bellota, cortado a mano por un profesional.',
                image: 'app/img/lomo/2.jpg',
                id_category: 2,
                ofert: true
            },
            {
                id: 13,
                name: 'Lomo curado extra natural',
                description: 'El lomo embuchado curado extra natural de Embutidos Manolo es un lomo de cerdo blanco curado al humo de madera de roble.',
                image: 'app/img/lomo/3.jpg',
                id_category: 2,
                ofert: false
            },
            {
                id: 7,
                name: 'Caña de chorizo iberico puro de bellota',
                description: 'Este producto tradicional, elaborado con nuestras carnes 100% ibèricas de bellota, se convierte en una delicatesen. Un chorizo para los paladares más exigentes.',
                image: 'app/img/chorizo/1.jpg',
                id_category: 3,
                ofert: true
            },
            {
                id: 8,
                name: 'Chorizo jabuguito iberico puro de bellota',
                description: 'El mejor chorizo con un toque de picante. Un sabor que no olvidar·.',
                image: 'app/img/chorizo/2.jpg',
                id_category: 3,
                ofert: false
            },
            {
                id: 14,
                name: 'Chorizo gallego',
                description: 'El chorizo gallego de Montepicato es un chorizo hecho en la misma Galicia y con toda la tradición artesanal que atesora este fabricante.',
                image: 'app/img/chorizo/3.jpg',
                id_category: 3,
                ofert: false
            },
            {
                id: 9,
                name: 'Salchichon artesanal iberico puro de bellota',
                description: 'Una pieza exquisita, elaborada artesanalmente, siguiendo el patrÛn de la receta familiar.',
                image: 'app/img/salchichon/1.jpg',
                id_category: 4,
                ofert: true
            },
            {
                id: 10,
                name: 'Salchichon de cerdo herradura',
                description: 'Salchichon de cerdo en forma de herradura curado al aire de León.',
                image: 'app/img/salchichon/2.jpg',
                id_category: 4,
                ofert: true
            },
            {
                id: 11,
                name: 'Salchichon de cerdo vela',
                description: 'El salchichÛn de cerdo en vela o barra de Embutidos Manolo tiene un sabor muy tradicional y suave, ideal para niÒos.',
                image: 'app/img/salchichon/3.jpg',
                id_category: 4,
                ofert: false
            }
        ]
    }
});