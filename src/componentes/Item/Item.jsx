

const Item = ({name, price, category, img, stock}) => {
  return (
    <article style={{borderStyle:"inset", borderRadius:"10px", margin:"8px"}}>
        <h1 style={{marginTop:"10px"}}>{name}</h1>
        <img src={img} style={{width:200, height:200}}/>
        <p>Categoría: {category}</p>
        <p>Capacidad: {stock}</p>        
        <h2>$ {price} UYU</h2>        
        <button style={{margin:"8px"}}>Ver detalle</button>
    </article>
  )
}
export default Item