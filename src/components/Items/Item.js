import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({id,name,img, description , price } ) =>{
    return(
                <div className="Cart">
                    <h3>{name}</h3>
                    <img src={img} alt={description} style={{width:300}}/>
                    <p>Precio por KG: ${price}</p>
                    <Link to={`/item/${id}`} className="Option">Ver Detalles</Link>
                    
                </div>
    )
}
export default Item