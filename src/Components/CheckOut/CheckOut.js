import React, { useState, useContext } from "react";
import { CartContext } from '../../Context/CartContext'
import { getFirestore, collection, writeBatch, addDoc, Timestamp, doc } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckOut = () => {
    const { cart, clearCart, total } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [creatingOrder, setCreatingOrder] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        emailConfirm: "",
        phone: "",
    });
    
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const createOrder = (e) =>  {
    e.preventDefault();
    setCreatingOrder(true);
    delete formData.emailConfirm;
    let order = {};
    order.date = Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.products = cart.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price;
      const quantity = cartItem.quantity;
      const totalPrice = cartItem.price * cartItem.quantity;  
      return { id, name, price, quantity, totalPrice };
    });

    const firestoreDb = getFirestore();
    const orderCollection = collection(firestoreDb, "orders");
    addDoc(orderCollection, order)
      .then((resp) => setOrderId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => {        
        clearCart();
        updateStock();
        setCreatingOrder(false);
        setFormData({
          name: "",
          email: "",
          emailConfirm: "",
          phone: "",
        });
      });

    function updateStock() {
      const batch = writeBatch(firestoreDb);

      order.items.map((el) => {
        let updateDoc = doc(firestoreDb, "products", el.id);
        let currentStock = cart.find((item) => item.id === el.id).stock;

        batch.update(updateDoc, {
          stock: currentStock - el.quantity,
        });
      });
          batch.commit();
      }  
    };

  return (
    <>
      {creatingOrder ? (
        <div className="container">
          <div className="py-5 text-center mt-5">
            <h2 className="mt-5">Thanks for your purchase!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <strong>Se te enviará por correo un enlace para agendar la primera cita de entendimiento para armar tu caso de negocio.</strong>
            <br />
            <br />
            <br />
            <br />
            <Link className="btn btn-danger bg-gradient mt-5" to={`/`}>
              <strong>Continue shopping</strong>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          Please, fill this form to continue your checkout!
          <div className="container mt-5 form_container d-flex">
            <div className="container align-self-center position-relative">
              <div className="row">
                <div className="col-12">
                  <form
                    className="d-flex flex-column"
                    onSubmit={createOrder}
                    onChange={handleChange}
                  >
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Full name</label>
                      <input
                        type="name"
                        className="form-control form-control--color"
                        name="name"
                        placeholder="Jon Doe"
                        defaultValue={formData.name}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Mobile phone</label>
                      <input
                        type="name"
                        className="form-control form-control--color"
                        name="phone"
                        placeholder="55 1234 5678"
                        defaultValue={formData.phone}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Email</label>
                      <input
                        type="name"
                        className="form-control form-control--color"
                        name="email"
                        placeholder="mail@mail.com"
                        defaultValue={formData.email}
                        required
                      />
                    </div>
                    <div className="mb-3 d-flex flex-column align-items-center">
                      <label className="form-label">Confirm email</label>
                      <input
                        type="name"
                        className="form-control form-control--color"
                        name="emailConfirm"
                        placeholder="mail@mail.com"
                        defaultValue={formData.emailConfirm}
                        required
                      />
                    </div>
                    <button className="Button" onClick={createOrder}>Send me my products!</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;