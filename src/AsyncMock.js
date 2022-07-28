const products = [
    {
        id: '1',
        name: 'Evaluación de Proyecto de Inversión',
        price: 15000,
        category: 'Consulting Services',
        img: '../public/Images/1.jpg',
        stock: 10,
        description: 'Descripción del servicio profesional blah bla blah',
    },
    
    {
        id: '2',
        name: 'Investigación de Mercado y Competidores',
        price: 10000,
        category: 'Apuntes de ITAM',
        img: '../public/Images/2.jpg',
        //img: 'Images/cart.svg',
        stock: 5,
        description: 'Descripción del servicio profesional blah bla blah',
    },

    {
        id: '3',
        name: 'Mejorar los profits de mi negocio actual',
        price: 12000,
        category: 'Miscelaneous',
        img: '../public/Images/3.jpg',
        stock: 7,
        description: 'Descripción del servicio profesional blah bla blah',
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}