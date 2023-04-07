const productos=[
{
    id:1,
    name:"Carne De Res",
    price:1200,
    category:"Carne roja",
    img:"https://www.proveeduriapiaf.com.ar/wp-content/uploads/5K4A8875.jpg",
    stock:300,
    description:"Corte especial"
},
{
    id:2,
    name:"Pollo",
    price: 1800,
    category:"Carne blanca",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylYgsUoUuog7nEln-j5jZOzEU5uPIk11IIQ&usqp=CAU",
    stock:200,
    description:"Filet de pollo"
},
{
    id:3,
    name:"Carne De Cerdo",
    price:1200,
    category:"Carne roja",
    img:"https://decarolis.com.ar/wp-content/uploads/2020/07/14-costillar-de-cerdo.jpg",
    stock:150,
    description:"Costilla de cerdo"
},
]

export const getProduct = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos)
            },1000)
    })
}
export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos.find(prod=>prod.id===productId))    
        },1000);
    })
}