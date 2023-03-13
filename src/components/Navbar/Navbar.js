import "./Navbar.css"
import "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"
import Button from "../Button/Button"

const Navbar = () =>{
    return(
        <nav className= "Navbar">
            <div className="TitLog">
            <h1 className="Titulo">Carniceria Niku</h1>
            </div>
            <div className="Divcont">
                <Button label="Carne De Res" callback={()=>console.log("carne")} />
                <Button label="Pollo" />
                <Button label="Carne De Cerdo" />
            </div>

        </nav>
    )
}
export default Navbar