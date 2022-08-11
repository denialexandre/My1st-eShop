const products = [
    {
        id: '1',
        name: 'Evaluación de Proyecto de Inversión',
        price: '15,000 MXN',
        category: 'Consulting',
        img: 'https://www.econlink.com.ar/files/evaluacion-proyectos-inversion.png',
        stock: 4,
        description: 'Descripción del servicio profesional blah bla blah',
    },
    
    {
        id: '2',
        name: 'Investigación de Mercado y Competidores',
        price: '10,000 MXN',
        category: 'Consulting',
        img: 'https://inprofit.es/server/Portal_0033275/img/categories/Analisis-de-mercado-y-competencia.jpg',
        stock: 5,
        description: 'Descripción del servicio profesional blah bla blah',
    },

    {
        id: '3',
        name: 'Mejorar los profits de mi negocio actual',
        price: '12,000 MXN',
        category: 'Miscelaneous',
        img: 'https://www.anfix.com/hs-fs/hubfs/Imported_Blog_Media/incrementar-ingresos-3.jpg?width=563&height=317&name=incrementar-ingresos-3.jpg',
        stock: 6,
        description: 'Descripción del servicio profesional blah bla blah',
    },

    {
        id: '4',
        name: 'Microeconomía avanzada 1 | Apuntes',
        price: '5,000 MXN',
        category: 'ITAM',
        img: 'https://teaching.weblogs.anu.edu.au/files/2021/09/Exam_pic.jpg',
        stock: 3,
        description: 'Apuntes de la clase Microeconomía Avanzada 1 con el Profesor Andrei Gomberg. Además contiente N examenes parciales y examenes finales RESUELTOS y correctos.',
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

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}