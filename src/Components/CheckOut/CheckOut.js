import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'


const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext)  

    const createOrder = async () => {
        try {
            const objOrder = {
                buyer: {
                    name: 'Daenys Alexandre',
                    phone: '5534147557',
                    email: 'deni.alexandre.garc@gmail.com'
                },
                items: cart,
                total,
                date: Timestamp.fromDate(new Date())
            }

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAdded = cart.find(prod => prod.id === doc.id)
                const prodQuaantity = productAdded?.quantity

                if(stockDb >= prodQuaantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuaantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
                batch.commit()
                console.log(orderAdded.id)
                clearCart()
            } else {
                console.log('There are out of stock products')
            }
        } catch (error) {
            console.log(error)
        } finally {
            console.log('Function "createOrder has finished the process')
        }
    }

    return (
        <div>
            <h1>Check out</h1>
            <h2>Please, fill this form!</h2>
            <button className="Button" onClick={createOrder}>Send me my products!</button>
        </div>
    )
}

export default Checkout