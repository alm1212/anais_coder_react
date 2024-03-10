import ItemContador from "../ItemContador/ItemContador"

const NuevoItemDetail = ({id, name, price, category, img, description, stock}) => {

   
    return (
      <article style={{borderStyle:"inset", borderRadius:"10px", margin:"8px"}}>
          <h1>{name}</h1>
          <img src={img} style={{width:300}}/>
          <h2 style={{fontWeight: "bold", marginTop:"15px"}}>Categoría: {category}</h2>
          <p style={{textAlign: "justify", marginTop:"15px",  marginLeft:"15px", maxWidth:"600px"}}>Descripción: {description}</p>
          <h3 style={{fontWeight: "bold", marginTop:"15px"}}>Precio: ${price} UYU</h3>
          <ItemContador stock={stock}/>
      </article>
    )
  }
  
export default NuevoItemDetail