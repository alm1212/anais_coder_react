import ItemContador from "../ItemContador/ItemContador"

const NuevoItemDetail = ({id, name, price, category, img, description, stock}) => {

   
    return (
      <article>
          <h1>{name}</h1>
          <img src={img} style={{width:300}}/>
          <p>Categoría: {category}</p>
          <p>Descripción: {description}</p>
          <h1>{price}</h1>
          <ItemContador stock={stock}/>
      </article>
    )
  }
  
export default NuevoItemDetail