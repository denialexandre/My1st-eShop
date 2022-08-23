import './CheckOut.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection, Timestamp,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../Services/Firebase/index'

const Checkout = () => {

    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [mobilephone, setmobilephone] = useState();
    
    const { cart, clearCart, total } = useContext(CartContext)  

    const createOrder = async () => {
        try {
            const objOrder = {
                client: {
                    firstname: 'firstname',
                    lastname: 'lastname',
                    mobilephone: 'mobilephone',
                    email: 'email'
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
                <form action="#" method="post" name="form_name" id="form_id" class="form_class" >
                <label>Name: </label>
                <input type="text" name="firstname" id="firstname" placeholder="First name" />
                <br></br>
                <label>Last name: </label>
                <input type="text" name="lastname" id="lastname" placeholder="Last name" />
                <br></br>
                <label>Email: </label>
                <input type="text" name="email" id="email" placeholder="Email" />
                <br></br>
                <label>Mobile phone: </label>
                <input type="text" name="mobilephone" id="mobilephone" placeholder="Mobile phone" />
                <br></br>
                <br></br>
                <button className="Button" onClick={createOrder}>Send me my products!</button>
            </form>            
        </div>
    )
}

export default Checkout