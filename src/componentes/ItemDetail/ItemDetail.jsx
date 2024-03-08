

const ItemDetail = ({id, name, price, category, img, description}) => {

   
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} style={{width:300}}/>
        <p>Categoría: {category}</p>
        <p>Descripción: {description}</p>
        <h1>{price}</h1>
    </article>
  )
}

export default ItemDetail
