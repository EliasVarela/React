import Item from "../Items/Item"

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    const productToAdd = {
        id, name ,price, quantity
    }
       
}
    return(
        <div>
            <h1>Detalles Del Alimento</h1>
            <div>
                <h3>{name}</h3>
                <img src={{img}} alt={description} />
                <h4>Precio x Kg : ${price}</h4>
                <p>En Stock: {stock}</p>
            </div>
        </div>
    )

export default ItemDetail
