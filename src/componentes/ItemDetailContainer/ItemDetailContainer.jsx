import { useEffect, useState } from "react"
import { getProductById } from "../../asynMock";
import NuevoItemDetail from "../NuevoItemDetail/NuevoItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);
    const {productId} = useParams()

    useEffect( ()=> {
        getProductById(productId)
            .then( res => {
                setProduct(res) 
            })
            .catch( error => {
                console.log(error)
            })
    }, [productId])

  return (
    <div>
        <NuevoItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
