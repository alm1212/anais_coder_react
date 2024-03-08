import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asynMock"
import ItemList from "../ItemList/Itemlist"
import { useParams } from "react-router-dom"

const ItemListContainer =(props) =>  {
    
    const [products, setProducts] = useState([]) 
    const {categoryId} = useParams()



    useEffect(() => {
        const asynFunctions = categoryId ? getProductsByCategory : getProducts
        asynFunctions(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch( error => {
                console.log(error)
            })
    }, [categoryId])
    
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