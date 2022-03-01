import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext'

function Cart() {
    //const [name, setName] = useState('')
    //const [email, setEmail] = useState('')
    
    const { cart, vaciarCarrito, sumaTotal, cantUnidades, deleteItem } = useContext(CartContext)
    
    return (
        //react.fragment
        <>
            {cart.length === 0 ? (
                <>
                    <h2>Aún no hay productos, vuelve al home</h2>
                    <Link to="/">Home</Link>
                </>
            ) : (
            <>
                {console.log(cart)}
                {cart.map((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.name}</h3>
                        <h5>Precio unit: {producto.price}</h5>
                        <h5>Cantidad: {producto.cantidad}</h5>
                        <button onClick={() => deleteItem(producto.id)}>
                            X
                        </button>
                    </div>
                ))}
                <h3>Total Unidades: {cantUnidades}</h3>
                <h3>Monto Total: {sumaTotal}</h3>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </>
            )}

        </>
    )
}

export default Cart;