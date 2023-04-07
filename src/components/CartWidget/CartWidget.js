import cart from "./assets/cart.ico"
import "./CartWidget.css"

const CartWidget = ()=>{
    return(
    <div className="IconoCarr">
        <img src={cart} alt="icono-carrito" />
        0
    </div> 
    )
}
export default CartWidget