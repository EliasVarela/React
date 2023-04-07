import {useEffect,useState} from "react"
import "./ItemListContainer.css"
import { getProduct } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) => {
const [productos,setProductos] = useState([])
const [input,setInput]=useState("")
    useEffect(()=>{
        getProduct()
        .then(productos =>{
            setProductos(productos)
        })
    },[])
const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(input);
}

    return(
        <div>
            <h1 className="TituloList">{greeting}</h1>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e)=> setInput(e.target.value)}/>
                <button>Buscar</button>
            </form>
            <ItemList productos={productos}/>
        </div>
    )
}
export default ItemListContainer