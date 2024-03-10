import { useEffect, useState } from "react"
import { getProductById } from "../../asynMock";
import NuevoItemDetail from "../NuevoItemDetail/NuevoItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();

    const {productoId} = useParams()

    useEffect( ()=> {
        getProductById(productoId)
            .then((res) => {
                setProduct(res[0])
            })
            .catch( error => {
                console.log(error)
            })
    }, [productoId])

  return (
    <div>
        <NuevoItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer
