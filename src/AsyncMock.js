const products = [
    {
        id: '1',
        name: 'Evaluación de Proyecto de Inversión',
        price: 15000,
        category: 'Consulting Services',
        img: 'Images/cart.svg',
        stock: 10,
        description: 'Descripción del servicio profesional blah bla blah',
    },
    
    {
        id: '2',
        name: 'Investigación de Mercado y Competidores',
        price: 10000,
        category: 'Apuntes de ITAM',
        img: 'Images/cart.svg',
        stock: 5,
        description: 'Descripción del servicio profesional blah bla blah',
    },

    {
        id: '3',
        name: 'Mejorar los profits de mi negocio actual',
        price: 12000,
        category: 'Miscelaneous',
        img: 'Images/cart.svg',
        stock: 7,
        description: 'Descripción del servicio profesional blah bla blah',
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
} 