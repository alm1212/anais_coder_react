import { useEffect, useState } from "react"
import { getProductById } from "../../asynMock";
import NuevoItemDetail from "../NuevoItemDetail/NuevoItemDetail";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    useEffect( ()=> {
        getProductById('2')
            .then( res => {
                setProduct(res) 
            })
            .catch( error => {
                console.log(error)
            })
    }, [])

  return (
    <div>
        <NuevoItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
