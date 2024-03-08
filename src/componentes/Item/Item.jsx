import { Link } from "react-router-dom"


const Item = ({id, name, price, category, img, stock}) => {


  return (
    <article style={{borderStyle:"inset", borderRadius:"10px", margin:"8px"}}>
        <h1 style={{marginTop:"10px"}}>{name}</h1>
        <img src={img} style={{width:200, height:200}}/>
        <p>Categoría: {category}</p>
        <p>Capacidad: {stock}</p>        
        <h2>$ {price} UYU</h2>        
        <Link to={`/detail/${id}`} style={{borderStyle:"inset", borderRadius:"12px", padding:"2px"}} >Ver detalle</Link>
    </article>
  )
}
export default Item