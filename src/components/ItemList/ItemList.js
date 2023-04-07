import Item from "../Items/Item"
import "./ItemList.css"
const ItemList = ({productos}) =>{
    return(
            <div className="divCont" >
                {productos.map(productos=> <Item key={productos.id} {...productos}/>)}
            </div>

    )
}
export default ItemList