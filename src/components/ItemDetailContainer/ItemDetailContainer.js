import { getProductById } from "../../asyncMock"
import { useState,useEffect } from "react"
import Item from "../Items/Item"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [productos,setProductos]= useState ({})
    const itemId = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProductos(response)
        })
    },[itemId])

    return(
        <div>
            <h1>Detalles Del Alimento</h1>
            <div>
                <h2>{productos.name}</h2>
                <img src={productos.img} alt={productos.description} />
                <h4>Precio x Kg : ${productos.price}</h4>
                <p>En Stock: {productos.stock}</p>
            </div>
        </div>
    )
}
export default ItemDetailContainer