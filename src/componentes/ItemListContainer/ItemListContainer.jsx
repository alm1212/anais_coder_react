import { useEffect, useState } from "react"
import { getProducts } from "../../asynMock"
import ItemList from "../ItemList/Itemlist"

const ItemListContainer =(props) =>  {
    
    const [products, setProducts] = useState([]) 

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res)
            })
            .catch( error => {
                console.log(error)
            })
    }, [])
    
    return (
        <>
            <div>
                <h1 style={{color:props.color,fontSize:100}} >{props.greeting}</h1>
                <ItemList products = {products }/>
            </div>
        </>
    ) 
}

export default ItemListContainer;